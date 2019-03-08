/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */

class CaesarPlugin extends CipherPlugin {
   constructor() {
      super();
      this.shiftCipher = new ShiftCipher();
      this.shiftCipher.setAlphabet("abcdefghijklmnopqrstuvwxyz");
      this.shiftCipher.setKey(4);
   }

   setAlphabet(alphabet) {
      return {event: SetEventType.NotSet};
   }

   getAlphabet() {
      return this.shiftCipher.alphabet;
   }

   setKey(key) {
      let keyAsInt = parseInt(key);
      this.shiftCipher.setKey(keyAsInt);
      return {event: SetEventType.NoEvent};
   }

   getKey() {
      return this.shiftCipher.shift;
   }

   encrypt(plaintext) {
      return this.shiftCipher.encrypt(plaintext);
   }

   decrypt(ciphertext) {
      return this.shiftCipher.decrypt(ciphertext);
   }

   isAlphabetMutable() {
      return false;
   }

   isKeyMutable() {
      return true;
   }

   getKeyType() {
      return KeyType.Integer;
   }
}
