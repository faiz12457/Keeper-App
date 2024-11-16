
import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const ref = useRef();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleTitle = (evt) => setTitle(evt.target.value);
  const handleContent = (evt) => setContent(evt.target.value);

  const addOrEditItem = (evt) => {
    if (evt) evt.preventDefault();

    if (!title || !content) {
      alert("Take a note");
      return;
    }

    if (editingId) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editingId ? { ...item, heading: title, note: content } : item
        )
      );
    } else {
      const newItem = { id: Date.now(), heading: title, note: content };
      setItems((prevItems) => [...prevItems, newItem]);
    }

    resetForm();
  };

  const deleteNote = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    resetForm();
  };

  const startEditing = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setEditingId(id);
      setTitle(itemToEdit.heading);
      setContent(itemToEdit.note);
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setEditingId(null);
    ref.current?.focus();
  };

  useEffect(() => {
    const handleEnterPress = (evt) => {
      if (evt.key === "Enter") {
        evt.preventDefault();
        addOrEditItem();
      }
    };
    document.addEventListener("keypress", handleEnterPress);

    return () => document.removeEventListener("keypress", handleEnterPress);
  }, [title, content]);

  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <CreateArea
          title={handleTitle}
          titleValue={title}
          content={handleContent}
          contentValue={content}
          addItem={addOrEditItem}
          ref={ref}
          isEditing={editingId}
        />
        <Note items={items} remove={deleteNote} edit={startEditing} />
      </div>
      <Footer />
    </div>
  );
}

export default App;





































