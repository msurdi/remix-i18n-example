import { cloneElement, isValidElement } from "react";
import reactStringReplace from "react-string-replace";
import en from "../locales/en.json?init"; // Adding ?init makes vite live-reload the translations
import es from "../locales/es.json?init";

export const locales = { en, es };

/*
Base function to interpolate values into templated messages.
*/
export const translator =
  (messages) =>
  (messageKey, values = {}) => {
    let replacedText = messages[messageKey];

    for (const key of Object.keys(values)) {
      replacedText = reactStringReplace(
        replacedText,
        `\${${key}}`,
        (match, i) =>
          isValidElement(values[key])
            ? cloneElement(values[key], { key: i })
            : values[key]
      );
    }

    return replacedText;
  };

/*
Utility to perform translations into a given locale in a server/node environment.
*/
export const translate =
  (lang) =>
  (key, values = {}) => {
    const translated = translator(locales[lang])(key, values);
    return Array.isArray(translated) ? translated.join("") : translated;
  };

/*
This is just for demostration purposes. The user's language preference should be stored in
a cookie, the session, the database, detected from the browser, etc.
Don't do it exactly like this in real life, as this value will be shared across all users.
*/
let currentLanguage = "en";

export const setLanguage = (lang) => {
  currentLanguage = lang;
};

export const getLanguage = () => currentLanguage;
