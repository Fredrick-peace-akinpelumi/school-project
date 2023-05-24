import axios from 'axios'
import React ,{useState,useEffect}from 'react'
import {useCookies} from "react-cookie"
import { useNavigate } from 'react-router';
import { toast,  } from "react-toastify";


const useFetchDetails = () => {
  const navigate=useNavigate()
  const [cookies,setCookie]=useCookies(["currentUser"])
  const [first, setfirst] = useState(undefined)

  useEffect(()=>{
    fetch()
  },[])

    const fetch=()=>{
      if(!cookies?.currentUser){
        navigate("/register")
      }else{
        axios.get("http://localhost:5000/api/",{headers:{token:cookies.currentUser}}).then((value)=>{
          if(value.data.messsage&& !value.data.status){
            toast.error(value.data.message, { position: toast.POSITION.TOP_CENTER });
          }else{
            setfirst(value.data.user)
          }
        }).catch((err)=>{
          toast.error(err, { position: toast.POSITION.TOP_CENTER })
        })
      }
    }
    return (
        [first]
        )
}

export default useFetchDetails