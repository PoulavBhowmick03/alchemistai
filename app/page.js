import Testimonials from "@/components/Testimonial";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import HomeHeader from "../components/HomeHeader"
import FAQPage from "@/components/FAQ";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/AuthOptions";

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log({session})
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
