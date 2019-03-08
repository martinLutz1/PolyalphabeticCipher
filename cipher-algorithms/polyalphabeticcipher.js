/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */

class PolyalphabeticCipher {
   constructor() {
      this.key = [];
      this.alphabet = [];
   }

   setAlphabet(alphabet) {
      this.alphabet = this._alphabetToArray(alphabet);
   }

   setKey(key) {
      if (key.length * 2 !== this.alphabet.length) {
         throw "Cannot set key. The key must be exactly "
            + (this.alphabet.length / 2).toString() + " characters long. Current length: "
            + key.length + " characters.";
      }

      this.key = [];
      for (let i = 0; i < key.length; i++) {
         this.key.push(key.charAt(i).toLowerCase());
         this.key.push(key.charAt(i).toUpperCase());
      }
   }

   getKey() {
      let printableKey = "";
      for (let i = 0; i < this.key.length; i++) {
         if (i%2 === 0) {
            printableKey += this.key[i];
         }
      }
      return printableKey;
   }

   getAlphabet() {
      let printableAlphabet = "";
      for (let i = 0; i < this.alphabet.length; i++) {
         if (i%2 === 0) {
            printableAlphabet += this.alphabet[i];
         }
      }
      return printableAlphabet;
   }

   encrypt(plaintext) {
      let ciphertext = "";
      for (let i = 0; i < plaintext.length; i++) {
         ciphertext += this._transformChar(
            plaintext.charAt(i),
            this.alphabet,
            this.key);
      }
      return ciphertext;
   }

   decrypt(ciphertext) {
      let plaintext = "";
      for (let i = 0; i < ciphertext.length; i++) {
         plaintext += this._transformChar(
            ciphertext.charAt(i),
            this.key,
            this.alphabet);
      }
      return plaintext;
   }

   //------------------------- INTERNAL -------------------------//

   _alphabetToArray(alphabet) {
      let alphabetArray = [];
      for (let i = 0; i < alphabet.length; i++) {
         alphabetArray.push(alphabet.charAt(i).toLowerCase());
         alphabetArray.push(alphabet.charAt(i).toUpperCase());
      }
      return alphabetArray;
   }

   _transformChar(char, charArray, transformCharArray) {
      let index = charArray.findIndex(function(element) {
         return (element == char);
      });
      if (index === -1) {
         return char;
      }
      else {
         return transformCharArray[index];
      }
   }
}
