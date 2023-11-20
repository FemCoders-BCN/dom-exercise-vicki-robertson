const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const grayColor = document.querySelector(".gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3");
const imgCard = document.querySelector(".product-image");


redColor?.addEventListener("click", ()=>{
    imgCard.style.backgroundImage = 'url(./public/img/redcar.jpg)';
    imgCard.alt = 'Red car';
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red"
});

grayColor?.addEventListener("click", ()=>{
    imgCard.style.backgroundImage = 'url(./public/img/graycar.jpg)';
    imgCard.alt = 'Gray car';
    cartButton.style.backgroundColor = "darkgray";
    itemTag.style.backgroundColor = "darkgray";
});

blackColor?.addEventListener("click", ()=>{
    imgCard.style.backgroundImage = 'url(./public/img/blackcar.jpg)';
    imgCard.alt = 'Black car';
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black"
});

export { blackColor, redColor, grayColor }