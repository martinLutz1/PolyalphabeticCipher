/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */

class RotX {
   constructor() {
      this.shiftCipher = new ShiftCipher();
   }

   setAlphabet(alphabet) {
      this.shiftCipher.setAlphabet(alphabet);
   }

   setKey(key) {
      this.shiftCipher.setKey(key);
   }

   encrypt(plaintext) {
      return this.caesarCipher.encrypt(plaintext);
   }

   decrypt(ciphertext) {
      return this.caesarCipher.decrypt(ciphertext);
   }
}
