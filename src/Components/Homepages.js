import React from 'react';
import "./Homepages.css";
import { Link } from 'react-router-dom'

function Homepages() {
  return (
    <div className="home">
         <video autoplay muted loop id="video-bg">
  <source src="https://cdn.pixabay.com/vimeo/842348732/starry-sky-169951.mp4?width=1280&hash=e5539835d59fc7ffab8d6b18b75eba9e3a1da3ec" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        <div class="content">  
              <h1>EXPLORE US</h1>
              <div>
                  <button type="button">Explore</button>
              </div>
          </div>
          <div class="element-with-shape"></div>

          <div class="chat-icon" id="chat-icon">
            <img src="https://media2.giphy.com/media/AdF6bDpzvjCemdJXtI/giphy.gif?cid=6c09b952jvjhgt1tq4v2b98ptj5r3l1e77amfps9lekk2lz2&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="Chatbot"/>
        </div>
        <div className="b">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          
       </ul> 
        </div>
    </div>
  );
}

export default Homepages;
