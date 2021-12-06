import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);
  function addItem(it) {
    var temp = it;
    setItems((prev) => {
      return [...prev, temp];
    });
  }
  function deleteItem(it) {
    var temp = items.filter((ele, ind) => {
      return ind !== it;
    });
    setItems(temp);
  }

  return (
    <div>
      <Header />
      <CreateArea fun={addItem} />
      {items.map((it, ind) => {
        return (
          <Note
            key={ind}
            id={ind}
            deleteItem={deleteItem}
            title={it.title}
            content={it.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
