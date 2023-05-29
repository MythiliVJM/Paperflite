import React,{useState,useEffect} from 'react'
import {TextField} from  "@mui/material";
import useStyles from "../styles";
import {useSelector,useDispatch} from "react-redux";
import NavBar from './Navbar';
import { getMovies } from '../redux/features/movieSlice';
const Search = () => {
    const [name, setName]= useState("spider");
    const classes=useStyles();
    const {moviesList: {Error: error}} = useSelector((state) => ({...state.movie}))
    
    const dispatch = useDispatch();
       useEffect(() => {
           dispatch(getMovies(name));
       },[name])
  return (
    <div>
        <NavBar/>
        {/* <NavBar /><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr><hr></hr>
        <hr></hr><hr></hr><hr></hr><hr></hr> */}
        <h2 className={classes.title} id='Search'>Search your favourite movies</h2>
        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
           <TextField 
           type='text'
           fullWidth
           value={name}
           sx={{m:1, width: "55ch"}}
           onChange={(e) => setName(e.target.value)}
           />
           {error && <p className={classes.error}>{error}</p>}
        </form>
    </div>
  )
}
export default Search;
