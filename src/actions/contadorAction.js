import { DECREMENTAR, DECREMENTAR_5, INCREMENTAR, INCREMENTAR_5, RESET } from "../types"


export const sumar = () => {
    return {
        type: INCREMENTAR
    }
}

export const sumar5 = () => {
    return {
        type: INCREMENTAR_5,
        payload: 5
    }
}

export const restar = () => {
    return {
        type: DECREMENTAR
    }
}

export const restar5 = () => {
    return {
        type: DECREMENTAR_5,
        payload: 5
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}