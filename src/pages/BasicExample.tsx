import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonRouterLink } from '@ionic/react';
import './BasicExample.css';
import nanoLogo from '../images/Nano_Logo.svg';


const BasicExample: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <p>Learn Nano</p>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      <iframe
        src="https://embed.plnkr.co/35mhfT4NVfhXXSMV?show=app,preview&deferRun"
        width="100%"
        height="100%"
      >

      </iframe>

      </IonContent>
    </IonPage>
  );
};

export default BasicExample;
