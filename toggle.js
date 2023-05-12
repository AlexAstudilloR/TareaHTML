let toogle= document.getElementById('container');
let body= document.querySelector('body');
let header= document.querySelector('header');
let footer= document.querySelector('footer');
let dropdownmenu= document.getElementById('lista1');
let dropdownmenu2= document.getElementById('lista2');
let dropdownmenu3= document.getElementById('lista3');
let dropdownmenu4= document.getElementById('lista4');
let dropdownmenu5= document.getElementById('lista5');
let dropdownmenu6= document.getElementById('lista6');
toogle.onclick= function(){
  toogle.classList.toggle('active');
  body.classList.toggle('active');
  header.classList.toggle('active');
  footer.classList.toggle('active');
  dropdownmenu.classList.toggle('active');
  dropdownmenu3.classList.toggle('active');
  dropdownmenu4.classList.toggle('active');
  dropdownmenu2.classList.toggle('active');
  dropdownmenu5.classList.toggle('active');
  dropdownmenu6.classList.toggle('active');
}