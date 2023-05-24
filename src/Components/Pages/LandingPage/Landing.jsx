import React, {useEffect,useState} from 'react'
import './Landing.css'
import axios from 'axios'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  const img1 ='./images/1.jpg'
  const img2 ='./images/2.jpg'
  const img3 ='./images/3.jpg'
  const img4 ='./images/4.jpg'
  const img5 ='./images/5.jpg'
  const img6 ='./images/6.jpg'
  const img7 ='./images/7.jpg'
  const img8 ='./images/8.jpg'
  const img9 ='./images/9.jpg'
  const popular ='./images/arjit.jpg'
  const popular1 ='./images/alan.jpg'
  const popular2 ='./images/atif.jpg'
  const popular3 ='./images/guru.jpg'
  const popular4 ='./images/dhvani.jpg'
  const popular5 ='./images/Diljit_Dosanjh.jpg'
  const popular6 ='./images/Diljit_Dosanjh.jpg'
  const popular7 ='./images/neha.jpg'


//   const img10 ='./images/10.jpg'
//   const img11 ='./images/11.jpg'
//   const img12 ='./images/12.jpg'
//   const mg13 ='./images/13.jpg'
//   const img14 ='./images/14.jpg'
//   const img15 ='./images/15.jpg'
//   import SpotifyWebApi from 'spotify-web-api-node';

