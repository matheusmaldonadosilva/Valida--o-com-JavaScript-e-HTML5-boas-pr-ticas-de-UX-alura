export const validarDataNascimento = input => {
    alert(input.value);
    const dataNascimento = new Date (input.value);
    const dataAtual = new Date();

    const datafaz18 = new Date(
        dataNascimento.getUTCFullYear() + 18,
        dataNascimento.getUTCMonth(),
        dataNascimento.getUTCDate()
    );

    if (dataFaz18 > dataAtual) {
        input.setCustomValidity("A idade mínima é 19 anos");
        return;
    }

    input.setCustomValidity("");
    return;
};