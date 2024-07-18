import axios from "axios";
import { Bounce, toast } from "react-toastify";
export const DARK_MODE = "DARK_MODE";
export const Tr = "Tr";
export const Eng = "Eng";
export const DATA = "DATA";
export const thunkFunction = () => (dispatch) => { 
axios.get("https://6699158a2069c438cd713c73.mockapi.io/api/v1/data")

.then((res)=>{
 
 
  dispatch({type:"DATA",payload:res.data})
  toast.success('Promise resolved!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  })
  .catch((e)=>toast.error('Promise rejected!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    }))
 
})
};
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
