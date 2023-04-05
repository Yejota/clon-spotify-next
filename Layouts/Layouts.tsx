import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React from 'react'

interface LayoutProps{
  children:JSX.Element;
}

const Layouts = ({children}: LayoutProps) => {
  return  (
    <div>
    <div className="contenedor-principal yeison">
        <Sidebar/>
    <main>
      <Navbar/>
      {children}
      <Footer/>
    </main>
    </div>

    </div>

  )
  
};

export {Layouts};