const initialState = {
  enrollment:'',
  password :'',
  logged : false,
};

export function Login(state = initialState,action){
  switch(action.type){
    case 'Enrollment': 
    return {
      ...state,
      enrollment : action.enrollment,
    }
    case 'Password' : 
    return {
      ...state,
      password : action.password
    }
    case 'SubmitForm': 
    return{
      ...state,
      logged :true
    }
    case 'Logout': 
    return{
      ...state,
      logged:false
    }
    default : return state;
  }
}