import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Root";
import ErrorPages from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import ModalEdit from "../component/ModelEdit";
import StateMenu from "../Pages/StateManu";
import SecondPage from "../Pages/SecondPages";
import StateMenuRoot from "./StateMenuRoot";
import { Popup } from "../component/Model";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPages/>,
    children: [
      {
        index: true,
        path: "",
        element: <Home/>,
      },
      {
        path: "test",
        element: <StateMenuRoot/>,
        children: [
          {
              index: true,
              path:"",
              element: <SecondPage/>,
          },
          {path: ":selectedName", element: <Popup/>},
          {path: ":selectedName/edit", element: <ModalEdit/>}
        ]
      },
    ],
  },
]);
