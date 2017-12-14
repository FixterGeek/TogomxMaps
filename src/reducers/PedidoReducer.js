import {PEDIDO_CREATE} from '../actions/types';

const INITIAL_STATE= {
    visto: false,
    tiendaId:'',
    repartidorId:'',
    items:[
        {
          cantidad:'',
          producto:'',
        }
    ]
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PEDIDO_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}
