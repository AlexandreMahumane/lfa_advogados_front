import React, { useEffect, useState } from "react";
import "../../i18n/i18n";
import photo from "../../assets/hero.jpg";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar/navbar";

export const Member = () => {
  const { section } = useParams();
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: "1",
      name: "Advogado 1",
      photo: photo,
    },
    {
      id: "2",
      name: "Advogado 2",
      photo: photo,
    },
    {
      id: "3",
      name: "Advogado 3",
      photo: photo,
    },
  ];

  const [currentMember, setCurrentMember] = useState(null);
  const [navigationMembers, setNavigationMembers] = useState([]);

  useEffect(() => {
    const selectedMember = teamMembers.find((member) => member.id === section);
    setCurrentMember(selectedMember);

    const remainingMembers = teamMembers.filter(
      (member) => member.id !== section
    );
    setNavigationMembers(remainingMembers);
  }, [section]);

  return (
    <>
      <Navbar />
      <section className="px-3 min-h-screen max-w-7xl mx-auto py-8 mt-16 lg:mt-6 w-full sm:px-8 sm:py-12 lg:px-16 lg:py-20 bg-gray-50 text-gray-800">
        <div className="mt-4 space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed">
          <div className="w-full flex justify-center">
            <div className="w-full h-auto max-w-full lg:w-96 lg:h-80">
              <img
                src={currentMember?.photo}
                alt={currentMember?.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <h2 className="text-2xl text-center font-bold sm:text-3xl lg:text-4xl">
            {t(`article.news.title`)}
          </h2>
          <div className="flex flex-wrap w-full">
            <p>{t(`article.news.text`)}</p>
          </div>
        </div>
      </section>

      <nav className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto flex justify-center space-x-4">
          {navigationMembers.map((member) => (
            <Link
              key={member.id}
              to={`/information/member/${member.id}`}
              className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
            >
              {member.name}
            </Link>
          ))}
        </div>
      </nav>

      <Footer />
    </>
  );
};
