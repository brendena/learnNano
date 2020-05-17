import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonRouterLink } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux'
import './HomePage.css';
import nanoLogo from '../images/Nano_Logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";



const HomePage: React.FC = () => {

  return (
    <IonPage>
      <IonContent>

        <div className="centerDisplay">
          <div id="learnNanoTextContainer">
            <p id="learnNanoText">LEARN</p>
            <img src={nanoLogo} alt="Nano's logo" height="50px" />
          </div>
          <div>
            <IonRouterLink href="/#/basicExample" >
              <p className="textHomePage">basic</p>
            </IonRouterLink>
            
          </div>
          
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
