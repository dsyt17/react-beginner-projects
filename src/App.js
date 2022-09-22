import React, { useState } from "react";
import "./index.scss";

const Modal = ({ modal, setModal, children }) => {
  return (
    <div className={`overlay animated ${modal ? "show" : ""}`}>
      <div className="modal">{children}</div>
    </div>
  );
};

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModal(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      <Modal modal={modal} setModal={setModal}>
        <svg
          onClick={() => setModal(false)}
          height="200"
          viewBox="0 0 200 200"
          width="200"
        >
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          <h2>Это модально окно</h2>
        </svg>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
      </Modal>
    </div>
  );
}

export default App;
