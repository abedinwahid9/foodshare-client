import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Componet/Header/Header";
// import FooterSection from "./Componet/Footer/Footer";

function App() {
  return (
    <div className="fonts">
      <div className="container mx-auto">
        <Header></Header>
        <Outlet />
      </div>
      {/* <FooterSection></FooterSection> */}
    </div>
  );
}

export default App;
