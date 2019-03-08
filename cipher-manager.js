/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */
/* jshint jquery:true */

const cipher = {
   Caesar:              0,
   Rot13:               1,
   RotX:                2,
   Shift:               3,
   LatinPolyalphabetic: 4
};

class CipherManager {
   constructor() {
      this.alphabetInput = "#alphabetInput";
      this.keyIntegerInput = "#keyIntegerInput";
      this.keyStringInput = "#keyStringInput";
      this.keyInput = this.keyIntegerInput;
      this.cipherDirectionIndicator = "#cipherDirectionIndicator";

      this.selectedCipher = -1;
      this.selectCipher(cipher.Caesar);
   }

   selectCipher(cipherIndex) {
      if (cipherIndex === this.selectedCipher) {
         return;
      }
      this.selectedCipher = cipherIndex;

      switch (cipherIndex) {
         case cipher.Caesar:
            this.cipher = new CaesarPlugin();
            break;

         case cipher.Rot13:
            this.cipher = new Rot13Plugin();
            break;

         case cipher.RotX:
            this.cipher = new RotXPlugin();
            break;

         case cipher.Shift:
            this.cipher = new ShiftPlugin();
            break;

         case cipher.LatinPolyalphabetic:
            this.cipher = new LatinPolyalphabeticPlugin();
            break;
      }

      this._updateUIAlphabetInput(
         this.cipher.getAlphabet(),
         !this.cipher.isAlphabetMutable());

      this._updateUIKeyInput(
         this.cipher.getKey(),
         this.cipher.getKeyType(),
         !this.cipher.isKeyMutable());
   }

   setKey(key) {
      this.key = key;
      let setEvent = this.cipher.setKey(key);
      if (setEvent.event == SetEventType.NotSet)
      {
         throw("Setting the key is not supported by the selected cipher.");
      }
   }

   setAlphabet(alphabet) {
      this.alphabet = alphabet;
      let setEvent = this.cipher.setAlphabet(alphabet);
      if (setEvent.event == SetEventType.NotSet)
      {
         throw("Setting an alphabet is not supported by the selected cipher.");
      }
      else if (setEvent.event == SetEventType.AlphabetError)
      {
         // Todo: Error handling.
         console.log("The alphabet could not be set. Reason:\n" + setEvent.message);
      }
      else if (setEvent.event == SetEventType.KeyUpdated)
      {
         this._updateUIKeyInput(
            this.cipher.getKey(),
            !this.cipher.isKeyMutable());
      }
   }

   encrypt(plaintext) {
      if ($(this.cipherDirectionIndicator).hasClass("fa-angle-left")) {
         $(this.cipherDirectionIndicator).removeClass("fa-angle-left");
      }
      if (!$(this.cipherDirectionIndicator).hasClass("fa-angle-right")) {
         $(this.cipherDirectionIndicator).addClass("fa-angle-right");
      }
      return this.cipher.encrypt(plaintext);
   }

   decrypt(ciphertext) {
      if ($(this.cipherDirectionIndicator).hasClass("fa-angle-right")) {
         $(this.cipherDirectionIndicator).removeClass("fa-angle-right");
      }
      if (!$(this.cipherDirectionIndicator).hasClass("fa-angle-left")) {
         $(this.cipherDirectionIndicator).addClass("fa-angle-left");
      }

      return this.cipher.decrypt(ciphertext);
   }

   _updateUIAlphabetInput(alphabet, readonly) {
      $(this.alphabetInput).prop("readonly", readonly);
      $(this.alphabetInput).val(alphabet);
   }

   _updateUIKeyInput(key, keyType, readonly) {
      if (keyType === KeyType.Integer) {
         this.keyInput = this.keyIntegerInput;
         if ($(this.keyIntegerInput).hasClass("hidden")) {
            $(this.keyIntegerInput).removeClass("hidden");
         }
         if (!$(this.keyStringInput).hasClass("hidden")) {
            $(this.keyStringInput).addClass("hidden");
         }
      }

      else if (keyType === KeyType.String) {
         this.keyInput = this.keyStringInput;
         if ($(this.keyStringInput).hasClass("hidden")) {
            $(this.keyStringInput).removeClass("hidden");
         }
         if (!$(this.keyIntegerInput).hasClass("hidden")) {
            $(this.keyIntegerInput).addClass("hidden");
         }
      }

      $(this.keyInput).prop("readonly", readonly);
      $(this.keyInput).val(key);
   }
}
