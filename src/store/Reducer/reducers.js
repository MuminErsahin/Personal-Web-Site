// src/Reducer/reducer.js
import { DARK_MODE, DATA, Eng, Tr } from "../Action/actions";


const language = localStorage.getItem("language") || "english";

const theme = JSON.parse(localStorage.getItem("theme")) || false;
const initialState = {
  darkMode: theme,
  lang: language,
  textData: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE:
      // eslint-disable-next-line no-case-declarations
      const newTheme = state.darkMode;
      localStorage.setItem("theme", !newTheme);
      return {
        ...state,
        darkMode: !state.darkMode,
      };
      case Eng:
        localStorage.setItem("language", action.payload);
        return {
          ...state,
          lang: action.payload,
        };
      case Tr:
        localStorage.setItem("language", action.payload);
        return {
          ...state,
          lang: action.payload,
        };
      case DATA :
        console.log(language)
      return {
        ...state,
        textData: {
          ...state.textData,
          ...(state.lang === "english"
            ? action.payload[0].english
            : action.payload[0].turkish),
        }
      }
    default:
      return state;
  }
};
