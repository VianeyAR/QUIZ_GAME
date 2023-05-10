import React from "react";
import { Link } from "react-router-dom";
import "/src/pages/HomeQuiz.css";


const HomeQuiz = ({setEstado}) => {
  const metodocaptura = () =>{
    setEstado(true)
  }
  const metodojuego = () =>{
    setEstado(true)
  }
  return (
    //se creo la pagina principal
    <div className="container"> 
      <div className="row">
        <div className="col">Juego de preguntas</div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Link to={"/Captura"} onClick={metodocaptura} className="btn btn-info" role="button" aria-disabled="true">Captura</Link>
        </div>

        <div className="col-md-6">
        <Link to={"/Juego"} onClick={metodojuego} className="btn btn-info" role="button" aria-disabled="true">Juego</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeQuiz;
