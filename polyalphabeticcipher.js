/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */

class PolyalphabeticCipher {
   constructor(alphabet) {
      this.key = [];
      this.alphabet = Object.freeze(this._alphabetToArray(alphabet));
   }

   setKey(key) {
      if (key.length * 2 !== this.alphabet.length) {
         throw "Cannot set key. The key must be exactly "
            + (this.alphabet.length / 2).toString() + " characters long.";
      }

      this.key = [];
      for (let i = 0; i < key.length; i++) {
         this.key.push(key.charAt(i).toLowerCase());
         this.key.push(key.charAt(i).toUpperCase());
      }
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
      let index = this._charToIndex(char, charArray);
      if (index === -1) {
         return char;
      }
      else {
         return transformCharArray[index];
      }
   }

   _charToIndex(char, charArray) {
      for (let i = 0; i < charArray.length; i++) {
         if (charArray[i] === char) {
            return i;
         }
      }
      return -1;
   }
}
