/* author: Martin Lutz, 2019 */

/* jshint esnext:true */
/* jshint browser:true */

class LatinPolyalphabeticPlugin extends CipherPlugin {
   constructor() {
      super();
      this.polyalphabeticCipher = new PolyalphabeticCipher();
      this.polyalphabeticCipher.setAlphabet("abcdefghijklmnopqrstuvwxyz");
      this.polyalphabeticCipher.setKey("defghijklmnopqrstuvwxyzabc");
   }

   setAlphabet(alphabet) {
      return {event: SetEventType.NotSet};
   }

   getAlphabet() {
      return this.polyalphabeticCipher.getAlphabet();
   }

   setKey(key) {
      this.polyalphabeticCipher.setKey(key);
      return {event: SetEventType.NoEvent};
   }

   getKey() {
      return this.polyalphabeticCipher.getKey();
   }

   encrypt(plaintext) {
      return this.polyalphabeticCipher.encrypt(plaintext);
   }

   decrypt(ciphertext) {
      return this.polyalphabeticCipher.decrypt(ciphertext);
   }

   isAlphabetMutable() {
      return false;
   }

   isKeyMutable() {
      return true;
   }

   getKeyType() {
      return KeyType.String;
   }
}
