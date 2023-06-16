import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { ClipLoader } from "react-spinners";
import axios from 'axios'
import useFetchDetails from '../../../customHooks/UseFetchDetails';
import { useNavigate } from 'react-router-dom';


const UploadEp = () => {
  const navigate = useNavigate()
  const [first] = useFetchDetails();
  const [Loading, setLoading] = useState(false)
  const [trackArr, settrackArr] = useState([])
  const [length, setlength] = useState(0)
  const [songData, setsongData] = useState({
    epTitle: "",
    cover: "",
    artist: first&&first.username,
    artistId:first._id,
    genre: "HipHop",
    track: null
  })
  const [tracksData, settracksData] = useState({
    music: '',
    trackTitle: '',
    cover:""
  })

  const [previewSource, setpreviewSource] = useState("")
  const [previewMusic, setpreviewMusic] = useState("")
  // setsongData({...songData, tracks)

  const handleCoverFile = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setpreviewSource(reader.result);
      console.log(previewSource);
    }
  }

  const uploadImage = async (previewSource) => {
    if (!previewSource) return;

    const imageData = new FormData()
    imageData.append("file", previewSource);
    imageData.append("upload_preset", "cover-upload");
    imageData.append("cloud_name", "daqidvjyp");
    try {
      setLoading(true);
      const res = await axios.post("https://api.cloudinary.com/v1_1/daqidvjyp/upload", imageData);
      // setpreviewSource(res.data.secure_url);
      songData.cover = res.data.secure_url;
      tracksData.cover=res.data.secure_url
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  const uploadMusic = async (previewMusic) => {
    if (previewMusic) {
      const musicData = new FormData();
      musicData.append("file", previewMusic);
      musicData.append("upload_preset", "audio-upload");
      musicData.append("cloud_name", "daqidvjyp");

      try {
        setLoading(true);
        const res = await axios.post("https://api.cloudinary.com/v1_1/daqidvjyp/upload", musicData);
        //setpreviewMusic(res.data.secure_url);
        tracksData.musicURL=res.data.secure_url;
        console.log(tracksData);
        setLoading(false);
        navigate('/playlist')

      } catch (error) {
        console.log(error);
        toast(error.message)
        setLoading(false);
      }
    }
  }

  const handleMusicFile = (e) => {
    const file = e.target.files[0]
    var reader = new FileReader();
    reader.onload = function (event) {
      var data = event.target.result.split(',')
        , decodedImageData = btoa(data[1]);                    // the actual conversion of data from binary to base64 format
      // console.log(decodedImageData);
    };
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setpreviewMusic(reader.result);
      // console.log(previewMusic);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadImage(previewSource)
    console.log(songData);
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/songs/extendedPlay/', { ...songData, artist:first && first.username, track:trackArr,artistId:first && first._id })
      toast.success(response.data.message);
      setLoading(false);
    } catch (error) {
      toast(error);
      setLoading(false);
    }
  }

  const addTrack = async (e) => {
    e.preventDefault();
    if(trackArr.length===5){
      toast.error("track can't be more than 5")
    }else{
      await uploadMusic(previewMusic)
      let found = trackArr.find(track => track.musicURL === tracksData.musicURL)
      if (tracksData.musicURL === "" || tracksData.trackTitle === "") {
        toast("Inputs are empty try again")
      } else if (found) {
        toast("Already added track")
      } else {
        let nArr = [...trackArr, tracksData]
        settrackArr(nArr)
        // settracksData(tracks=>[...tracks, musicUrl])
        console.log(nArr);
        setlength(nArr.length)
        toast.success(nArr.length + " Added")
        // if (nArr.length === 5 || nArr.length < 4) {
        //   toast.error("Minimum of 4 tracks, Maximum of 5 tracks")
        // }
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="container col-lg-6">
        <div className="row">
          <h3 className='text-white text-center'>Upload your Extended play tracks</h3>
          <form action="" onSubmit={handleSubmit}>
            <div className="form-floating col-4 mx-auto">
              <input type="text" placeholder='EP Title'
                onChange={e => { setsongData({ ...songData, epTitle: e.target.value }) }}
                value={songData.epTitle}
                className='form-control mb-3' />
              <label htmlFor="Music Title" className='ms-3'>EP Title</label>
            </div>
            <div className='form-group'>
              <label htmlFor="" className='text-white'>Music genre</label>
              <select name="" id=""
                className='form-select mb-2'
                onChange={event => { setsongData({ ...songData, genre: event.target.value }) }}
                value={songData.genre}
              >
                <option value="HipHop">HipHop</option>
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
                <option value="classical">classical</option>
              </select>
            </div>
            <label htmlFor="" className='text-white'>Ep Cover</label>
            <input type="file"
              onChange={handleCoverFile}
              accept='image/*'
              className='form-control mb-3' />

            <div className='shadow p-4'>
              <h3 className='text-white'>Tracks</h3>
              <div className="form-floating mx-auto">
                <input type="text" placeholder='Track Title'
                  onChange={e => settracksData({ ...tracksData, trackTitle: e.target.value })}
                  // onChange={(e)=>settrackTitle(e.target.value)}
                  className='form-control mb-3' />
                <label htmlFor="Music Title" className='ms-3'>Track Title</label>
              </div>
              <label htmlFor="" className='text-white'>Music file</label>
              <input type="file"
                onChange={handleMusicFile}
                accept="audio/*"
                className='form-control mb-2' />
              <p className='text-white'>Added {length} of 5</p>
              <button 
              disabled={Loading}
              className='btn btn-primary'>
              <i
                onClick={(e) => addTrack(e)}
              >Add Track</i>
              </button>
            </div>

            <button disabled={Loading} className='btn btn-success rounded-pill mt-4' type='submit'>Upload EP</button>
            <ClipLoader loading={Loading} color='white' size={30} />
          </form>
        </div>
        {/* {previewSource &&(
        <img src={previewSource} alt="" className='col-4' />
      )}
      {previewMusic &&(
        <audio src={previewMusic} controls></audio>
      )} */}
      </div>
    </>
  )
}

export default UploadEp