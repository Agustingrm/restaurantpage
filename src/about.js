const about = () => {
    const addDivBodyContent = document.createElement('div')
    addDivBodyContent.setAttribute('id','bodyContent')
    content.appendChild(addDivBodyContent)

    const bodyContent = document.getElementById('bodyContent');
    const addH3 = document.createElement('h3');
    addH3.innerHTML = 'About Us'
    bodyContent.appendChild(addH3)

    const p1 = document.createElement('p')
    p1.innerHTML = ('Kyoto is a Japanese restaurant featuring Kaiseki style cuisine.  \
    Kaiseki is a style of cooking that utilizes fresh seasonal ingredients that are beautifully \
    arranged and garnished. Each dish is bright with fresh flavors and textures')
    bodyContent.appendChild(p1)

    const p2 = document.createElement('p')
    p2.innerHTML = ('While the popularity of modern sushi, blending traditional with new ingredients, \
    at Kyoto we do things the old fashion way: using seasonal ingredients with exquisite presentation. \
    Our Chef wants you to experience traditional Japanese cuisine as prepared in the traditions of Japan.')
    bodyContent.appendChild(p2)

    const p3 = document.createElement('p')
    p3.innerHTML = ('We invite you to enjoy our vibrant fusion of traditional Japanese and Pacific cuisine.\
    Outstanding chefs, great people on the floor and in the kitchen, plus a wine and sake list \
    unparalleled in California. We are passionate about what we do, and take special delight \
    in introducing our guests to new wines, great cuisine, and surprising pairings of food with wine and sake.\
    Most of all, we sincerely thank our friends and supporters for 33 wonderful years.')
    bodyContent.appendChild(p3)

    const addFooter = document.createElement('Footer')
    content.appendChild(addFooter);

    const footer = document.getElementsByTagName('Footer')

    const addFooterP = document.createElement('p')
    addFooterP.innerHTML = 'Developed by Agustín Gramajo Gaitán'
    footer[0].appendChild(addFooterP)
}

export {about}