import './Parte1.css';
import linkedin from './linkedin.png';
import github from './github.png';

import html from './html.png';
import css from './css.png';
import javascript from './javascript.png';
import photoshop from './photoshop.png';
import premiere from './premier.png';
import illustrator from './illustrator.png';

function Parte1(){
	return(


		<div className="contacto">

			    <h2>ACERCA DE MI</h2>
				<hr></hr>
				<p>Programadora Junior Front End del programa de becas Tech Power de la Fundación Citi, Global Fairness 
				   Initiative y Kuepa y estudiante de Artes Plásticas y Visuales de la Universidad Distrital.  
				   Desde el año 2018 me dedico a la investigación, producción, gestión y montaje de proyectos 
				   artísticos alrededor de la cultura visual contemporánea. Soy una persona responsable, honesta, 
				   amistosa, me gusta trabajar en equipo y  me interesa seguir ampliando mis áreas de conocimientos.
				</p>
                <br></br>
                <br></br>
				
             <h2>EDUCACIÓN</h2>
                <hr></hr>
                
                <div className="cajaedu">
                      <h3>2021 - TÉCNICO</h3>
		              <h4>Programación Web Front End</h4>
                      <h5>KUEPA</h5>
                </div>
                <br></br>
                <div className="cajaedu">
                      <h3>2021 - PROFESIONAL</h3>
		              <h4>Maestra en Artes Plásticas y Visuales</h4>
                      <h5>ACADEMIA DE ARTES ASAB - UNIVERSIDAD DISTRITAL</h5>
                </div>
                <br></br>
                <br></br>
			
           <div>   
                 <div className="habilidad">
                         <h2 className="textcajas">HABILIDADES</h2>
                         <hr className="texcaja"></hr>
                         <br></br>
                    
                         <label for="file">Motivación:</label>
                         <progress id="file" max="100" value="80"></progress>
                         <label for="file">Responsabilidad:</label>
                         <progress id="file" max="100" value="70"></progress>
                         <label for="file">Trabajo en equipo:</label>
                         <progress id="file" max="100" value="80"></progress>
                        </div>      
                </div>
		</div>
	);

} 

 export default Parte1;