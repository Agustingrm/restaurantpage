/* eslint-disable linebreak-style */
import { about } from './about';
import { location } from './location';
import { menu } from './menu';

const buttonsLogic = () => {
  const aboutButton = document.getElementById('aboutButton');
  const menuButton = document.getElementById('menuButton');
  const locationButton = document.getElementById('locationButton');

  const clearBody = () => {
    const deletePrevious = document.getElementById('bodyContent');
    const deleteFooter = document.getElementsByTagName('Footer');
    deletePrevious.parentNode.removeChild(deletePrevious);
    deleteFooter[0].parentNode.removeChild(deleteFooter[0]);
  };

  aboutButton.addEventListener('click', () => {
    clearBody();
    about();
  });

  menuButton.addEventListener('click', () => {
    clearBody();
    menu();
  });

  locationButton.addEventListener('click', () => {
    clearBody();
    location();
  });
};

export { buttonsLogic };
