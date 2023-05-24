import React from 'react'
import { Link } from 'react-router-dom'
import './category.css'
const data=[
  {'title':"Singles",'text':'Singles is a type of music that contains only one track, Upload your singles here', 'link':"/uploadSingle"},
  {'title':"Extended Play",'text':'Extended Play is a type of music that contains Four to FIve Tracks, Upload your Ep here', 'link':"/uploadEp"},
  {'title':"Album",'text':'Album is a type of music that contains 12 Tracks, Upload your album here', 'link':"/uploadAlbum"}
]
const Category = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex  flex-wrap justify-content-around gap-2 ">
              {data.map((val,index)=>(
            <div className="col-lg-4">

              <div className="card" key={index}>
                <div className="card-body">
                  <h5 className="card-title text-center">{val.title}</h5>
                  <p className="card-text">{val.text}</p>
                  <Link className="btn btn-primary" to={val.link}>Upload Now!!</Link>
                </div>
              </div>
            </div>
              ))}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Category