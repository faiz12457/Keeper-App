import React from "react";
import Notecontent from "./noteContent";

function Note(props) {
  return(
    <div>
   {  props.items.map((item)=>{
    return( <Notecontent key={item.id}
     title={item.heading}
      content={item.note}
       id={item.id}
        delete={props.remove}
        edit={props.edit}
         />)

   })}
   </div>
  )

}


export default Note;