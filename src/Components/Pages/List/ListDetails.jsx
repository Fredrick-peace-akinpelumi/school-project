import React, {useEffect} from 'react'
import { MusicState } from '../../../context/musicContext'
import { useParams } from 'react-router-dom'

const ListDetails = () => {
  const {playList,songIndex,setSongIndex}=MusicState()
  const {listdetails}=useParams()

  const tracks=playList[listdetails]

  console.log(tracks);
  console.log(playList);

  // const track=playList[listdetails]
  // useEffect(()=>{
  //     if(listdetails){
  //         localStorage.activeSong=JSON.stringify(listdetails)
  //         setSongIndex(listdetails)
  //         console.log(track);
  //     }
  // },[listdetails])
  return (
    <div className='text-light'>ListDetails</div>
  )
}

export default ListDetails