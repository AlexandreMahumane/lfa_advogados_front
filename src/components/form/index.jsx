import { useState } from "react";
import { AdminNavbar } from "../navbar/adm-navbar";

export const AddAdminAndContactForm = () => {
  const [admin, setAdmin] = useState({ name: "", password: "" });
  const [contact, setContact] = useState({ email: "", phone: "", address: "" });

  const handleAdminInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleContactInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    console.log("Novo administrador:", admin);
    // Lógica para salvar os dados do administrador aqui
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Novo contato:", contact);
    // Lógica para salvar os dados do contato aqui
  };

  return (
    <>
      <AdminNavbar />
      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        {/* Formulário de adicionar administrador */}
        <form
          className="space-y-4 bg-white p-6 rounded-lg shadow-md mb-6"
          onSubmit={handleAdminSubmit}
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Adicionar Administrador
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome do Administrador
              </label>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                className="w-full p-2 border rounded"
                onChange={handleAdminInputChange}
                value={admin.name}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                type="password"
                name="password"
                placeholder="Senha"
                className="w-full p-2 border rounded"
                onChange={handleAdminInputChange}
                value={admin.password}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Salvar Administrador
          </button>
        </form>

        {/* Formulário de adicionar contato */}
        <form
          className="space-y-4 bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleContactSubmit}
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Adicionar Contato
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                onChange={handleContactInputChange}
                value={contact.email}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Telefone"
                className="w-full p-2 border rounded"
                onChange={handleContactInputChange}
                value={contact.phone}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Endereço
              </label>
              <input
                type="text"
                name="address"
                placeholder="Endereço"
                className="w-full p-2 border rounded"
                onChange={handleContactInputChange}
                value={contact.address}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Salvar Contato
          </button>
        </form>
      </div>
    </>
  );
};
