export const studentDetail = (value,image,navigation)=>{
  return {
    type: 'studentDetail',
    name : value,
    image:image,
    navigation:navigation
  }
};
