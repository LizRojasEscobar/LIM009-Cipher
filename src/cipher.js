window.cipher = {
  /* metodo de cifrado */
encode: (offset, string) => {

let  encriptedWord ='';

for (let i =0; i<string.length ; i++){

let numAscci = string.charCodeAt (i);

    if (numAscci>=65 && numAscci<=90){

       encriptedWord += String.fromCharCode(((numAscci) - 65 + parseInt(offset))%26 + 65) ;
    }

    else{
      alert("Por favor ingrese su texto en Mayuscula");
    }

}

return encriptedWord;

},



decode:(offset,string)=> {

let  desencriptedWord ='';

for (let i =0; i<string.length ; i++){

let numAscci = string.charCodeAt (i);
    if (numAscci>=65 && numAscci<=90){

  desencriptedWord += String.fromCharCode ((numAscci - 90 - parseInt(offset) )%26 + 90);
    }


}

return desencriptedWord;



}

};
