import { validarInput } from "./validar.js";
// const { validarDataNascimento } = require("./validarDataNascimento.js");
window.onload = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("input", () => {
           validarInput(input);
        });
    })
}