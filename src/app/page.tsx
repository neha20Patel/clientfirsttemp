import Image from "next/image";
import Header from "@/components/Header";
import Component1 from "@/components/HomeNeha/Component1"
import Component2 from "@/components/HomeNeha/Component2"
import Component3 from "@/components/HomeNeha/Component3"
import Component4 from "@/components/HomeNeha/Component4"
import Component5 from "@/components/HomeNeha/Component5"
import Component6 from "@/components/HomeNeha/Component6"
import Component7 from "@/components/HomeNeha/Component7"
import Component8 from "@/components/HomeNeha/Component8"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Header/>
          <Component1/>
          <Component2/>
          <Component3/>
          <Component4/> 
          <Component5/>
          <Component6/>
          <Component7/>
          <Component8/>
          <Footer/>
    </main>
  );
}
