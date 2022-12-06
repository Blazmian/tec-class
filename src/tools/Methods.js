export const verificarLongitud = (valor, min, max) => {
    if (valor.length >= min && valor.length <= max) {
        return true;
    } else {
        return false;
    }
}

export const soloLetras = (valor) => {
    let isValid = false
    const pattern = new RegExp('^[A-ZÁÉÍÓÚÑ ]+$', 'i')
    if (pattern.test(valor)) {
        isValid = true
    }
    return isValid
}

export const validarMail = (valor) => {
    let isValid = false
    if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.exec(valor)) {
        isValid = true
    }
    return isValid
}