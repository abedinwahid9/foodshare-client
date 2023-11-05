import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Componet/Header/Header";
// import FooterSection from "./Componet/Footer/Footer";

function App() {
  return (
    <div className="fonts container mx-auto">
      <Header></Header>

      <Outlet />

      {/* <FooterSection></FooterSection> */}
    </div>
  );
}

export default App;
