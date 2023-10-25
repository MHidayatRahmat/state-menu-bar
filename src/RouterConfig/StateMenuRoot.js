import { Outlet, useNavigation } from "react-router-dom";
import PagesTemplate from "../Pages/PageTemplate";

function StateMenuRoot() {
  const navigation = useNavigation();
  return (
    <>
        <main>
          <Outlet />
          {navigation.state === "loading" && <p>Loading...</p>}
        </main>

    </>
  );
}
export default StateMenuRoot;
