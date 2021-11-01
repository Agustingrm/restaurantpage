/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
const mainFrame = () => {
  const content = document.getElementById('content');

  const addDiv = document.createElement('div');
  addDiv.setAttribute('id', 'restaurantName');
  content.appendChild(addDiv);

  const restaurantName = document.getElementById('restaurantName');

  const addH1 = document.createElement('h1');
  addH1.innerHTML = 'Kyoto';
  restaurantName.appendChild(addH1);

  const addH2 = document.createElement('h2');
  addH2.innerHTML = 'Japanese Food';
  restaurantName.appendChild(addH2);

  const addDivModuleSelector = document.createElement('div');
  addDivModuleSelector.setAttribute('id', 'moduleSelector');
  content.appendChild(addDivModuleSelector);

  const moduleSelector = document.getElementById('moduleSelector');

  const addUL = document.createElement('ul');
  addUL.setAttribute('id', 'uList');
  moduleSelector.appendChild(addUL);

  const addLi = document.createElement('li');
  const uList = document.getElementById('uList');
  addLi.setAttribute('id', 'about');
  uList.appendChild(addLi);

  const aAbout = document.getElementById('about');

  const add_a_About = document.createElement('a');
  add_a_About.innerHTML = 'About Us';
  add_a_About.setAttribute('id', 'aboutButton');
  aAbout.appendChild(add_a_About);

  const addLi2 = document.createElement('li');
  addLi2.setAttribute('id', 'menu');
  uList.appendChild(addLi2);

  const aMenu = document.getElementById('menu');

  const add_a_Menu = document.createElement('a');
  add_a_Menu.innerHTML = 'Menu';
  add_a_Menu.setAttribute('id', 'menuButton');
  aMenu.appendChild(add_a_Menu);

  const addLi3 = document.createElement('li');
  addLi3.setAttribute('id', 'location');
  uList.appendChild(addLi3);

  const aLocation = document.getElementById('location');

  const add_a_Location = document.createElement('a');
  add_a_Location.innerHTML = 'Location';
  add_a_Location.setAttribute('id', 'locationButton');
  aLocation.appendChild(add_a_Location);
};

export default mainFrame;
