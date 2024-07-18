import { useDispatch, useSelector } from "react-redux";
import { thunkFunction, toggleDarkMode, toggleEng, toggleTr } from "../../store/Action/actions";


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
    dispatch(thunkFunction())
  };

  const toggleMod = () => {
    dispatch(toggleDarkMode(!DarkMode));
  };

  return (
    <div className="flex justify-end   max-md:flex  max-md:flex-row  max-md:items-center max-md:gap-5 max-md:pb-10">
      <div className="m-8 pr-9 me-16    max-md:me-0 max-md:m-4">
        <button
          className="text-3xl font-bold max-md:text-[22px]  text-[#777777] relative max-md:text-center"
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
      <div className="m-8 pr-9 me-80 max-md:me-0 max-md:m-4">
        <label className="switch">
          <input type="checkbox" onChange={toggleMod} checked={DarkMode} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default NavBar;
