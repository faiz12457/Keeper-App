import React, { useState, forwardRef, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import EditIcon from '@mui/icons-material/Edit';

const CreateArea = forwardRef(({ title, titleValue, content, contentValue, addItem, isEditing }, ref) => {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    if (zoom && ref.current) {
      ref.current.focus();
    }
  }, [zoom]);

  return (
    <div>
      <form className="create-note">
        {zoom && (
          <input
            name="title"
            placeholder="Title"
            onChange={title}
            value={titleValue}
            ref={ref}
          />
        )}
        <textarea
          onClick={() => setZoom(true)}
          name="content"
          placeholder="Take a note..."
          rows={zoom ? "3" : "1"}
          onChange={content}
          value={contentValue}
        />
        <Zoom in={zoom}>
          <Fab onClick={addItem}>{isEditing ? <EditIcon /> : <AddIcon />}</Fab>
        </Zoom>
      </form>
    </div>
  );
});

export default CreateArea;
