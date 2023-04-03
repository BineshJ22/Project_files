import React, { useEffect, useState } from 'react';
import axios from '../axios';
import YouTube from 'react-youtube';
import { API_KEY,ImageUrl } from '../../constants/constants';
import './Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [videoKey, setVideoKey] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        );
        const results = response.data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        const selectedMovie = results[randomIndex];
        setMovie(selectedMovie);
        const videoResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos?api_key=${API_KEY}&language=en-US`
        );
        const videoResults = videoResponse.data.results;
        if (videoResults.length > 0) {
          setVideoKey(videoResults[0].key);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);

  const handlePlayClick = () => {
    if (videoKey) {
      setShowVideo(true);
    }
  };

  const handleCloseClick = () => {
    setShowVideo(false);
  };

  const handleError = (event) => {
    console.log('An error occurred while loading the YouTube player:', event.target);
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <div
        className='banner'
        style={{ backgroundImage: `url(${movie ? ImageUrl + movie.backdrop_path : ''})` }}
      >
        <div className='content'>
          <h1 className='title'>{movie ? movie.title : 'No movie found'}</h1>
          <div className='banner_buttons'>
            <button className='button transparent' onClick={handlePlayClick}>
              Play
            </button>
          </div>
          <h1 className='description'>{movie ? movie.overview : ''}</h1>
        </div>
        {showVideo && (
          <div className='video'>
            <div className='video__overlay' onClick={handleCloseClick}></div>
            <div className='video__content'>
              <YouTube videoId={videoKey} opts={opts} onError={handleError} />
              <button className='video__close' onClick={handleCloseClick}>
                Close
              </button>
            </div>
          </div>
        )}
        <div className='fade_bottom'></div>
      </div>
    </div>
  );
};

export default Banner;