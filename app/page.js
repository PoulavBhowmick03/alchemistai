import Testimonials from "@/components/Testimonial";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import HomeHeader from "../components/HomeHeader"
import FAQPage from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HomeHeader/>
      <Testimonials/>
      <FAQPage/>
      <Footer/>
    </main>
  );
}
