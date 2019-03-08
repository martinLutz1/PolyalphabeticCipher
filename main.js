/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint jquery:true */
/* jshint browser:true */


/* Main function for polyalphabetic ciphers.
*/
$(document).ready(function() {
    cipherManager = new CipherManager();

   $("#cipher-selector").change(function() {
      let selectedCipher = parseInt($(this).val());
      cipherManager.selectCipher(selectedCipher);
   });

   $("#keyIntegerInput").change(function() {
      let key = $(this).val();
      cipherManager.setKey(key);
   });

   $("#keyStringInput").change(function() {
      let key = $(this).val();
      cipherManager.setKey(key);
   });

  $("#alphabetInput").keyup(function() {
      let alphabet = $(this).val();
      cipherManager.setAlphabet(alphabet);
   });

   $("#encryptButton").click(function() {
      let text = $("#decryptedText").val();

      let encryptedText = cipherManager.encrypt(text);

      if (encryptedText.length > 0) {
         $("#encryptedText").css({backgroundColor: "#e7ffe5"});
         $("#decryptedText").css({backgroundColor: "#ffffff"});
         $("#encryptedText").val(encryptedText);
      }
   });

   $("#decryptButton").click(function() {
      let text = $("#encryptedText").val();

      let decryptedText = cipherManager.decrypt(text);

      if (decryptedText.length > 0) {
         $("#decryptedText").css({backgroundColor: "#e7ffe5"});
         $("#encryptedText").css({backgroundColor: "#ffffff"});
         $("#decryptedText").val(decryptedText);
      }
   });
});

var cipherManager;
