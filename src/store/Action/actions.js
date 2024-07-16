export const DARK_MODE = "DARK_MODE";
export const Tr = "Tr";
export const Eng = "Eng";
export const toggleDarkMode = (Mod) => ({
  type: DARK_MODE,
  payload: Mod,
});
export const toggleTr = () => ({
  type: Tr,
  payload: "turkish",
});
export const toggleEng = () => ({
  type: Eng,
  payload: "english",
});
