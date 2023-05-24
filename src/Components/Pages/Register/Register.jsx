import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import './Register.css'
import { ToastContainer, toast } from 'react-toastify';
import { ClipLoader } from "react-spinners";
import * as yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const vector ='./images/Vector.png'
const vector1 ='./images/Vector1.png'
// const sing = './images/sing.png'


const Register = () => {
    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:'',
        },
        onSubmit: (values) => {
            setLoading(true)
            axios.post('http://localhost:5000/api/user/register/', values)
            .then((res)=>{
                console.log(res);

             if (res.data.success) {
                 navigate('/login')
              }else{
                toast(res.data.message);
              }
              setLoading(false)
            }).catch(err=>{
              if (err) {
             
                toast(err.message);
              }else{
                toast(err.message);
              }
              setLoading(false)
        })
        },
        validationSchema : yup.object({
            username: yup.string().required('Username is required'),
            email: yup.string().email('Invalid email format').required('Email is required'),
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
                    <h3 className='text-light'>Sign Up to continue</h3>
                    <form action="" onSubmit={formik.handleSubmit}>
                    <div className="form-floating">
                        <input type="text" placeholder='Username'
                        name='username'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                         className='form-control mb-5 shadow-0 border-0 mt-4 shadow'/>
                    {formik.touched.username? <p className='text-danger'>{formik.errors.username}</p>:""}
                        <label htmlFor="">Username</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" placeholder='Email@gmail.com'
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                         className='form-control mb-5 shadow-0 border-0 shadow'/>
                        <label htmlFor="">Email@gmail.com</label>
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
                    >Register 
                    </button>
                    <ClipLoader loading={Loading} color='white' size={30} />
                    </form>
                    <Link className='underline-none text-success float-end ms-2' to="/login">Login Here </Link ><span className='text-white float-end'>If you already have an account</span> 
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Register