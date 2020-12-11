import React, { useState } from "react";

const SongCreate = () => {
  const [input, setInput] = useState("");
  return (
    <div className="container">
      <h3>Create new song</h3>
      <form>
        <label>Song Title: </label>
        <input
          type="text"
          onChange={e => setInput(e.target.value)}
          value={input}
        />
      </form>
    </div>
  );
};

export default SongCreate;
