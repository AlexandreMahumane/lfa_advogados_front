import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Information } from "./pages/information/information";
import { News } from "./pages/information/news-newsLetter-section";
import { Member } from "./pages/information/member";
import { Admin } from "./pages/adm";
import { Login } from "./pages/login";
import { Table } from "./components/tables/table";
import { NotFound } from "./pages/Error404";
import { AddTeamMemberForm } from "./components/form/sign-up";
import { AddNewsForm } from "./components/form/news";
import { ManageContentForm } from "./components/form/content-page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "information/:section",
    element: <Information />,
  },
  {
    path: "information/news/",
    element: <News />,
  },
  {
    path: "information/member/",
    element: <Member />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/login/",
    element: <Login />,
  },
  {
    path: "/admin/news/",
    element: <Table />,
  },
  {
    path: "admin/add/member/",
    element: <AddTeamMemberForm />,
  },
  {
    path: "admin/add/news/",
    element: <AddNewsForm />,
  },
  {
    path: "admin/manage/content/",
    element: <ManageContentForm />,
  },
  {
    path: "/admin/members/",
    element: <Table />,
  },
]);
