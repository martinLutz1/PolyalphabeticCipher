/* author: Martin Lutz, 2018 */

/* jshint esnext:true */
/* jshint browser:true */

const KeyType = Object.freeze({
   String:   Symbol("String"),
   Integer:  Symbol("Integer")
});

const SetEventType = Object.freeze({
   NoEvent:        Symbol("NoError"),
   NotSet:         Symbol("NotSet"),
   AlphabetError:  Symbol("AlphabetError"),
   KeyError:       Symbol("KeyError"),
   KeyUpdated:     Symbol("KeyUpdated")
});

class CipherPlugin {
   constructor() {}

   // Set the alphabet for this cipher.
   // @param alphabet The alphabet to be set.
   // @return The SetEventType and an optional message.
   // Note: May not set the alphabet if the cipher has a fixed alphabet.
   setAlphabet(alphabet) {}
   // Get the alphabet.
   getAlphabet() {}

   // Set the key for this cipher.
   // @param key The key to be set.
   // @return The SetEventType and an optional message.
   // Note: May not set the key if the cipher has a fixed key.
   setKey(key) {}
   // Get the key.
   getKey() {}

   // Encrypt the @p ciphertext with the previously set key.
   // @param The plain text to be encrypted.
   // @return The cipher text.
   encrypt(plaintext) {}
   // Decrypt the @p ciphertext with the previously set key.
   // @param The cipher text to be decrypted.
   // @return The plain text.
   decrypt(ciphertext) {}

   // Is the alphabet mutable via the set method?
   // Some ciphers like caesar have a fixed alphabet.
   isAlphabetMutable() {}
   // Is the key mutable via the set method?
   // Some ciphers like Rot13 have a fixed key.
   isKeyMutable() {}

   // Get the KeyType of the key. Supported are:
   // - integers to describe e.g. a shift.
   // - strings to describe e.g. per character substitution.
   getKeyType() {}
}
