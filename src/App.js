import React from 'react'

import './App.css';
import twitter from './files/twitter.png';
import Github from './files/Github.png';
import Linkedin from './files/Linkedin.png';
import Logo from './files/LOGO.png';
import Resume from './files/Resume.pdf';
import Type from './files/type.png';
import './ripple.js';



function App() {
  return (
    <div className="App">
      <div className = "nav">
      <img src= {Logo} alt ="Twitter" height = {30} width = {35} />
      </div>

      <div className = "body">

      <div className = "socials">
        
      
      <div className = "each">
        <a href="https://twitter.com/M_airdward" target="_blank" rel="noreferrer">
          
          <img src= {twitter} alt ="Twitter" height = {30} width = {30} />
          </a>
        </div>
      <div className = "each">
        <a href="https://www.linkedin.com/in/michael-oghenerukevwe-edward-6b1533134/" target="_blank" rel="noreferrer">
      <img src= {Linkedin} alt ="Linkedin" height = {30} width = {30} />
        </a></div>
      <div className = "each"><a href="https://github.com/iamoghenerukevwe" target="_blank" rel="noreferrer">
      <img src= {Github} alt ="Github" height = {30} width = {30} />
        </a></div>
      
      </div>
      
      <div className = "text">
        <div className = "small"> Hi I'm</div>


        <div className = "name">
          
        michael
          <span>.</span></div>
        <div className = "write"><span className= "bold">Graphics, Web, Python</span><br/>
          You can find me toying with any of the above 
          mentioned as I've got a passion for all of these. 
          My most absorbing goal is to see <span>web2</span>  successfully 
          port to <span>web3</span>.
          </div>

          
          <a href= {Resume}  rel="noreferrer">
            
          <div className = "ripple" ></div>
            </a>

        
          
        
      </div>
      
      <div className = "img">
      <img src= {Type} alt ="Github" height = {570} width = {520} />
      </div>

    
      </div>
    </div>
  );
}

export default App;


