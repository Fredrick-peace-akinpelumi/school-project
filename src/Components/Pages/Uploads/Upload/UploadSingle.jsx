import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { ClipLoader } from "react-spinners";
import axios from 'axios'
import useFetchDetails from '../../../customHooks/UseFetchDetails';

const UploadSingle = () => {
  const [first]=useFetchDetails();
  // console.log(first&&first.username)
  const [songData, setsongData] = useState({
    musicTitle: '',
    cover:'',
    music:'',
    genre:'',
    artist:first&&first.username
  })
  const [previewSource, setpreviewSource] = useState("")
  const [previewMusic, setpreviewMusic] = useState("")
  const [Loading, setLoading] = useState(false)

  const handleCoverFile = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setpreviewSource(reader.result);
    }

  }

  
  const uploadImage = async (previewSource) => {
    if (!previewSource) return;

    const imageData=new FormData()
    imageData.append("file", previewSource);
    imageData.append("upload_preset","cover-upload");
    imageData.append("cloud_name","daqidvjyp");
    try {
      setLoading(true);
      const res= await axios.post("https://api.cloudinary.com/v1_1/daqidvjyp/upload",imageData);
      // setpreviewSource(res.data.secure_url);
      songData.cover = res.data.secure_url;
      setLoading(false);      
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleMusicFile = (e) => {
    const file = e.target.files[0]
    
      var reader = new FileReader();
      reader.onload = function(event) {
          var data = event.target.result.split(',')
           , decodedImageData = btoa(data[1]);                    // the actual conversion of data from binary to base64 format
          // console.log(decodedImageData);
      };
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setpreviewMusic(reader.result);
      }

  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    await uploadMusic(previewMusic);
    await uploadImage(previewSource);
    try {
      setLoading(true);
      const response= await axios.post('http://localhost:5000/api/songs/singles/', {...songData,artist:first&&first.username})
      toast(response.data.message);
      setLoading(false);
    } catch (error) {
      toast(error);
      setLoading(false);
      
    }
  }

  const uploadMusic=async(previewMusic)=>{
    
    
    if(previewMusic){
      const musicData= new FormData();
      musicData.append("file", previewMusic);
      musicData.append("upload_preset","audio-upload");
      musicData.append("cloud_name","daqidvjyp");

      try {
        setLoading(true);
        const res= await axios.post("https://api.cloudinary.com/v1_1/daqidvjyp/upload",musicData);
        //setpreviewMusic(res.data.secure_url);
        songData.music = res.data.secure_url;
        setLoading(false);
        
      } catch (error) {
        console.log(error);
        setLoading(false); 
        
      }
    }
    
  }

  return (
    <>
      <ToastContainer />
      <div className="container col-lg-6">
        <div className="row">
          <h3 className='text-white text-center'>Upload your single tracks</h3>
          <form action="" onSubmit={handleSubmit}>
            <div className="form-floating col-4 mx-auto">
              <input type="text" placeholder='Music Title'
                onChange={event => { setsongData({ ...songData, musicTitle: event.target.value }) }}
                value={songData.musicTitle}
                className='form-control mb-3' />
              <label htmlFor="Music Title" className='ms-3'>Music Title</label>
            </div>
            <div className='form-group'>
              <label htmlFor="" className='text-white'>Music genre</label>
           <select name="" id=""
           className='form-select mb-2'
           onChange={event => { setsongData({ ...songData, genre: event.target.value }) }}
              value={songData.genre}
           >
            <option value="HipHop">HipHop</option>
            <option value="Rock">AfroBeat</option>
            <option value="Jazz">Amapiano</option>
            <option value="classical">classical</option>
           </select>
            </div>
            <label htmlFor="" className='text-white'>Music Cover</label>
            <input type="file"
              onChange={handleCoverFile}
              accept='image/*'
              className='form-control mb-3' />
            <label htmlFor="" className='text-white'>Music file</label>
            <input type="file"
              onChange={handleMusicFile}
              accept='audio/*'
              className='form-control mb-3' />
            <button className='btn btn-success rounded-pill mt-4' disabled={Loading} type='submit'>Upload</button>
          <ClipLoader loading={Loading} color='white' className='mx-auto' size={30} />
          </form>
        </div>
      </div>
    </>
  )
}

export default UploadSingle