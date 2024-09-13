import { useState } from "react";
import { AdminNavbar } from "../navbar/adm-navbar";

export const ManageContentForm = () => {
  const [content, setContent] = useState({
    apresentacao: { pt: "", en: "" },
    sobreNos: { pt: "", en: "" },
    valores: { pt: "", en: "" },
    equipa: { pt: "", en: "" },
    areasDeActuacao: { pt: "", en: "" },
    junteSeANos: { pt: "", en: "" },
  });

  const handleInputChange = (e, lang, field) => {
    setContent({
      ...content,
      [field]: { ...content[field], [lang]: e.target.value },
    });
  };

  const handleSave = (field) => {
    console.log(`Conteúdo salvo para ${field}:`, content[field]);
  };

  return (
    <>
      <AdminNavbar />
      <form className="space-y-8">
        <h2 className="text-2xl font-semibold text-blue-600">
          Gerenciar Conteúdo
        </h2>

        {[
          { label: "Apresentação", field: "apresentacao" },
          { label: "Sobre Nós", field: "sobreNos" },
          { label: "Valores", field: "valores" },
          { label: "Equipa", field: "equipa" },
          { label: "Áreas de Atuação", field: "areasDeActuacao" },
          { label: "Junte-se a Nós", field: "junteSeANos" },
        ].map(({ label, field }) => (
          <div key={field} className="space-y-4">
            <h3 className="text-lg font-medium text-blue-600">{label}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={`${label} PT`}
                onChange={(e) => handleInputChange(e, "pt", field)}
                value={content[field].pt}
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder={`${label} EN`}
                onChange={(e) => handleInputChange(e, "en", field)}
                value={content[field].en}
                className="border p-2 rounded w-full"
              />
            </div>
            <button
              type="button"
              onClick={() => handleSave(field)}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Salvar {label}
            </button>
          </div>
        ))}
      </form>
    </>
  );
};
