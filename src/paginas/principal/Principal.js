import React from 'react';
import ReactDom from 'react-dom';
import Header from '../../components/header/Header';
import Parte1 from '../../components/parte1/Parte1';
import Parte2 from '../../components/parte2/Parte2';
import Footer from '../../components/footer/Footer';


function Principal() {
	return(
       <div>
       <Header />
       <section id="informacion">
       <Parte1 />
       <Parte2 />
       </section>
       <Footer />
       </div>


		);
}


export default Principal;