import { Outlet, useNavigation } from "react-router-dom";
import PagesTemplate from "../Pages/PageTemplate";

function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <PagesTemplate>
        <main>
            <Outlet/>
            {navigation.state === "loading" && <p>Loading...</p>}
        </main>
      </PagesTemplate>
    </>
  );
}

export default RootLayout;
