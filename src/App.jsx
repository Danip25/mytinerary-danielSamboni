import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-[100vh] flex flex-col overflow-x-hidden">
      <Navbar />
        <Outlet className="flex-1"/>
        <Footer />
    </div>
  );
}

export default App;
