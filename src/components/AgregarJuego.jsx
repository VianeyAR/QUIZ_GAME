import React from "react";

function AgregarJuego({ numeropregunta, pregunta, r1, r2, r3 }) {


  return (
    <>
      <label for="validationDefault04" class="form-label">
        {numeropregunta}. {pregunta}
      </label>
      <select  class="form-select" id="validationDefault04" required>
        
        <option selected disabled value="">
          Elige...
        </option>
        <option id={numeropregunta} value={r1}>{r1}</option>
        <option id={numeropregunta} value={r2}>{r2}</option>
        <option id={numeropregunta} value={r3}>{r3}</option>
      </select>
    </>
  );
}

export default AgregarJuego;
