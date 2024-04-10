import Header from "@/components/Header";
import Component1 from "@/components/BlogPost/Component1"
import Component2 from "@/components/BlogPost/Component2"
import Component3 from "@/components/BlogPost/Component3"
import Component4 from "@/components/BlogPost/Component4"

import Footer from "@/components/Footer"


export default function Home() {
    return (
      <main>
        <Header/>
            <Component1/>
            <Component2/>
            <Component3/>
            <Component4/>
            <Footer/>
    </main>
  );
}