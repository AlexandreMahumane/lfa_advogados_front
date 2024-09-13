import React from "react";
import "../../i18n/i18n";
import photo from "../../assets/hero.jpg";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { TitleComponent } from "../../components/title";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar/navbar";

export const Member = () => {
  const { section } = useParams();
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="px-3 min-h-screen max-w-7xl mx-auto py-8 mt-16 lg:mt-6 w-full sm:px-8 sm:py-12 lg:px-16 lg:py-20 bg-gray-50 text-gray-800">
        <div className="mt-4 space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed">
          <div className="w-full flex justify-center  ">
            <div className="w-full  h-auto max-w-full lg:w-96 lg:h-80 ">
              <img
                src={photo}
                alt="News"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <h2 className="text-2xl text-center font-bold sm:text-3xl lg:text-4xl">
            {t(`article.news.title`)}
          </h2>
          <div className="flex fles-wrap w-full">
            <p>{t(`article.news.text`)}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
