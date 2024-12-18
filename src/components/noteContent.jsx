import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Notecontent(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.edit(props.id)}><EditIcon /></button>
      <button onClick={()=>props.delete(props.id)} ><DeleteIcon /></button>
    </div>
  );
}
export default Notecontent;