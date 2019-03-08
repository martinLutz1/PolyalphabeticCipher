/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */

class Rot13Plugin extends CipherPlugin {
   constructor() {
      super();
      this.shiftCipher = new ShiftCipher();
      this.shiftCipher.setAlphabet("abcdefghijklmnopqrstuvwxyz");
      this.shiftCipher.setKey(13);
   }

   encrypt(plaintext) {
      return this.shiftCipher.encrypt(plaintext);
   }

   decrypt(ciphertext) {
      return this.shiftCipher.decrypt(ciphertext);
   }

   setAlphabet(alphabet) {
      return {event: SetEventType.NotSet};
   }

   getAlphabet() {
      return this.shiftCipher.alphabet;
   }

   setKey(key) {
      return {event: SetEventType.NotSet};
   }

   getKey() {
      return this.shiftCipher.shift;
   }

   isAlphabetMutable() {
      return false;
   }

   isKeyMutable() {
      return false;
   }

   getKeyType() {
      return KeyType.Integer;
   }
}
