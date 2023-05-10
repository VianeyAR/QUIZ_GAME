import React from "react";
import Swal from "sweetalert2";
import "/src/pages/Captura.css";

function CapturarPregunta({ listar, listarPreguntas, setListarPreguntas }) {
  const { id, numeropregunta, pregunta, r1, r2, r3, respuesta } = listar;

  //editar eliminar

  /*Boton de eliminar*/
  const EliminarPregunta = () => {
    const NuevaLista = listarPreguntas.filter((item) => item.id !== id);
    localStorage.setItem("listarPreguntas", JSON.stringify(NuevaLista));
    setListarPreguntas(NuevaLista);
  };

  /*Boton de editar*/
  const EditarPregunta = async () => {
    const { value } = await Swal.fire({
      title: "Agregar pregunta y respuestas",
      html: `<input type='number' 
        id='numeropregunta' 
        name='numeropregunta' 
        class='swal2-input' 
        placeholder='Número de pregunta' value='${numeropregunta}'
        />
        <input type='text' 
        id='pregunta' name='pregunta' 
        class='swal2-input' 
        placeholder='Pregunta' value='${pregunta}'
        />
        <input type='text' 
        id='r1' name='r1' 
        class='swal2-input' 
        placeholder='Respuesta 1' value='${r1}'
        />
        <input type='text' 
        id='r2' name='r2' 
        class='swal2-input' 
        placeholder='Respuesta 2' value='${r2}'
        />
        <input type='text' 
        id='r3' name='r3' 
        class='swal2-input' 
        placeholder='Respuesta 3' value='${r3}'
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

    const NuevaLista = listarPreguntas.map((item) => {
      if (item.id === id) {
        item.numeropregunta = value.numeropregunta;
        item.pregunta = value.pregunta;
        item.r1 = value.r1;
        item.r2 = value.r2;
        item.r3 = value.r3;
      }
      return item;
    });

    localStorage.setItem("listarPreguntas", JSON.stringify(NuevaLista));
    setListarPreguntas(NuevaLista);
  };
  const asignarrespuesta = () => {
    const checarrespuesta = document.getElementById(`${numeropregunta}`);
    //console.log(checarrespuesta);
    var seleccionaropcion =
      checarrespuesta.options[checarrespuesta.selectedIndex].value;
    console.log(seleccionaropcion);
    
    const NuevaLista = listarPreguntas.map((item) => {
      if (item.id === id) {
        item.respuesta = seleccionaropcion;
        
      }
      return item;
    });
    localStorage.setItem("listarPreguntas", JSON.stringify(NuevaLista));
    setListarPreguntas(NuevaLista);
  };

  function cargarrespuesta() {
    const guardar = document.getElementById(`${numeropregunta}`)  
      //console.log(guardar);
      if (guardar === respuesta) {
        guardar.selected = 'selected'
        
      }
     
     //console.log({selected});
     
      
  }  
  

  return (
    <div className="card">
      <div className="card-header">Pregunta {numeropregunta}</div>
      <div className="card-body">
        <h5 className="card-title">{pregunta}</h5>

        {/*<div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="respuesta"
            id="flexRadioDefault1"
            value={r1}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {r1}
          </label>
        </div>
        <div className="form-check ">
          <input
            className="form-check-input"
            type="radio"
            name="respuesta"
            id="flexRadioDefault1"
            value={r2}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {r2}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="respuesta"
            id="flexRadioDefault1"
            value={r3}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {r3}
          </label>
  </div>*/}

        <>
          <select
            id={numeropregunta}
            name="respuesta"
            onClick={cargarrespuesta}
            class="form-select"
            required
          >
            <option selected disabled value=''>
            
              Elige...
            </option>
            <option value={r1}>{r1}</option>
            <option value={r2}>{r2}</option>
            <option value={r3}>{r3}</option>
            
          </select>
        </>

        <button
          onClick={EditarPregunta}
          type="button"
          className="btn btn-warning bi-pen"
        >
        </button>
        <button
          onClick={EliminarPregunta}
          type="button"
          className="btn btn-warning bi-trash"
        >
        </button>

        <button 
          onClick={asignarrespuesta}
          type="button"
          className="btn btn-warning bi-clipboard-check"
          id="liveAlertBtn"
        >
        </button>
      </div>
    </div>
  );
}

export default CapturarPregunta;
