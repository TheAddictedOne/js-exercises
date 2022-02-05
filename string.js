import ERROR from "./errors.js";


/**
 * @param {string} str
 * @param {number} index
 */
const charAt = (str,index) => {
    //quand l'index est supérieur à la taille de str return error
    // quand l'index inférieur à 0, error 
    // sinon, renvoie str[index]
    if (index >= str.length ) {
        return ERROR.OUT_OF_BOUND
    }
    if (index < 0) {
        return ERROR.OUT_OF_BOUND
    }
    return str[index]

}

export default { charAt };
