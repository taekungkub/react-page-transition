import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./views/Home";
import PageComponent from "./views/Page2";
import DashboardLayout from "./layout/DashboardLayout";
import Page3 from "./views/page3";
import Page4 from "./views/page4";

function App() {
  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<HomePage />} path="/" />
          <Route element={<PageComponent />} path="page2" />
          <Route element={<Page3 />} path="page3" />
          <Route element={<Page4 />} path="page4" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
