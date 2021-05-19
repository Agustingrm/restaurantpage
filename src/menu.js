const menu = () => {
    const addDivBodyContent = document.createElement('div')
    addDivBodyContent.setAttribute('id','bodyContent')
    content.appendChild(addDivBodyContent)

    const bodyContent = document.getElementById('bodyContent');
    const addH3 = document.createElement('h3');
    addH3.innerHTML = 'Menu'
    bodyContent.appendChild(addH3)

    const divMain = document.createElement('div')
    divMain.setAttribute('id','main')
    bodyContent.appendChild(divMain)

    const mainDish = document.getElementById('main')

    const addH4_1 = document.createElement('h4');
    addH4_1.innerHTML = 'Main Course'
    mainDish.appendChild(addH4_1)

    const dish1 = document.createElement('p')
    dish1.classList.add('dish')
    dish1.innerHTML = 'Tonketsu Ramen'
    mainDish.appendChild(dish1)

    const price1 = document.createElement('p')
    price1.classList.add('price')
    price1.innerHTML = '$9.95'
    mainDish.appendChild(price1)

    const dish2 = document.createElement('p')
    dish2.classList.add('dish')
    dish2.innerHTML = 'Sashimi'
    mainDish.appendChild(dish2)

    const price2 = document.createElement('p')
    price2.classList.add('price')
    price2.innerHTML = '$11.95'
    mainDish.appendChild(price2)

    const dish3 = document.createElement('p')
    dish3.classList.add('dish')
    dish3.innerHTML = 'Sukiyaki'
    mainDish.appendChild(dish3)

    const price3 = document.createElement('p')
    price3.classList.add('price')
    price3.innerHTML = '$10.95'
    mainDish.appendChild(price3)

    const dish4 = document.createElement('p')
    dish4.classList.add('dish')
    dish4.innerHTML = 'Sushi'
    mainDish.appendChild(dish4)

    const price4 = document.createElement('p')
    price4.classList.add('price')
    price4.innerHTML = '$9.95'
    mainDish.appendChild(price4)

    const dish5 = document.createElement('p')
    dish5.classList.add('dish')
    dish5.innerHTML = 'Yakitori'
    mainDish.appendChild(dish5)

    const price5 = document.createElement('p')
    price5.classList.add('price')
    price5.innerHTML = '$10.95'
    mainDish.appendChild(price5)

    const dish6 = document.createElement('p')
    dish6.classList.add('dish')
    dish6.innerHTML = 'Yakisoba'
    mainDish.appendChild(dish6)

    const price6 = document.createElement('p')
    price6.classList.add('price')
    price6.innerHTML = '$9.95'
    mainDish.appendChild(price6)

    const divDesserts = document.createElement('div')
    divDesserts.setAttribute('id','desserts')
    bodyContent.appendChild(divDesserts)

    const dessertDish = document.getElementById('desserts')

    const addH4_2 = document.createElement('h4');
    addH4_2.innerHTML = 'Desserts'
    dessertDish.appendChild(addH4_2)

    const dessert1 = document.createElement('p')
    dessert1.classList.add('dish')
    dessert1.innerHTML = 'Dango'
    dessertDish.appendChild(dessert1)

    const dessertPrice1 = document.createElement('p')
    dessertPrice1.classList.add('price')
    dessertPrice1.innerHTML = '$4.95'
    dessertDish.appendChild(dessertPrice1)

    const dessert2 = document.createElement('p')
    dessert2.classList.add('dish')
    dessert2.innerHTML = 'Dorayaki'
    dessertDish.appendChild(dessert2)

    const dessertPrice2 = document.createElement('p')
    dessertPrice2.classList.add('price')
    dessertPrice2.innerHTML = '$6.95'
    dessertDish.appendChild(dessertPrice2)

    const dessert3 = document.createElement('p')
    dessert3.classList.add('dish')
    dessert3.innerHTML = 'Sakura Mochi'
    dessertDish.appendChild(dessert3)

    const dessertPrice3 = document.createElement('p')
    dessertPrice3.classList.add('price')
    dessertPrice3.innerHTML = '$4.95'
    dessertDish.appendChild(dessertPrice3)

    const dessert4 = document.createElement('p')
    dessert4.classList.add('dish')
    dessert4.innerHTML = 'Taiyaki'
    dessertDish.appendChild(dessert4)

    const dessertPrice4 = document.createElement('p')
    dessertPrice4.classList.add('price')
    dessertPrice4.innerHTML = '$5.95'
    dessertDish.appendChild(dessertPrice4)

    const addFooter = document.createElement('Footer')
    content.appendChild(addFooter);

    const footer = document.getElementsByTagName('Footer')

    const addFooterP = document.createElement('p')
    addFooterP.innerHTML = 'Developed by Agustín Gramajo Gaitán'
    footer[0].appendChild(addFooterP)
}

export {menu}