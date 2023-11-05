import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Componet/Header/Header";
// import FooterSection from "./Componet/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">
        <Outlet />
      </div>
      {/* <FooterSection></FooterSection> */}
    </div>
  );
}

export default App;
