import React from 'react'
import "../Sass/Navbar.scss";
export default function navBar() {
  return (
    <div>
        <nav class="navbar">
        <div class="navbar-container container">
            <h4 className='logo'>Vidly</h4>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
           
        </div>
    </nav>
    </div>
  )
}
