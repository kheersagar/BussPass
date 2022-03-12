export const studentDetail = (value,image,navigation)=>{
  return {
    type: 'studentDetail',
    name : value,
    image:image,
    navigation:navigation
  }
};

export const Enrollment = (enrollment)=>{
  return {
    type:'Enrollment',
    enrollment : enrollment,
  }
}

export const Password = (password)=>{
  return {
    type:'Password',
    password : password,
  }
}

export const SubmitForm = (enrollment,password)=>{
  return {
    type:'SubmitForm',
    enrollment:enrollment,
    password : password,
    logged: false
  }
}

export const AccountLogout = ()=>{
  return {
    type:'Logout',
    logged: false
  }
}