/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */

class ShiftPlugin extends CipherPlugin {
   constructor() {
      super();
      this.shiftCipher = new ShiftCipher();
      this.shiftCipher.setAlphabet("abcdefghijklmnopqrstuvwxyz");
      this.shiftCipher.setKey(4);
   }

   encrypt(plaintext) {
      return this.shiftCipher.encrypt(plaintext);
   }

   decrypt(ciphertext) {
      return this.shiftCipher.decrypt(ciphertext);
   }

   setAlphabet(alphabet) {
      this.shiftCipher.setAlphabet(alphabet);
      return {event: SetEventType.NoEvent};
   }

   getAlphabet() {
      return this.shiftCipher.alphabet;
   }

   setKey(key) {
      this.shiftCipher.setKey(key);
      return {event: SetEventType.NoEvent};
   }

   getKey() {
      return this.shiftCipher.shift;
   }

   isAlphabetMutable() {
      return true;
   }

   isKeyMutable() {
      return true;
   }

   getKeyType() {
      return KeyType.Integer;
   }
}
