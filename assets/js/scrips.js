/*pag1*/
function changeborder(){ 
  let changeborder = document.querySelector('#img1');
  let text1 = document.querySelector('#p1');
  if(changeborder.style.border == ''){
    changeborder.style.border = 'solid 2px red';
    text1.textContent = "haz click para quitar borde"
  }
  else{
    changeborder.style.border = '';
    text1.textContent = "haz click para agregar borde"
  }
}

/*pag2*/
function validar(){
  let input1 = Number(document.querySelector('#stiker1').value);
  let input2 = Number(document.querySelector('#stiker2').value);
  let input3 = Number(document.querySelector('#stiker3').value);
  let total = input1 + input2 + input3 ;
  let text2 = document.querySelector('#p2');
  if(total <= 10) {text2.textContent = `llevas ${total} stikers`}
  else if(total >10) {text2.textContent = 'llevas demasiados stikers'}
}
/*pag3*/
function pass(){
  let selector1 = document.querySelector('.select1').value;
  let selector2 = document.querySelector('.select2').value;
  let selector3 = document.querySelector('.select3').value;
  let totalSelector = selector1 + selector2 +selector3;
  let text3 = document.querySelector('#p3');
  if (totalSelector == 911) {
    text3.textContent='password 1 es correcto'}
  else if(totalSelector == 714){
    text3.textContent='password 2 es correcto'} 
  else{text3.textContent='password incorrecto'}  
}
