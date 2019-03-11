document.getElementById('encript-form').style.display='none';//Se esconde el formulario

const showName= ()=>{ //Funcion para obtener el nombre
    let username= document.getElementById('user').value;
     document.getElementById('named').innerHTML= ('Bienvenid@  '+ username);
     document .getElementById('encript-form').style.display ='initial';
};  
const eventofButtons = document.getElementById('bd');//Eventos de los botones
     eventofButtons.addEventListener('click', (e)=>{

let getText =document.getElementById ('first-text').value;
let encriptNumber =document.getElementById ('get-number-ascci').value;

switch (e.target.id){ 
     case 'boton1':
          showName();
     break;
     case 'encript-button':
          document.getElementById('texto-aqui').innerHTML = (window.cipher.encode(encriptNumber,getText));
     break;
     case 'desencript-button':     
          document.getElementById('texto-aqui').innerHTML = (window.cipher.decode(encriptNumber,getText));
     break;
     case 'clean':
          document.getElementById ('first-text').value =' ';
          document.getElementById ('get-number-ascci').value =' ';  
     break;      
     case 'back':
          location.reload();

     break;
}
});
