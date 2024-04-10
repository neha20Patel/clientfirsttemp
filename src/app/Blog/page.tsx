import Header from "@/components/Header";
import Component1 from "@/components/Blog/Component1"
import Component2 from "@/components/Blog/Component2"
import Component3 from "@/components/Blog/Component3"
import Component4 from "@/components/Blog/Component4"
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