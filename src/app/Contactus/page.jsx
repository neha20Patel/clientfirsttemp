import Image from "next/image";
import Header from "@/components/Header";
import Component1 from "@/components/Contact/Component1"
import Component2 from "@/components/Contact/Component2"


import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Header/>
          <Component1/>
          <Component2/>
          
          
          <Footer/>
    </main>
  );
}
