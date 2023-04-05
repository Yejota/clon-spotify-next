import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React from 'react'

const Layouts = () => {
  return 
    <div>
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

    </div>
  
}

export default Layouts