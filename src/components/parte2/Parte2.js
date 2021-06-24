import './Parte2.css';
import html from './html.png';
import css from './css.png';
import javascript from './javascript.png';
import photoshop from './photoshop.png';
import premiere from './premier.png';
import illustrator from './illustrator.png';
import star from './star.png';
import linkedin from './linkedin.png';
import github from './github.png';

function Parte2() {
    return(
      <div className="contacto2">
           
        
             <h2>REFERENCIAS</h2>
            <hr></hr>
            <div className="ref"><i class="fas fa-users"></i><span className="rnom">Rigoberto Peñuela</span><p className="rcargo">Licenciado de Castellano</p></div>
            <div className="ref"><i class="fas fa-users"></i><span className="rnom">Luis León</span><p className="rcargo">Ingeniero Industrial</p></div>
            <div className="ref"><i class="fas fa-users"></i><span className="rnom">Fernanda Rodero</span><p className="rcargo">Diseñadora Gráfica</p></div>
            <br></br>
        
          <div className="cajasoftware">
             
             <h2>SOFTWARE</h2>
            <hr></hr>
          
                 <table>    
                    <tr>
                        <th><img className="programa" src={html} alt="icono html"/></th>
                        <th><img className="star" src={star} alt="punto star"/></th>
                        <th><img src={star} alt="punto star"/></th>
                        <th><img src={star} alt="punto star"/></th>
                        <th><img src={star} alt="punto star"/></th>
                        <th><img src={star} alt="punto star"/></th>
                    </tr>
                    <tr>
                        <td><img className="programa" src={css} alt="icono css"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td></td>
                        <td></td>    
                    </tr>
                    <tr>
                        <td><img className="programa" src={javascript} alt="icono javascript"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td></td>  
                    </tr>

                    <tr>
                        <td><img className="programa" src={photoshop} alt="icono photoshop"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>  
                    </tr>
                    <tr>
                        <td><img className="programa" src={premiere} alt="icono premiere"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td></td>  
                    </tr>

                    <tr>
                        <td><img className="programa" src={illustrator} alt="icono illustrator"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td><img src={star} alt="punto star"/></td>
                        <td></td>
                        <td></td>  
                    </tr>
                </table>
          </div>
          
      </div>
      );
  }
  
  export default Parte2;