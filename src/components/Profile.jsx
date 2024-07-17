import { useSelector } from "react-redux";

function Profile() {
  const lang = useSelector((state) => state.lang);
  const DarkMode = useSelector((state) => state.darkMode);
  const profile = useSelector((state) => state.textData.profile);
  const isEng = lang === "english" ? true : false;

  return (
    <>
      <div
        className={`bg-[#4731D3] dark:bg-[#171043] min-h-screen flex justify-center items-center text-white ${
          DarkMode ? "dark" : ""
        }`}
      >
        <div className="max-w-[1100px] w-full mx-auto p-4 lg:p-8">
          <h1 className="text-[#cbf281] text-[32px] md:text-[48px] lg:text-[64px] mb-6 text-center lg:text-left">
            {profile.title}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
            <div className="flex flex-col">
              <h1 className="text-[20px] md:text-[24px] lg:text-[30px] leading-7 pb-4 lg:pb-8">
                {profile.basicInfo.title}
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <p className="text-[#cbf281] font-semibold">
                    {isEng ? "Birthday" : "Doğum Tarihi"}
                  </p>
                  <p>{profile.basicInfo.details.Birthday}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#cbf281] font-semibold">
                    {isEng ? "Location" : "İkamet Şehri"}
                  </p>
                  <p>{profile.basicInfo.details.Location}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#cbf281] font-semibold">
                    {isEng ? "Educational Background" : "Eğitim Bilgileri"}
                  </p>
                  <p>{profile.basicInfo.details.EducationalBackground}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#cbf281] font-semibold">
                    {isEng ? "Preferred Role" : "Tercih Edilen Rol"}
                  </p>
                  <p>{profile.basicInfo.details.PreferredRole}</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <img
                className="h-full rounded-2xl w-full object-contain"
                src={profile.image}
                alt="Profile"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[20px] md:text-[24px] lg:text-[30px] leading-7 pb-4 lg:pb-6">
                {profile.aboutMe.title}
              </h1>
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
