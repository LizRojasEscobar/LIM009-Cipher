window.cipher = {
	/* metodo de cifrado */
	encode: (offset, string) => {

		let encriptedWord = '';

		for (let i = 0; i < string.length; i++) {

			let numAscci = string.charCodeAt(i);
		//condicion para encriptar mayusculas
			if (numAscci >= 65 && numAscci <= 90) {

				encriptedWord += String.fromCharCode(((numAscci) - 65 + parseInt(offset)) % 26 + 65);
		//condicion para encriptar minusculas
			}  else if (numAscci >= 97 && numAscci <= 122) {

				encriptedWord += String.fromCharCode(((numAscci) - 97 + parseInt(offset)) % 26 + 97);
		//condicion para encriptar numeros		
			} else if (numAscci >= 48 && numAscci <= 57) {

				encriptedWord += String.fromCharCode(((numAscci) - 48 + parseInt(offset)) % 10 + 48);
		//condicion para encriptar caracteres
			} else if (numAscci >= 33 && numAscci <= 47) {

				encriptedWord += String.fromCharCode(((numAscci) - 33 + parseInt(offset)) % 15 + 33);
		//condicion para encriptar espacios
			}else  {
				encriptedWord += String.fromCharCode(32);
			}

		}


		return encriptedWord;

	},

	/* metodo de descifrado */
	decode: (offset, string) => {

		let desencriptedWord = '';

		for (let i = 0; i < string.length; i++) {

			let numAscci = string.charCodeAt(i);
		//condicion para desencriptar mayusculas
			if (numAscci >= 65 && numAscci <= 90) {

				desencriptedWord += String.fromCharCode((numAscci - 90 - parseInt(offset)) % 26 + 90);
		//condicion para desencriptar minusculas
			}  else if (numAscci >= 97 && numAscci <= 122) {

				desencriptedWord += String.fromCharCode(((numAscci) - 122 - parseInt(offset)) % 26 + 122);
		//condicion para desencriptar numeros
			} else if (numAscci >= 48 && numAscci <= 57) {
				
				desencriptedWord += String.fromCharCode(((numAscci) - 57 - parseInt(offset)) % 10 + 57);
		//condicion para desencriptar caracteres
			} else if (numAscci >= 33 && numAscci <= 47) {

				desencriptedWord += String.fromCharCode(((numAscci) - 47 - parseInt(offset)) % 15 + 47);
		//condicion para desencriptar espacios
			} else {
				desencriptedWord += String.fromCharCode(32);
			}
		}

		return desencriptedWord;


	}

};