import { useState } from "react";
import Student from "./components/student";
import Favourite from "./components/favourite";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [fav, setfav] = useState([])

  const favstu = (favitem) => {
    setfav([...fav, favitem])
  }

  const delstu = (delitem) => {
    let tempfav = fav.filter(function (item, index) {
      return item !== delitem;
    })
    setfav(tempfav)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student fav={fav} favstu={favstu} />}>hi</Route>
        <Route path="/favourite" element={<Favourite fav={fav} delstu={delstu} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

