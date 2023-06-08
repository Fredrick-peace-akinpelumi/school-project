import React, { useState, useEffect } from 'react'
import head from "../../images/head.PNG"
import './Comments.css'
import axios from 'axios'
import ReactTimeAgo from 'react-time-ago'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";
import { MusicState } from '../../context/musicContext';
import { useParams } from 'react-router-dom'
// import useFetchDetails from '../customHooks/UseFetchDetails';


function Comment() {
  // const [first]=useFetchDetails(false);
  const [comment, setComment] = useState("")
  const {playList}=MusicState()
  const [getComment, setgetComment] = useState([])
  const [Loading, setLoading] = useState(false)
  const [updatedComment, setupdatedComment] = useState('')
  const {musicdetails}=useParams()
  const track=playList[musicdetails]
  // console.log(track)

  const UploadComment = async () => {
    try {
      setLoading(true)
      const res = await axios.post('http://localhost:5000/api/comments/comment/', { Comment:comment,musicId:track._id })
      setupdatedComment(res.data.comments);

      toast(res.data.message)

      setComment("")
      setLoading(false)
    } catch (err) {
      toast.error(err);
      setLoading(false)
    }
  }
  useEffect(() => {
    // setLoading(true)
    if(track !=undefined){
      axios.get(`http://localhost:5000/api/comments/comment/${track._id}`)
        .then((res) => {
  
          toast.success(res.data.message)
          setgetComment(res.data)
          setLoading(false)
        })
        .catch((err) => {
          toast.error(err);
          setLoading(false)
        })
    }
  }, [updatedComment, comment,track])

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6 mx-auto mt-5 text-white">
            <h4 className='p-2  text-center rounded-4'>Comments</h4>
            <p>{getComment.length} Comments</p>
            <div className="d-flex gap-3">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              type="text" placeholder='Write a public comment..' className='form-control bg-dark text-white shadow-lg border-1 p-3' style={{ marginBottom: "5vh" }} />
              <button className='btn btn-primary h-25 mt-3' onClick={()=>UploadComment()}>Comment</button>
            </div>

            <ClipLoader loading={Loading} color='white' className='mx-auto' size={30} />

            {getComment.length>0 && getComment.sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).map((item, id) => {
              return (
                <div className="d-flex gap-4  shadow-lg p-2" key={id}
                style={{ marginBottom: "3vh" }}
                >
                  <img src={head} className='rounded-circle round' alt="" />
                  <div >
                    <b className='text-white ' style={{wordBreak:"break-word"}}>{item.Comment}</b>
                    <div className="d-flex gap-5 mt-3">
                      <p className='text-warning'>peace</p>
                      <ReactTimeAgo date={new Date(item.createdAt)} locale={"en-US"} className='ms-5' />
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </>
  )
}

// let res = result.sort((a: any, b: any) => {
//   return a.time.localeCompare(b.time);
// })

export default Comment