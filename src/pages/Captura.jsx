import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import CapturarPregunta from "../components/CapturarPregunta";
import { Link } from "react-router-dom";
import "/src/pages/Captura.css";

const Captura = () => {
  const [listarPreguntas, setListarPreguntas] = useState(
    //sirve para convertir informacion a formato JSON
    JSON.parse(localStorage.getItem("listarPreguntas")) || []
  );

  const metodohome = () => {
    setEstado(true);
  };

  //crear una funcion para el boton de agregar pregunta
  const agregarpregunta = async () => {
    const { value } = await Swal.fire({
      title: "Agregar pregunta y respuestas",

      html: `<input type='number' 
id='numeropregunta' 
name='numeropregunta' 
class='swal2-input' 
placeholder='Número de pregunta'
/>
<input type='text' 
id='pregunta' name='pregunta' 
class='swal2-input' 
placeholder='Pregunta' 
/>
<input type='text' 
id='r1' name='r1' 
class='swal2-input' 
placeholder='Respuesta 1'
/>
<input type='text' 
id='r2' name='r2' 
class='swal2-input' 
placeholder='Respuesta 2'
/>
<input type='text' 
id='r3' name='r3' 
class='swal2-input' 
placeholder='Respuesta 3'
/>`,
      confirmButtonText: "Guardar Pregunta",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const numeropregunta =
          Swal.getPopup().querySelector("#numeropregunta").value;
        const pregunta = Swal.getPopup().querySelector("#pregunta").value;
        const r1 = Swal.getPopup().querySelector("#r1").value;
        const r2 = Swal.getPopup().querySelector("#r2").value;
        const r3 = Swal.getPopup().querySelector("#r3").value;
        if (!numeropregunta || !pregunta || !r1 || !r2 || !r3) {
          Swal.showValidationMessage(
            "Por favor ingrese la información correspondiente"
          );
        }
        return { numeropregunta, pregunta, r1, r2, r3 };
      },
    });
    if (
      !value.numeropregunta ||
      !value.pregunta ||
      !value.r1 ||
      !value.r2 ||
      !value.r3
    )
      return;

    const NuevaLista = [
      ...listarPreguntas,
      { id: uuidv4(), ...value, respuesta: "" },
    ];

    localStorage.setItem("listarPreguntas", JSON.stringify(NuevaLista));
    setListarPreguntas(NuevaLista);
  };

  //boton de borrar
  //const EP = ({setListarPreguntas}) => {
  const borrar = async () => {
    const result = await Swal.fire({
      title: "¿Borrar la pregunta?",
      text: "¡No podrás revertir esto!",
      icon: "Cuidado",
      showCancelButton: true,
      confirmButtonText: "¡Si, limpiar esto!",
    });

    if (result.isConfirmed) {
      localStorage.setItem("listarPreguntas", JSON.stringify([]));
      setListarPreguntas([]);
    }
  };

  //codigo de captura
  return (
    <div className="container text-center">
      <div className="row">
        <h1 div className="col">
          <strong>CAPTURA</strong>
        </h1>
        <div>
          <Link
            to={"/HomeQuiz"}
            onClick={metodohome}
            className="menuc"
            role="button"
            aria-disabled="true"
          >
            <i class="bi bi-arrow-left-square-fill"> Menu</i>
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <button
            onClick={agregarpregunta}
            type="button"
            className="bi bi-plus-square-dotted"
          >
          </button>
          <button onClick={borrar} type="button" className="bi bi-trash">
            
          </button>
        </div>
        {/*Boton para cambiar a menu*/}
        <div className="col-md-12">
          {/*Se creo donde iran alojadas las preguntas*/}
          {listarPreguntas.map((listar) => (
            <CapturarPregunta
              key={listar.id}
              listar={listar}
              listarPreguntas={listarPreguntas}
              setListarPreguntas={setListarPreguntas}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Captura;
