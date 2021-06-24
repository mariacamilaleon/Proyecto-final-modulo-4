import './Header.css';
import foto from './foto.png';


function Header() {
  return (
    <header>

        <div className="foto">
             
             <img src={foto} alt="foto María Camila"/>
        </div>
        
        <div className="texto">
             <h1>MARÍA</h1>
             <h1>CAMILA LEÓN</h1>
             <br></br>
             <h3><span className="perfil"> DESARROLLADORA FRONT END</span></h3>
               
                <hr className="linea"></hr>
                    <div className="info"><i class="fas fa-envelope"></i>sra.magohd@gmail.com</div>
                    <div className="info"><i class="fas fa-phone"></i>319 434 7377</div>
                    <div className="info"><i class="fas fa-map-marker-alt"></i>Cra 87 L #62-46 sur Bogotá D.C, Colombia</div>
        </div>

    </header>
  );
}

export default Header ;