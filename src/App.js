
import React, { useEffect, useState } from "react";
import './style.css';


function App() {

const [nutri, setNutri] = useState([]);

useEffect(() => {

    function consumoAPI(){

      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url)
      .then((result) => result.json())
      .then((json) => {

        console.log(json);
        setNutri(json);

      });
      
    }

    consumoAPI();

}, [])

  return (
    <div className="container">
      <header>
        <strong>REACT NUTRIX</strong>
      </header>
      {nutri.map((item) => {

          return(
            <article key={item.id} className="post"> 
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className="capa"/>
              <p className="subtitulo">
                  {item.subtitulo}
              </p>
              <a className="botao">Acessar</a>
            </article>
            
          )

      })}
    </div>
  );
}

export default App;
