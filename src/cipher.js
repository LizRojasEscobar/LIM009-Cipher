window.cipher = {
	/* metodo de cifrado */
	encode: (offset, string) => {

		let encriptedWord = '';

		for (let i = 0; i < string.length; i++) {

			let numAscci = string.charCodeAt(i);

			if (numAscci >= 65 && numAscci <= 90) {

				encriptedWord += String.fromCharCode(((numAscci) - 65 + parseInt(offset)) % 26 + 65);
			} else if (numAscci === 32) {
				if (numAscci >= 65 && numAscci <= 90) {

					encriptedWord += String.fromCharCode(((numAscci) - 65 + parseInt(offset)) % 26 + 65);
				}
				encriptedWord += String.fromCharCode(numAscci);

			} /*else if (numAscci >= 97 && numAscci <= 122) {
				encriptedWord += String.fromCharCode(((numAscci) - 97 + parseInt(offset)) % 26 + 97);
			} else if (numAscci >= 48 && numAscci <= 57) {

				encriptedWord += String.fromCharCode(((numAscci) - 48 + parseInt(offset)) % 10 + 48);
			} else if (numAscci >= 33 && numAscci <= 47) {

				encriptedWord += String.fromCharCode(((numAscci) - 33 + parseInt(offset)) % 15 + 33);
			} else {
				alert("Por favor ingrese su mensaje");
			}
*/
		}

		return encriptedWord;

	},


	decode: (offset, string) => {

		let desencriptedWord = '';

		for (let i = 0; i < string.length; i++) {

			let numAscci = string.charCodeAt(i);
			if (numAscci >= 65 && numAscci <= 90) {

				desencriptedWord += String.fromCharCode((numAscci - 90 - parseInt(offset)) % 26 + 90);
			} else if (numAscci === 32) {
				if (numAscci >= 65 && numAscci <= 90) {

					desencriptedWord += String.fromCharCode(((numAscci) - 90 - parseInt(offset)) % 26 + 90);
				}
				desencriptedWord += String.fromCharCode(numAscci);
			} /*else if (numAscci >= 97 && numAscci <= 122) {

				desencriptedWord += String.fromCharCode(((numAscci) - 122 - parseInt(offset)) % 26 + 122);
			} else if (numAscci >= 48 && numAscci <= 57) {
				
				desencriptedWord += String.fromCharCode(((numAscci) - 57 - parseInt(offset)) % 10 + 57);
			} else if (numAscci >= 33 && numAscci <= 47) {

				desencriptedWord += String.fromCharCode(((numAscci) - 47 - parseInt(offset)) % 15 + 47);
			} else {
				alert("Ingrese texto por favor");
			}*/
		}

		return desencriptedWord;


	}

};