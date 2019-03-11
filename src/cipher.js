window.cipher = {
	encode: (offset, string) => {	/* metodo de cifrado */
		let encriptedWord = '';
		for (let i = 0; i < string.length; i++) {
			let numAscci = string.charCodeAt(i);
			if (numAscci >= 65 && numAscci <= 90) {	//condicion para encriptar mayusculas
				encriptedWord += String.fromCharCode(((numAscci) - 65 + parseInt(offset)) % 26 + 65);
			}  else if (numAscci >= 97 && numAscci <= 122) {//condicion para encriptar minusculas
				encriptedWord += String.fromCharCode(((numAscci) - 97 + parseInt(offset)) % 26 + 97);
			} else if (numAscci >= 48 && numAscci <= 57) {	//condicion para encriptar numeros	
				encriptedWord += String.fromCharCode(((numAscci) - 48 + parseInt(offset)) % 10 + 48);
			} else if (numAscci >= 33 && numAscci <= 47) {//condicion para encriptar caracteres
				encriptedWord += String.fromCharCode(((numAscci) - 33 + parseInt(offset)) % 15 + 33);
			}else  {//condicion para encriptar espacios
				encriptedWord += String.fromCharCode(32);
			}
		}
		return encriptedWord;
	},
	decode: (offset, string) => {	/* metodo de descifrado */
		let desencriptedWord = '';
		for (let i = 0; i < string.length; i++) {
			let numAscci = string.charCodeAt(i);
			if (numAscci >= 65 && numAscci <= 90) {//condicion para desencriptar mayusculas
				desencriptedWord += String.fromCharCode((numAscci - 90 - parseInt(offset)) % 26 + 90);
			}else if (numAscci >= 97 && numAscci <= 122) {//condicion para desencriptar minusculas
				desencriptedWord += String.fromCharCode(((numAscci) - 122 - parseInt(offset)) % 26 + 122);//condicion para desencriptar numeros
			} else if (numAscci >= 48 && numAscci <= 57) {//condicion para desencriptar numeros			
				desencriptedWord += String.fromCharCode(((numAscci) - 57 - parseInt(offset)) % 10 + 57);
			} else if (numAscci >= 33 && numAscci <= 47) {//condicion para desencriptar caracteres	
				desencriptedWord += String.fromCharCode(((numAscci) - 47 - parseInt(offset)) % 15 + 47);
			} else {
				desencriptedWord += String.fromCharCode(32);//condicion para desencriptar espacios
			}
		}
		return desencriptedWord;
	}

};