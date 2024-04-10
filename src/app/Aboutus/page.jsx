import Header from "@/components/Header";
import Component1 from "@/components/Aboutus/Component1"
import Component2 from "@/components/Aboutus/Component2"
import Component3 from "@/components/Aboutus/Component3"
import Component4 from "@/components/Aboutus/Component4"
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
            <Component8/>
            <Footer/>
    </main>
  );
}