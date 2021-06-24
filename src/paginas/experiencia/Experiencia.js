import React from 'react';
import ReactDom from 'react-dom';
import Exposiciones1 from '../../components/exposiciones1/Exposiciones1';
import Exposiciones2 from '../../components/exposiciones2/Exposiciones2';
import Footer from '../../components/footer/Footer';


function Experiencia() {
	return(
       <div>
      
       <section id="informacion">
       <Exposiciones1 />
       <Exposiciones2 />
       </section>
       <Footer />
       </div>


		);
}
export default Experiencia;
