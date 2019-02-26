

document.getElementById("encriptForm").style.display="none";

const showName= ()=>{
    let username= document.getElementById('user').value;
     document.getElementById("named").innerHTML= ("Bienvenid@  "+ username);
     document .getElementById("encriptForm").style.display ="initial";
};



const showText = () => {

     let getText =document.getElementById ("firstText").value;
     let encriptNumber =document.getElementById ("getASCCI").value;
     document.getElementById("textoAqui").innerHTML = (window.cipher.encode(encriptNumber,getText));
};

const showTextDesencript = () => {

     let getText =document.getElementById ("firstText").value;
     let encriptNumber =document.getElementById ("getASCCI").value;
     document.getElementById("textoAqui").innerHTML = (window.cipher.decode(encriptNumber,getText));

};

const cleaner = () =>  {
     let getText =document.getElementById ("firstText").value ="  ";
     let encriptNumber =document.getElementById ("getASCCI").value ="   ";
     
     document.getElementById("clean").innerHTML = (getText,encriptNumber);



};

const back =() =>  {

     
   location.reload();
};