/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */

class CaesarCipher {
   constructor() {
      this.shift = 0;
      this.key = "";
      this.alphabet = Object.freeze("abcdefghijklmnopqrstuvwxyz");
      this.polyalphabeticCypher = new PolyalphabeticCipher(this.alphabet);
   }

   setKey(key) {
      this.shift = key % 26;
      this.key =
          this.alphabet.slice(this.shift, 26) +
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