const Home = () => {
    // const [allNewSongs, setallNewSongs] = useState([])
    // const spotifyApi = new SpotifyWebApi({
    //     clientId:"a01806c433cc4cfeaa6a13e24cc07085"
    // })
    // useEffect(() => {
   
    // }, )
    
    // useEffect(() => {
    //         axios.get('https://musica-api.up.railway.app/popular').then((response,)=>{
    //             setallNewSongs(response.data) ;
    //             console.log(allNewSongs);
    //         }).catch({
    //             if (error) {
    //                 toast(error.message)
    //             }
    //         })
    // })
    const handleLogin = () => {

    }
    
  return (
    <>
    {/* <button className="btn btn-success ms-5" onClick={()=>handleLogin()}>Login to spotify</button> */}
    <header className='mb-5'>
        {/* <button onClick={()=>handleLogin()}>Login to spotify</button> */}
        <ToastContainer />
    <div className="menu_side">
        <h1>Playlist</h1>
        <div className="playlist">
            <h4 className="active"><span></span><i className="bi bi-music-note-beamed"></i> Playlist</h4>
            <h4 ><span></span><i className="bi bi-music-note-beamed"></i> Last Listening</h4>
            <h4 ><span></span><i className="bi bi-music-note-beamed"></i> Recommended</h4>
        </div>
        <div className="menu_song">
            <li className="songItem">
                <span>01</span>
                <img src={img1} alt="Alan"/>
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i className="bi playListPlay bi-play-circle-fill" id="1"></i>
            </li>
            <li className="songItem">
                <span>02</span>
                <img src={img2} alt="Alan"/>
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i className="bi playListPlay bi-play-circle-fill" id="2"></i>
            </li>
            <li className="songItem">
                <span>03</span>
                <img src={img3} alt="Alan"/>
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i className="bi playListPlay bi-play-circle-fill" id="3"></i>
            </li>
            <li className="songItem">
                <span>04</span>
                <img src={img4} alt="Alan"/>
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i className="bi playListPlay bi-play-circle-fill" id="4"></i>
            </li>
            <li className="songItem">
                <span>05</span>
                <img src={img5} alt="Alan"/>
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i className="bi playListPlay bi-play-circle-fill" id="5"></i>
            </li>
            <li className="songItem">
                <span>06</span>
                <img src={img6} alt="Alan"/>
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i className="bi playListPlay bi-play-circle-fill" id="6"></i>
            </li>
        </div>
    </div>


    <div className="song_side">
        <nav>
            <ul>
                <li>Discover <span></span></li>
            </ul>
            <div className="user">
                <img src="img/KDS CODER.png" alt="User" title="KDS CODER (Jahid Khan)"/>
            </div>
        </nav>
        <div className="content">
            <h1>Alen Walker-Fade</h1>
            <p>
                You were the shadow to my light Did you feel us Another start You fade 
                <br/>
                Away afraid our aim is out of sight Wanna see us Alive
            </p>
            <div className="buttons">
                <button>PLAY</button>
                <button>FOLLOW</button>
            </div>
        </div>
        <div className="popular_song">
            <div className="h4">
                <h4>Popular Song</h4>
                <div className="btn_s">
                    <i id="left_scroll" className="bi bi-arrow-left-short"></i>
                    <i id="right_scroll" className="bi bi-arrow-right-short"></i>
                </div>
            </div>
            <div className="pop_song">
                <li className="songItem">
                    <div className="img_play">
                        <img src={img1} alt="alan"/>
                        <i className="bi playListPlay bi-play-circle-fill" id="7"></i>
                    </div>
                    <h5>On My Way
                        <br/>
                        <div className="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                        <img src={img2} alt="alan"/>
                        <i className="bi playListPlay bi-play-circle-fill" id="8"></i>
                        {/* <!-- change All id  --> */}
                    </div>
                    <h5>On My Way
                        <br/>
                        <div className="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                        <img src={img3} alt="alan"/>
                        <i className="bi playListPlay bi-play-circle-fill" id="9"></i>
                    </div>
                    <h5>On My Way
                        <br/>
                        <div className="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                        <img src={img4} alt="alan"/>
                        <i className="bi playListPlay bi-play-circle-fill" id="10"></i>
                    </div>
                    <h5>On My Way
                        <br/>
                        <div className="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                        <img src={img5} alt="alan"/>
                        <i className="bi playListPlay bi-play-circle-fill" id="11"></i>
                    </div>
                    <h5>On My Way
                        <br/>
                        <div className="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                        <img src={img6} alt="alan"/>
                        <i className="bi playListPlay bi-play-circle-fill" id="12"></i>
                    </div>
                    <h5>On My Way
                        <br/>
                        <div className="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                        <img src={img7} alt="alan"/>
                        <i className="bi playListPlay bi-play-circle-fill" id="13"></i>
                    </div>
                    <h5>On My Way
                        <br/>
                        <div className="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                        <img src={img8} alt="alan"/>
                        <i className="bi playListPlay bi-play-circle-fill" id="14"></i>
                    </div>
                    <h5>On My Way
                        <br/>
                        <div className="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                        <img src={img9} alt="alan"/>
                        <i className="bi playListPlay bi-play-circle-fill" id="15"></i>
                    </div>
                    <h5>On My Way
                        <br/>
                        <div className="subtitle">Alan Walker</div>
                    </h5>
                </li>
            </div>
        </div>
        <div className="popular_artists">
            <div className="h4">
                <h4>Popular Artists</h4>
                <div className="btn_s">
                    <i id="left_scrolls" className="bi bi-arrow-left-short"></i>
                    <i id="right_scrolls" className="bi bi-arrow-right-short"></i>
                </div>
            </div>
            <div className="item">
                <li>
                    <img src={popular} alt="Arjit Singh" title="Arjit Singh"/>
                </li>
                <li>
                    <img src={popular1} alt="Alan Walker" title="Alan Walker"/>
                </li>
                <li>
                    <img src={popular2} alt="Atif Aslam" title="Atif Aslam"/>
                </li>
                <li>
                    <img src={popular3} alt="Guru RAndawa" title="Guru Randawa"/>
                </li>
                <li>
                    <img src={popular4} alt="Dhvani" title="Dhvani"/>
                </li>
                <li>
                    <img src={popular5} alt="Diljit Dosanjh" title="Diljit Dosanjh"/>
                </li>
                <li>
                    <img src={popular6} alt="Jubin Nautiyal" title="Jubin Nautiyal"/>
                </li>
                <li>
                    <img src={popular7} alt="Neha Kakker" title="Neha Kakker"/>
                </li>
                <li>
                    <img src="img/justin-bieber-lede.jpg" alt="Justin Bieber" title="Justin Bieber"/>
                </li>
                <li>
                    <img src="img/honey.jpg" alt="Honey Singh" title="Honey Singh"/>
                </li>
                <li>
                    <img src="img/akhil.jpg" alt="Akhil" title="Akhil"/>
                </li>
                {/* <!-- change all img  --> */}
            </div>
        </div>
    </div>


    <div className="master_play">
        <div className="wave">
            <div className="wave1"></div>
            <div className="wave1"></div>
            <div className="wave1"></div>
        </div>
        <img src="img/26th.jpg" alt="Alan" id="poster_master_play"/>
        <h5 id="title">Vande Mataram<br/>
            <div className="subtitle">Bankim Chandra</div>
        </h5>
        <div className="icon ">
            <i className="fa-solid fa-backward-fast" id="back"></i>
            {/* <i className="bi bi-play-fill" ></i> */}
            <i className=" bi fa-solid fa-play" id="masterPlay"></i>
            <i className="fa-solid fa-forward-fast" id="next"></i>
        </div>
        <span id="currentStart">0:00</span>
        <div className="bar">
            <input type="range" id="seek" min="0" value="0" max="100"/>
            <div className="bar2" id="bar2"></div>
            <div className="dot"></div>
        </div>
        <span id="currentEnd">0:00</span>

        <div className="vol">
            <i className="bi bi-volume-down-fill" id="vol_icon"></i>
            <input type="range" id="vol" min="0" value="30" max="100"/>
            <div className="vol_bar"></div>
            <div className="dot" id="vol_dot"></div>
        </div>
    </div>
    </header>
    </>
  )
}

export default Home