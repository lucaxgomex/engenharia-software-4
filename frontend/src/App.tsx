import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Error404 from "./pages/ErrorPage/Error404";
import ListProfessoresComponent from "./pages/ErrorPage/List/ListProfessoresComponent/ListProfessoresComponent";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="list/teachers" element={<ListProfessoresComponent/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;