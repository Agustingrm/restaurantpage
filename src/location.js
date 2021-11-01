const location = () => {
  const addDivBodyContent = document.createElement('div');
  addDivBodyContent.setAttribute('id', 'bodyContent');
  content.appendChild(addDivBodyContent);

  const bodyContent = document.getElementById('bodyContent');

  const addH3 = document.createElement('h3');
  addH3.innerHTML = 'Location';
  bodyContent.appendChild(addH3);

  const addDiv = document.createElement('div');
  addDiv.setAttribute('id', 'reference');
  bodyContent.appendChild(addDiv);

  const reference = document.getElementById('reference');

  const addP1 = document.createElement('p');
  addP1.classList.add('directions');
  addP1.innerHTML = 'Find us on 531 Haight St, San Francisco';
  reference.appendChild(addP1);

  const addP2 = document.createElement('p');
  addP2.classList.add('directions');
  addP2.innerHTML = 'Everyday from 6pm to 11pm';
  reference.appendChild(addP2);

  const addIFrame = document.createElement('iframe');
  addIFrame.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7717713649085!2d-122.43312578532777!3d37.771949320096304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a6c10f8b25%3A0xdce686f7caead429!2sHot%20Zushi!5e0!3m2!1ses-419!2sar!4v1621462519730!5m2!1ses-419!2sar');
  addIFrame.setAttribute('loading', 'lazy');
  bodyContent.appendChild(addIFrame);

  const addFooter = document.createElement('Footer');
  content.appendChild(addFooter);

  const footer = document.getElementsByTagName('Footer');

  const addFooterP = document.createElement('p');
  addFooterP.innerHTML = 'Developed by Agustín Gramajo Gaitán';
  footer[0].appendChild(addFooterP);
};

export { location };
