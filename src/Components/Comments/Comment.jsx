import React, {useState, useEffect} from 'react'
import head from "../../images/head.PNG"
import './Comments.css'
import axios from 'axios'
import ReactTimeAgo from 'react-time-ago'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";
// import useFetchDetails from '../customHooks/UseFetchDetails';


function Comment() {
  // const [first]=useFetchDetails(false);
  const [Comment, setComment] = useState("")
  const [getComment, setgetComment] = useState("")
  const [Loading, setLoading] = useState(false)
  const [updatedComment, setupdatedComment] = useState('')

  const UploadComment =async()=>{
    try{
      setLoading(true)
      const res = await axios.post('http://localhost:5000/api/comments/comment/', {Comment})
      setupdatedComment(res.data.comments);
    
      toast(res.data.message)
     
      setComment("")
      setLoading(false)
    }catch(err){
      toast.error(err);
      setLoading(false)
    }
  }
  useEffect(() => {
    // setLoading(true)
    axios.get('http://localhost:5000/api/comments/comment/')
    .then((res)=>{
      
      toast.success(res.data.message)
       setgetComment(res.data)
       
        setComment(Comment)

      setLoading(false)
    })
    .catch((err)=>{
      toast.error(err);
      setLoading(false)
    })
  }, [updatedComment,Comment ])
  
  return (
    <>
      <ToastContainer />
    <div className="container">
        <div className="row">
            <div className="col-lg-6 mx-auto mt-5 text-white">
                <h4 className='p-2 bg-warning text-center rounded-4'>Comments</h4>
                <p>{getComment.length} Comments</p>
            <input
            value={Comment}
            onKeyUp={(e)=>{
              e.code ==="Enter" && UploadComment();
            }}
            onChange={(e)=>setComment(e.target.value)}
           
             type="text" placeholder='Write a public comment..' className='form-control bg-dark text-secondary shadow-sm border-0 p-3 mb-3'/>
          <ClipLoader loading={Loading} color='white' className='mx-auto' size={30} />

        {Object.values(getComment).map((item,id)=>{
          return(
            <div className="d-flex gap-4 mb-3 shadow-lg p-2" key={id}>
        <img src={head} className='rounded-circle round' alt="" />
            <div>
              <b className='text-white'>{item.Comment}</b>
              <div className="d-flex gap-5 mt-3">
              <p className='text-warning'>peace</p>
            <ReactTimeAgo date={new Date(item.createdAt)} locale={"en-US"} className='ms-5'/>
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

export default Comment