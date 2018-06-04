/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */

class CaesarCipher {
   constructor() {
      this.shiftCipher = new ShiftCipher();
      this.shiftCipher.setAlphabet("abcdefghijklmnopqrstuvwxyz");
   }

   setKey(key) {
      this.shiftCipher.setKey(key);
   }

   encrypt(plaintext) {
      return this.shiftCipher.encrypt(plaintext);
   }

   decrypt(ciphertext) {
      return this.shiftCipher.decrypt(ciphertext);
   }
}
