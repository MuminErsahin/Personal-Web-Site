import { useSelector } from "react-redux";

function Profile() {
  const lang = useSelector((state) => state.lang);
  const DarkMode = useSelector((state) => state.darkMode);
  const profile = useSelector((state) => state.textData.profile);
  const isEng = lang === "english" ? true : false;
  return (
    <>
      <div
        className={`bg-[#4731D3] dark:bg-[#171043] h-[552px] w-full flex justify-center items-center text-white ${
          DarkMode ? "dark" : ""
        }`}
      >
        <div className="max-w-[1100px]  mx-auto   border-[#cbf281] ">
          <h1 className="text-[#cbf281] text-[64px] ">{profile.title}</h1>
          <div className="flex gap-[30px]">
            <div className="flex flex-col w-full">
            <h1 className="text-[30px] leading-7 pb-8 ">{profile.basicInfo.title}</h1>
            <div className="flex gap-2"><p className="text-[#cbf281] font-semibold"> {isEng ? "Birthday"  : "Dogum Tarihi"} </p> <p> {profile.basicInfo.details.Birthday}</p> </div>
            <div  className="flex gap-2"><p className="text-[#cbf281] font-semibold">{isEng ? "Location" : "İkamet Şehri"} </p>  <p> {profile.basicInfo.details.Location}</p></div>
           <div  className="flex gap-2"><p className="text-[#cbf281] font-semibold">{isEng ? "Educational Background" : "Eğitim Bilgileri"}</p>  <p>{profile.basicInfo.details.EducationalBackground}</p></div>
           <div  className="flex gap-2"><p className="text-[#cbf281] font-semibold">{isEng ? "Preferred Role" : "Tercih Edilen Rol"}</p> <p>{profile.basicInfo.details.PreferredRole}</p></div>
            
          </div>
          <div className="w-full">
            <img className="h-full rounded-2xl w-full object-contain " src={profile.image}  />
          </div> 
          <div className="w-full  gap-[24px]  ">
            <h1 className="text-[30px] leading-7 pb-6">{profile.aboutMe.title}</h1>
            <div>
            <p className="pb-1">{profile.aboutMe.description}</p>
       
            <p>{profile.aboutMe.additionalInfo}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
