import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { TitleComponent } from "../../components/title";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";
export const SkillsInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="min-h-screen px-4 py-8 mt-16 lg:mt-6 sm:px-8 sm:py-12 lg:px-16 lg:py-20 bg-gray-50 text-gray-800">
        <TitleComponent text={t(`skills.title`)} />
        <div className="space-y-6 mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
          <div>
            <p className="text-2xl">{t(`skills.text`)}</p>
            <p className="text-lg">{t(`skills.text1`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`skills.area1.title`)}</h2>
            <p className="text-lg">{t(`skills.area1.description`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`skills.area2.title`)}</h2>
            <p className="text-lg">{t(`skills.area2.description`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`skills.area3.title`)}</h2>
            <p className="text-lg">{t(`skills.area3.description`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`skills.area4.title`)}</h2>
            <p className="text-lg">{t(`skills.area4.description`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`skills.area5.title`)}</h2>
            <p className="text-lg">{t(`skills.area5.description`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`skills.area6.title`)}</h2>
            <p className="text-lg">{t(`skills.area6.description`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`skills.area7.title`)}</h2>
            <p className="text-lg">{t(`skills.area7.description`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`skills.area8.title`)}</h2>
            <p className="text-lg">{t(`skills.area8.description`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`skills.area9.title`)}</h2>
            <p className="text-lg">{t(`skills.area9.description`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`skills.area10.title`)}</h2>
            <p className="text-lg">{t(`skills.area10.description`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`skills.area11.title`)}</h2>
            <p className="text-lg">{t(`skills.area11.description`)}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
