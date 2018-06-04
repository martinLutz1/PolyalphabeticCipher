/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */

class Rot13 {
   constructor() {
      this.caesarCipher = new CaesarCipher();
      this.caesarCipher.setKey(13);
   }

   encrypt(plaintext) {
      return this.caesarCipher.encrypt(plaintext);
   }

   decrypt(ciphertext) {
      return this.caesarCipher.decrypt(ciphertext);
   }
}
