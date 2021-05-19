import {about} from './about';
import {location} from './location'
import {menu} from './menu'

const buttonsLogic = function(){

const aboutButton = document.getElementById('aboutButton')
const menuButton = document.getElementById('menuButton')
const locationButton = document.getElementById('locationButton')

const clearBody = function(){
    let deletePrevious = document.getElementById('bodyContent')
    let deleteFooter = document.getElementsByTagName('Footer')
    deletePrevious.parentNode.removeChild(deletePrevious);
    deleteFooter[0].parentNode.removeChild(deleteFooter[0]);
}

aboutButton.addEventListener('click',()=>{
    clearBody();
    about();
})

menuButton.addEventListener('click',()=>{
    clearBody();
    menu();
})

locationButton.addEventListener('click',()=>{
    clearBody();
    location();
})

}

export {buttonsLogic}