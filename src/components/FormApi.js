import { useState } from "react";

const FormApi = ({ addPosts }) => {
  const [titleInput, setTitleInput] = useState("");
  const [bodyArea, setBodyArea] = useState("");

  const handleInputChange = (e) => {
    setTitleInput(e.target.value);
  };

  const handleTextAreaChange = (e) => {
    setBodyArea(e.target.value);
  };

  const addPostBtn = (e) => {
    e.preventDefault();
    if (titleInput === "") {
      alert("Enter a Title Field");
    } else {
      addPosts(titleInput, bodyArea);
    }

    setTitleInput("");
    setBodyArea("");
  };

  return (
    <>
      <form onSubmit={addPostBtn}>
        <div className="form">
          <div className="input-field">
            <label>Enter a title</label>
            <input
              type="text"
              placeholder="Enter a title"
              value={titleInput}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-field">
            <label>Enter a Description</label>
            <textarea
              placeholder="Enter a Something..."
              value={bodyArea}
              onChange={handleTextAreaChange}
            ></textarea>
          </div>

          <button id="addBtn">Addpost</button>
        </div>
      </form>
    </>
  );
};

export default FormApi;
