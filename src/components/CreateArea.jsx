import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({ title: "", content: "" });
  function updateTxt(eve) {
    console.log(props);
    const { value, name } = eve.target;
    console.log(value, name);

    setText((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function update(e) {
    props.fun(text);
    setText({ title: "", content: "" });
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={update}>
        <input
          onChange={updateTxt}
          value={text.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={updateTxt}
          value={text.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
