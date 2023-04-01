import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube';
import { postUrl,API_KEY } from '../../constants/constants';
import axios from '../axios';
import './Rowpost.css'


function RowPost(props) {
    const [movie,setMovie]=useState([])
    const [UrlId,setUrlId]=useState('')

    useEffect(()=>{
        axios.get(props.url)
        .then(response=>{
            console.log(response.data)
            setMovie(response.data.results)
        }).catch((error) => console.log(error));
    }, []);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          
          autoplay: 0,
        },
      };
      const handleMovie=(id)=>{
            console.log(id)
            axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
                if(response.data.results!==0){
                    setUrlId(response.data.results[0])

                } else {
                    console.log('Not available')
                }
            })
      }
      const scrollLeft = () => {
        const container = document.getElementById(`scroll-container-${props.title}`);
        container.scrollBy(-300, 0);
     };
     
     const scrollRight = () => {
        const container = document.getElementById(`scroll-container-${props.title}`);
        container.scrollBy(300, 0);
     };

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <button id={`scroll-left-${props.title}`} className='scroll-button left' onClick={scrollLeft}><i className="fas fa-chevron-left"></i></button>
            <div id={`scroll-container-${props.title}`} className='posters-container'>
            {movie.map((obj)=>
                <img key={obj.id} onClick={()=>handleMovie(obj.id)} className='poster' alt='404' src={`${postUrl+obj.poster_path}`}/>
            )}
            </div>
<button id={`scroll-right-${props.title}`} className='scroll-button right' onClick={scrollRight}><i className="fas fa-chevron-right"></i></button>

             {UrlId &&   <YouTube  opts={opts} videoId={UrlId.key}/> }

        </div>
       
    )
}

export default RowPost