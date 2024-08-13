
const initialState = {
    contador: 0
}


export default function contadorReducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENTAR':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'INCREMENTAR_5':
            return {
                ...state,
                contador: state.contador + 5
            }
        case 'DECREMENTAR':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'DECREMENTAR_5':
            return {
                ...state,
                contador: state.contador - 5
            }
        case 'RESET':
            return {
                ...state,
                contador: 0
            }
        default:
            return state
    }
}