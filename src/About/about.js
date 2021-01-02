import React from 'react'
import Seperator from '../Seperator/Seperator'
import './About.scss'
import Piano from '../assets/piano.png'
const About = () => {
  
  return (
    <div className="about-me">
      <Seperator text="ABOUT SHINYRAINBOW MUSIC"/>
      <img src={Piano} width="400px"  />
      <div className="first">
        Hi my name is Aoy living in Bangkok, I have a channel called 'Shinyrainbow', I update sheet music mostly i am interested in Ost songs but I do like other songs too. I do music as my hobby and sometimes I made sheet. I hope you like it. Thanks.
      </div>
      <div className="second">
        Hi my name is Aoy living in Bangkok, I have a channel called 'Shinyrainbow', I update sheet music mostly i am interested in Ost songs but I do like other songs too. I do music as my hobby and sometimes I made sheet. I hope you like it. Thanks.
      </div>
    </div>
  );
}

export default About

