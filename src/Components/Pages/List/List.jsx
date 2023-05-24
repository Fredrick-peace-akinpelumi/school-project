import React, {useState} from 'react'
import './List.css'

const PlayList = () => {
    const [color, setcolor] = useState(false)
    const collection =()=>{
        setcolor(true)
    }
  return (
    <>
    <div className="container">
        <div className="d-flex col-4 gap-2">
            <button className='btn  btn-warning col-4 text-white rounded-pill' onClick={()=>collection()}>My Collection</button>
        </div>
        <div className="d-flex flex-wrap justify-content-between">
            <div className='list1'>
                <p className='fs-3 text'>Limits</p>
            </div>
            <div className='list2'>
                <p className='fs-3 text-white'>Timeless</p>
            </div>
            <div className='list3'>
                <p className='fs-3 text-white'>Grit & Lust</p>
            </div>
            <div className='list4'>
                <p className='fs-3 text-white'>High Tension</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default PlayList