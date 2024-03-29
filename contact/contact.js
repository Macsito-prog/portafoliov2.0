//funcion para cargar el ícono distinto

var imgArray = ['foto1.jpeg','foto2.jpeg','foto3.jpeg']
var imgPath = 'http://192.168.100.64:8080/';


var numero = (Math.floor(Math.random()*imgArray.length));

var selectedImg = (imgArray[numero]);

var icono = document.getElementById('randomImg').src = imgPath + selectedImg;