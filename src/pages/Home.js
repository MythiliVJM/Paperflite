import React from 'react'
import Search from '../components/Search';
import MoviesList from '../components/MovieList';


const Home = () => {
  return (
    <div>
       <>
         <Search/>
         <MoviesList/>
       </>
    </div>
  );
};
export default Home;
