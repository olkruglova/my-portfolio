import { useTranslation } from "react-i18next";
import Experience from "../Components/Experience";

function Profile() {
  const yearsAgo = new Date().getFullYear() - 2017;
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col py-10 justify-end items-end">
        <h1 className="text-4xl">{t("profile.fullName")}</h1>
        <p className="text-sm text-light-blue-500 dark:text-light-blue mb-10">{t("profile.jobTitle")}</p>

        <div className="text-md mt-8 flex flex-col justify-end items-end">
          <p className="mb-2">{t("profile.description.line1")}</p>
          <p className="mb-2">{t("profile.description.line2")}</p>
          <p className="mb-2">{t("profile.description.line3").replace("{yearsAgo}", yearsAgo.toString())}</p>
          <p className="mb-2">
            {t("profile.description.line4.start")}
            <strong className="text-light-blue-500 dark:text-light-blue mb-2">
              {t("profile.description.line4.end")}
            </strong>
          </p>
          {/* <p className="mt-8">
            Check out my previous profile
            <a href="https://olkruglova.github.io/portfolio-fend" target="_blank" rel="noopener noreferrer">
              <strong className="text-light-blue-500 dark:text-light-blue mb-2">&nbsp;here.</strong>
            </a>
          </p> */}
        </div>
      </div>

      <Experience />
    </>
  );
}

export default Profile;
