import './Exposiciones1.css';
import diamante from './gemas.png'

function Exposiciones1(){
	return(


		<div className="contacto">

			  <div>
                    <h2 className="tituexpo">EXPOSICIONES PUBLICACIONES  PREMIOS</h2>
                    <hr></hr>                                                    
                    <div className="ref"><img src={diamante} alt="icono"/><span className="rnom1">Beca de programación en Artes</span><br></br><span className="rnom2">Plásticas Red Galería Santa Fe</span><p className="rcargo1">Categoría: Galería Santa Fe Nocturno 2021</p></div>
                    <div className="ref"><img src={diamante} alt="icono"/><span className="rnom1">Laboratorios de Creación en</span><br></br><span className="rnom2">la Galería Santa Fe:</span><p className="rcargo1">Gif´s para el fin del mundo 2020</p></div>
                    <div className="ref"><img src={diamante} alt="icono"/><span className="rnom1">Beca de programación en Artes</span><br></br><span className="rnom2">Plásticas Red Galería Santa Fe</span><p className="rcargo1">Categoría: Laboratorios Prácticas Artísticas Experimentales en El Parqueadero 45 Salón Nacional de Artistas 2019</p></div>
                    <div className="ref"><img src={diamante} alt="icono"/><span className="rnom1">Premio Investigación Curatorial</span><br></br><span className="rnom2">SALÓN INTERUNIVERSITARIO</span><p className="rcargo1">Facultad de Artes ASAB y U. Jorge Tadeo Lozano 2018</p></div>
                    <br></br>
              </div> 
		</div>
	);

} 

 export default Exposiciones1;