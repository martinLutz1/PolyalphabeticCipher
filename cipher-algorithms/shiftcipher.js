/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */

class ShiftCipher {
   constructor() {
      this.shift = 0;
      this.key = "";
      this.alphabet = "";
      this.alphabetLength = 0;
      this.polyalphabeticCipher = new PolyalphabeticCipher();
   }

   setAlphabet(alphabet) {
      this.polyalphabeticCipher.setAlphabet(alphabet);

      this.alphabet = alphabet;
      this.alphabetLength = alphabet.length;

      // When the alphabet is updated the key must be updated too, because the key is a permutation of the alphabet and gets outdated for a new alphabet.
      this.setKey(this.shift);
   }

   setKey(key) {
      let keyAsInt = parseInt(key);
      this.shift = keyAsInt % this.alphabetLength;
      this.key =
          this.alphabet.slice(this.shift, this.alphabetLength) +
          this.alphabet.slice(0, this.shift);

      this.polyalphabeticCipher.setKey(this.key);
   }

   encrypt(plaintext) {
      return this.polyalphabeticCipher.encrypt(plaintext);
   }

   decrypt(ciphertext) {
      return this.polyalphabeticCipher.decrypt(ciphertext);
   }
}
