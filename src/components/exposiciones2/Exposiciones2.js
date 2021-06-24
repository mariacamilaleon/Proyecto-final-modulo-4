import './Exposiciones2.css';
import jelly from './jelly.png';
import horoscopo from './horoscopo.PNG';
import funciones from './funciones.PNG';

function Exposiciones2() {
    return(
            
      <div className="contacto3">
           
           <h2 className="tituexpo">PROYECTOS Y CÓDIGOS</h2>
            <hr></hr>

            <div className="refpro"><img src={jelly} alt="icono" width="100px"/><span className="rnom1">Icy Jelly Shot</span>
             <br></br>
            <button className="boton">Revisar</button>
             </div>      
            <br></br>

        
            <div className="refpro"><img src={horoscopo} alt="icono" width="100px"/><span className="rnom1">Horoscopo</span>
             <br></br>
            <button className="boton">Revisar</button></div>      
            <br></br>

        
            <div className="refpro"><img src={funciones} alt="icono" width="100px"/><span className="rnom1">Ejercicios</span>
             <br></br>
            <button className="boton">Revisar</button>
            </div> 
            <br></br>     
       

            
          
      </div>
      );
  }
  
  export default Exposiciones2;