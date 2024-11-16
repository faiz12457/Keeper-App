





const key="keeper-data";
 export function getKeeperItem(){
    const convert=localStorage.getItem(key);
    if(!convert) return [];
    return  JSON.parse(convert);

 }
export function addKeeperItem(items){


  return  localStorage.setItem(key,JSON.stringify(items))

}