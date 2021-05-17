const { container, ContextReplacementPlugin } = require("webpack");

const about = () => {

    const content = document.getElementById('content');
    const addDiv = document.createElement('div');
    addDiv.classList.add('restaurantName');
    content.appendChild('restaurantName')
}