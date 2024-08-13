import { useDispatch, useSelector } from "react-redux"
//import { reset, restar, restar5, sumar, sumar5 } from "../actions/contadorAction";
import { incrementar, incrementar5, resetSlice, decrementar, decrementar5 } from "../reducers/contadorSlice";

const Contador = () => {
    //Acceder al estado
    //const state = useSelector((state) => state.contador)  //state con reducer, no slice
    const state = useSelector((state) => state.contador.contador)  //state con slice

    //Despachar acciones de Redux
    const dispatch = useDispatch();

  return (
    <div>
        <h2>
            Contador con Redux
        </h2>
        <p>
            {state}
        </p>
        <nav>
            {/* dipatch con reducers */}
            {/* <button className='btn btn-primary' onClick={() => dispatch(sumar5())}>+5</button>
            <button className='btn btn-primary' onClick={() => dispatch(sumar())}>+1</button>
            <button className='btn btn-primary' onClick={() => dispatch(reset())}>Reset</button>
            <button className='btn btn-primary' onClick={() => dispatch(restar())}>-1</button>
            <button className='btn btn-primary'onClick={() => dispatch(restar5())}>-5</button> */}

            {/* dispatch con slice */}
            <button onClick={() => dispatch(incrementar5(5))}>+5</button>
            <button onClick={() => dispatch(incrementar())}>+1</button>
            <button onClick={() => dispatch(resetSlice())}>Reset</button>
            <button onClick={() => dispatch(decrementar())}>-1</button>
            <button onClick={() => dispatch(decrementar5(5))}>-5</button>
        </nav>
    </div>
  )
}

export default Contador