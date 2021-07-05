
export const updateObjInArray = (items, itemId, objPropName, newObjProp) =>{
debugger;
   return items.map(u => {
        if(u[objPropName] === itemId){
          return {...u, ...newObjProp}
        }
        return u;
    })
}