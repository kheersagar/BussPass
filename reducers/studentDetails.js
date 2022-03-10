
const initialState = 0;
export function studentDetail(state = initialState,action){

  switch(action.type){
    case 'studentDetail' : return action;
    default :return state;
  }
  
}