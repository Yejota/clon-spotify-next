import { TestComponent } from '@/components/TestComponent'


const testPage = () => {
  return (
    <div>
        <span className="yeison"> Pagina de Test </span>
        
        <TestComponent contenido="Yeison">
        <span className="yeison"> Holaa</span>
        
        </TestComponent>

       {/*<TestComponent contenido="Jimenez"/>
        <TestComponent contenido="andes"/>
        <TestComponent contenido="35 años"/>*/}

        
        
    </div>
  )
  
};

export default testPage;