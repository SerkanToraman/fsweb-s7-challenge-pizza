import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";



import '../css/MainPage.css'



const RootStyle  = styled.div`
  background:#CE2829;
  height:100vh;
`

const MainPage = () => {

  return(
    <RootStyle>
        <div className="main">   
          <h2 className="row1 ">Teknolojik Yemekler</h2>
          <h1 className="row2 center">KOD ACIKTIRIR <br/>
              PIZZA, DOYURUR
          </h1>

          <div className="buttonMain">
          <Link to="/pizza"><button class="button" id="order-pizza">ACIKTIM</button></Link> 
          </div>
          <div className="img">
            <img src={require("../Assets/adv-aseets/adv-form-banner.png")}
            alt ="Ana Sayfa Pizza" style={{transform:'rotate(180deg)'}}/>
          </div>
        </div>
     </RootStyle>
  );
}

export default MainPage;