import React from 'react';
import Feature from '../../components/feature/feature';
import './projects.css';

const Projects = () => (
  <div className="pf__projects section__margin" id="project">
    <div className="pf__projects-feature">
      <Feature title="Om meg" text="Begynte utviklerkarrieren min i veldig ung alder. I tidlig barneskolealder hadde jeg rundet W3S sine kurs for HTML og CSS. Begynte med nettside-design etter det og brukte mindre og mindre det jeg hadde lært. Photoshop og Illustrator ble mine nye verktøy, og i årene som kom ble HTML og CSS mindre  brukt, og jeg skrev ikke en linje med kode fra jeg startet på ungdomsskolen til jeg fikk bruk for det på videregående igjen. På grunn av begrenset kjennskap til mer avanserte språk tok det enda fler år før jeg satte i gang igjen. Etter en kneoperasjon i 2021 fant jeg ut at jeg ville begynne igjen, så jeg tok hundrevis av timer med kurs i JS og React.JS og har endelig funnet tilbake til følelsen jeg fikk som barn av å skrive kode." />
    </div>
    <div className="pf__projects-heading">
      <h1 className="gradient__text">I stadig utvikling...</h1>
      <p>Interessert i hva jeg har jobbet med? Klikk her</p>
    </div>
    <div className="pf__projects-container">
      <Feature title="Front-End" text="Med mange års erfaring kombinert med en evne til å lære raskt har jeg god kjennskap til JavaScript og rammeverket React. " />
      <Feature title="UI/UX" text="Jeg har freelancet med grafisk design i en årerekke og har derfor god kjennskap til UI/UX-design i praksis" />
      <Feature title="Lærevillig" text="Jeg er både læredyktig og lærevillig, og lærer svært raskt. Jeg setter meg gjerne inn i nye rammeverk eller språk etter etterspørsel." />
    </div>
  </div>
);

export default Projects;