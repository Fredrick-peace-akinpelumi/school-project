import {React, useEffect, useState} from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import {useCookies} from "react-cookie"
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { ClipLoader } from "react-spinners";
// import { useCookies } from "react-cookie";


import axios from 'axios'
const vector ='./images/Vector.png'
const vector1 ='./images/Vector1.png'


const Register = () => {
    const [Loading, setLoading] = useState(false)
  const [cookies, setCookies] = useCookies(["currentUser"]);

const navigate = useNavigate()
   
    // const [message, setmessage] = useState("")

    
    
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit: (values) => {
            setLoading(true)
            axios.post('http://localhost:5000/api/user/login/', values)
        .then((res)=>{
            console.log(res);
            if (res.data.success) {
                navigate('/profile')
                setCookies("currentUser", res.data.token, {
                    path: "/",
                    maxAge: 333333333,
                    sameSite: true,
                  });
                toast(res.data.message);
              }else{
                toast.warning(res.data.message, {position: toast.POSITION.TOP_CENTER,});
              }
              setLoading(false)
            }).catch(err=>{
              if (err) {
                console.log(err.message)
                toast(err.message);
              }else{
                toast(err.message);
              }
              setLoading(false)
        })
    },
        validationSchema : yup.object({
            email: yup.string().required('Email is required'),
            password: yup.string().required('Password is required').min(7,"Password must be up to 7 characters")
        })
    })

  return (
    <>
        <ToastContainer />

        <div className="container ">
            <div className="row">
            
                <div className="col-lg-4 shadow p-4 mx-auto">
                    <div>
                        <img src={vector} alt="" />
                        <img className='imgg' src={vector1} alt="" />
                    </div>
                    <h3 className='text-light'>Welcome Back</h3>
                    <form action="" onSubmit={formik.handleSubmit}>
                    <div className="form-floating">
                        <input type="text" placeholder='Email or username'
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                         className='form-control mb-5 shadow-0 border-0 shadow'/>
                        <label htmlFor="">Email or username</label>
                    {formik.touched.email? <p className='text-danger'>{formik.errors.email}</p>:""}
                    </div>
                    <div className="form-floating">
                        <input type="password" placeholder='Password'
                        name='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                         className='form-control mb-5 shadow-0 border-0 shadow'/>
                        <label htmlFor="">Password</label>
                    </div>
                    {formik.touched.password? <p className='text-danger'>{formik.errors.password}</p>:""}
                    <button className='btn rounded-pill btn-success w-25'
                    type='submit'
                    >Login</button>
                    <ClipLoader loading={Loading} color='white' size={30} />
                    </form>
                    <Link className='underline-none text-success float-end ms-2' to="/Register">Register Here </Link><span className='text-white float-end'>If you do not have an account</span> 
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Register