import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { TitleComponent } from "../../components/title";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";
export const ValuesInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="min-h-screen px-4 py-8 mt-16 lg:mt-6 sm:px-8 sm:py-12 lg:px-16 lg:py-20 bg-gray-50 text-gray-800">
        <TitleComponent text={t(`values.title`)} />
        <div className="space-y-6 mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
          <div>
            <h2 className="text-2xl">{t(`values.value`)}</h2>
            <p className="text-lg">{t(`values.text1`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`values.value2`)}</h2>
            <p className="text-lg">{t(`values.text2`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`values.value3`)}</h2>
            <p className="text-lg">{t(`values.text3`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`values.value4`)}</h2>
            <p className="text-lg">{t(`values.text4`)}</p>
          </div>
          <div>
            <h2 className="text-2xl">{t(`values.value5`)}</h2>
            <p className="text-lg">{t(`values.text5`)}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
