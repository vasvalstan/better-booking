import { Route, Router, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Router location={""} navigator={undefined}>
      <Routes>
        <Route path="/" element={<Layout></Layout>} />
      </Routes>
    </Router>
  );
};
