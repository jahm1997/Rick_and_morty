import { useState } from "react";

export default function SearchBar({onSearch}) {
   
   const [character,setCharacter] = useState("")
   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div>
         <input type='search' value={character} onChange={handleChange} />
      <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}

// export default function SearchBar({onSearch}) {
   
//    return (
//       <div>
//          <input type='search' />
//       <button onClick={onSearch}>Agregar</button>
//       </div>
//    );
// }
