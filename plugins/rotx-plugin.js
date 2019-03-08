/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */

class RotXPlugin extends CipherPlugin {
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
      if ((alphabet.length % 2) !== 0)
      {
         return {event: SetEventType.AlphabetError,
                 message: "Das Alphabet (" + alphabet.length + " Zeichen) muss aus einer geraden Anzahl an Zeichen bestehen."};
      }

      this.shiftCipher.setAlphabet(alphabet);
      this.shiftCipher.setKey(alphabet.length / 2);
      return {event: SetEventType.KeyUpdated};
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
      return true;
   }

   isKeyMutable() {
      return false;
   }

   getKeyType() {
      return KeyType.Integer;
   }
}
