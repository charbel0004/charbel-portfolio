import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CircuitBackground from "./components/CircuitBackground.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function App({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <CircuitBackground />

      <Navbar />

      <main className="relative z-10 mx-auto w-full max-w-[1380px] flex-1 px-4 pb-20 pt-24 sm:px-6 lg:px-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
