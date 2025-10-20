import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import CompanyInfo from "@/components/CompanyInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <CompanyInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
