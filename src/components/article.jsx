import { Card } from "./card";
import { TitleComponent } from "./title";
import React from "react";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
export const Article = () => {
  const { t } = useTranslation();
  return (
    <article id={t("article.name")} className="flex flex-col md:flex-row w-full justify-between space-y-10 md:space-y-0 md:space-x-10">
      <section className="md:p-6 w-full flex flex-col items-center bg-blue-50">
       <div className ="animate__animated animate__fadeInLeft">
        <TitleComponent text={"Newsletters"} />
        </div>
        {[...Array(5)].map((_, index) => (
          <Card key={index} path={"news/"} />
        ))}
      </section>

      <section className="md:p-6 w-full flex flex-col items-center bg-blue-50">
        <TitleComponent text={t("article.title")} />
        {[...Array(5)].map((_, index) => (
          <Card key={index} path={"news/"} variant={"N"} />
        ))}
      </section>
    </article>
  );
};
