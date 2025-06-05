import React from 'react'

function Footer() {
    const Footer = () =>{
  return (
   <>
    <footer className='footer'>
        <p>&copy;{ new Date().getFullYear()} </p>
        <ul className='footer-links'>
            <li><a href='#'> A propos</a></li>
            <li><a href='#'> Condition d'utilisation</a></li> 
            <li><a href='#'> Contact</a></li>

        </ul>
    </footer>
    <div>Footer</div>
   </>
   
  );
   
    
};
}

export default Footer;
