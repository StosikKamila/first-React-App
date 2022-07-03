import React from 'react';
import Lista from "./Lista"
import MojKomponent from "./NewComponent";


const ToDo = () => {
    const [list, setList] = React.useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newList = [...list, event.target.zadanie.value]
        setList(newList)
    }
    return (
      <>
        <Lista elementy={["kot", "pies", "mysz"] } />
        <form onSubmit={handleSubmit}>
          <MojKomponent
            label="Dodaj pozycję"
            placeholder="wpisz pozycję"
            id="zadanie"
          />
          <input type="submit" value="Dodaj" />
        </form>
      </>
    );
}

export default ToDo;