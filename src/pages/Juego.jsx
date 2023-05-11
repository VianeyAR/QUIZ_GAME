import React, { useState } from "react";
import { Link } from "react-router-dom";
import AgregarJuego from "../components/AgregarJuego";
import Swal from "sweetalert2";
import "/src/pages/Captura.css";

const Juego = () => {
  const [listarPreguntas, setListarPreguntas] = useState(
    //sirve para convertir informacion a formato JSON
    JSON.parse(localStorage.getItem("listarPreguntas")) || []
  );

  const metodohome = () => {
    setEstado(true);
  };

  const comprobar = () => {
    var correcto = [];
    var incorrecto = [];
    listarPreguntas.map((i) =>
      document
        .querySelectorAll(`option[id="${i.numeropregunta}"]`)
        .forEach((element) => {
          console.log(element.selected, i.respuesta, element.value);
          if (element.selected && i.respuesta === element.value) {
            correcto.push(i.respuesta);
            //console.log(element.value);
          } else if (
            element.selected === "selected" &&
            i.respuesta !== element.value
          ) {
            incorrecto.push(i.respuesta);
            //console.log(element.value);
          } else {
            //console.log(element.value);
          }
        })
    );
    var numeropregunta = 0;
    for (const key in listarPreguntas) {
      const element = listarPreguntas[key];
      numeropregunta++;
    }
    Swal.fire({
      title: "¡En hora buena!",
      text: `Correct: ${correcto.length}/${numeropregunta}`,
      icon: "success",
    });
  };

  return (
    <div className="container text-center">
      <div className="row">
        <h1 div className="col">
          <strong>JUEGO</strong>
        </h1>
        <div>
          <Link
            to={"/HomeQuiz"}
            onClick={metodohome}
            className="menuc "
            role="button"
            aria-disabled="true"
          >
            <i class="bi bi-arrow-left-square-fill">  Menu</i>
          </Link>
        </div>
      </div>

      {/*Boton para cambiar a menu*/}
      <div className="col-md-12">
        {listarPreguntas.map((listar) => (
          <AgregarJuego
            key={listar.id}
            numeropregunta={listar.numeropregunta}
            pregunta={listar.pregunta}
            r1={listar.r1}
            r2={listar.r2}
            r3={listar.r3}
          />
        ))}
      </div>
      <button onClick={comprobar} type="button" className="btn btn-primary bi-check-circle">
        
      </button>
    </div>
  );
};

export default Juego;
