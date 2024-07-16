// src/Reducer/reducer.js
import { DARK_MODE, Tr, Eng } from '../Action/actions';
import data from '../../Data.json'

const language = localStorage.getItem("language") || "english";

const theme = JSON.parse(localStorage.getItem("theme")) || false ;
const initialState = {
  darkMode: theme,
  lang: language,
  textData: data[language],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE:
      // eslint-disable-next-line no-case-declarations
      const newTheme = state.darkMode ;
      localStorage.setItem("theme", !newTheme);
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case Eng:
      localStorage.setItem("language", action.payload);
      return {
        ...state,
        textData: data[action.payload],
        lang: action.payload,
      };
      case Tr:
        localStorage.setItem("language", action.payload);
        return {
          ...state,
          textData: data[action.payload],
          lang: action.payload,
        };
    default:
      return state;
  }
};
