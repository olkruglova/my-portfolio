import { useTranslation } from "react-i18next";
import Experience from "../Components/Experience";

function Profile() {
  const yearsAgo = new Date().getFullYear() - 2017;
  const { t } = useTranslation();

  const profileDescription = t("profile.description", { returnObjects: true, yearsAgo }) as any;

  return (
    <>
      <div className="flex flex-col py-10 justify-end items-end">
        <h1 className="text-4xl">{t("profile.fullName")}</h1>
        <p className="text-sm text-light-blue-500 dark:text-light-blue mb-10">{t("profile.jobTitle")}</p>

        <div className="text-md mt-8 flex flex-col justify-end items-end">
          <p className="mb-2 text-right">{profileDescription.line1}</p>
          <p className="mb-2 text-right">{profileDescription.line2}</p>
          <p className="mb-2 text-right">{profileDescription.line3}</p>
          <p className="mb-2 text-right">
            {profileDescription.line4.start}
            <strong className="text-light-blue-500 dark:text-light-blue mb-2">{profileDescription.line4.end}</strong>
          </p>
        </div>
      </div>

      <Experience />
    </>
  );
}

export default Profile;
