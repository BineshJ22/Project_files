import React,{useEffect,useState} from 'react'
import { API_KEY,ImageUrl } from '../../constants/constants';
import axios from '../axios';
import './Banner.css'

function Banner() {
  const [movie,setMovie]=useState(null)
  useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`).then((response)=>{
          const results = response.data.results;
          const randomIndex = Math.floor(Math.random() * results.length);
          setMovie(results[randomIndex]);
        })
        .catch((error) => console.log(error));
    }, []);
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? ImageUrl+movie.backdrop_path: ""})`}}>
    
        <div className='content'>
            <h1 className='title'>{movie? movie.title:'No movie found'}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie?movie.overview:''}</h1>

        </div>
    <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner