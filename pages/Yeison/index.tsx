import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const index = () => {
  return (
    <div className="contenedor-principal yeison">
        <Sidebar/>
    <main>
      <Navbar/>
      <section>

        <span>Pagina Yeison</span>
       
      </section>
      <Footer/>
    </main>


    </div>
  )
};

export default index;