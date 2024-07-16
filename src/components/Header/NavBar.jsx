import { useDispatch, useSelector } from "react-redux";
import {
    toggleDarkMode,
    toggleEng,
    toggleTr,
  } from "../../store/Action/actions";
function NavBar() {
    const DarkMode = useSelector((state) => state.darkMode);
    const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();
    const toggleLanguage = () => {
        if (lang === "english") {
          dispatch(toggleTr());
        } else {
          dispatch(toggleEng());
        }
      };
    
      const toggleMod = () => {
        dispatch(toggleDarkMode(!DarkMode));
      };
  return (
    <div className=" flex justify-around gap-[230px] abs"> 
    <div className="m-8 pr-9 me-16">
    <button
      className="text-3xl font-bold text-[#777777] absolute"
      onClick={toggleLanguage}
    >
      {lang === "turkish" ? (
        <>
          SWİTCH TO <span className="text-[#CBF281]">ENGLISH</span>
        </>
      ) : (
        <>
          <span className="text-[#CBF281]">TÜRKÇE</span> {"'"}YE GEÇ
        </>
      )}
      
    </button>
    </div>
    <div className="m-8 pr-9 me-80 ">
      <label className="switch">
        <input type="checkbox" onChange={toggleMod} checked={DarkMode} />
        <span className="slider"></span>
      </label>
    </div>
    </div>
  )
}

export default NavBar