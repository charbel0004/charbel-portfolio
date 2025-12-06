import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CircuitBackground from "./components/CircuitBackground.jsx";

export default function App({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col ">

      {/* Motherboard background */}
      
        <CircuitBackground />
      

      {/* Soft dark overlay (allows glow to pass through) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#03050a]/75 via-[#050816]/65 to-[#020617]/75 -z-20"></div>

      {/* Page content */}
      <Navbar />

      <main className="relative z-10 flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}
