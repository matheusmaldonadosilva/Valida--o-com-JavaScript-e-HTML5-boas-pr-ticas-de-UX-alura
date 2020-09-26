import { validarDataNascimento } from "./validarDataNascimento.js";

export const validarInput = input => {
   const classElementoErro = "erro-validacao";
   const classInputErro = "possui-erro-validacao";
   const elementoPai = input.parentNode;
   const elementoErroExiste = elementoPai.querySelector(
     `.${classElementoErro}`
   );
   const elementoErro = elementoErroExiste || documento.createElement('div');
   const elementoEhValido = input.validity.valid;
   const tipo = input.dataset.tipo;

   const validadoresEspecificos = {
    dataNascimento: input => validarDataNascimento(input)
   };

   if(validadoresEspecificos[tipo]) {
       validadoresEspecificos[tipo](input);
   }

   if(!elementoEhValido) {
        elementoErro.className = classElementoErro;
        input.classList.textContent = "Há um erro aqui";
        input.after(elementoErro);
   }else {
        elementoErro.remove();
        input.classList.remove(classInputErro);
   }
};