import { useDispatch, useSelector } from "react-redux"
import { reset, restar, restar5, sumar, sumar5 } from "../actions/contadorAction";

const Contador = () => {
    //Acceder al estado
    const state = useSelector((state) => state.contador)

    //Despachar acciones de Redux
    const dispatch = useDispatch();

  return (
    <div>
        <h2>
            Contador con Redux
        </h2>
        <p>
            {state.contador}
        </p>
        <nav>
            <button className='btn btn-primary' onClick={() => dispatch(sumar5())}>+5</button>
            <button className='btn btn-primary' onClick={() => dispatch(sumar())}>+1</button>
            <button className='btn btn-primary' onClick={() => dispatch(reset())}>Reset</button>
            <button className='btn btn-primary' onClick={() => dispatch(restar())}>-1</button>
            <button className='btn btn-primary'onClick={() => dispatch(restar5())}>-5</button>
        </nav>
    </div>
  )
}

export default Contador