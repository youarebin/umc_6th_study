import { useState } from 'react'
import { movies } from './API'
import './App.css'

function App() {
  const [showOverView, setShowOverView] = useState(false);

  return (                                  
    <div className='container'>
      {movies.results.map(movie =>(
        <div key={movie.id} className='movieContainer'>                       
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
            alt={movie.title}
          />
          <div className='overView'>
            <p id='overViewTitle'>{movie.title}</p>
            <p id='overViewExplain'>{movie.overview}</p>
          </div>

          <div className='explain'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            <span>{movie.title}</span>
            <span>{movie.vote_average}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
