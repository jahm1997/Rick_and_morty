import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";

function App() {
  const [characters, setcharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setcharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("no hay personaje con ese ID");
        }
      });
  };

  //   Macarena Rodríguez Rucci20:04
  // export const getAllBands = () => (dispatch) => {
  //  return fetch ("http://localhost:3001/bands")
  //  .then ((response)=>response.json())
  //  .then ((data)=>
  //      {dispatch({type:GET_ALL_BANDS,payload: data})
  //     }
  //  )
  // };

  const onClose = (id) => {
    setcharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch}></Nav>
      Routes
      <div className="orderCards">
        <Routes>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailID" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
