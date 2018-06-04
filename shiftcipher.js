/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */

class ShiftCipher {
   constructor() {
      this.shift = 0;
      this.key = "";
      this.alphabet = "";
      this.alphabetLength = 0;
      this.polyalphabeticCypher = new PolyalphabeticCipher();
   }

   setAlphabet(alphabet) {
      this.polyalphabeticCypher.setAlphabet(alphabet);

      this.alphabet = alphabet;
      this.alphabetLength = alphabet.length;
   }

   setKey(key) {
      this.shift = key % this.alphabetLength;
      this.key =
          this.alphabet.slice(this.shift, this.alphabetLength) +
          this.alphabet.slice(0, this.shift);

      this.polyalphabeticCypher.setKey(this.key);
   }

   encrypt(plaintext) {
      return this.polyalphabeticCypher.encrypt(plaintext);
   }

   decrypt(ciphertext) {
      return this.polyalphabeticCypher.decrypt(ciphertext);
   }
}
