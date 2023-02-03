import Card from '../Card/Card.jsx';
import "./Style.css"

export default function Cards(props) {
   const { characters,onClose } = props;
   
   return <div className='cuadroGrid' >
      
      {
         characters.map((char) => (
            < Card key = {char.id} name = {char.name} species = {char.species} gender = {char.gender} image = {char.image} id={char.id} onClose = {() => onClose(char.id)} ></Card>)
         )
      }
   </div>;
}

// export default function Cards({characters}) {
//    const cerrar = () => window.alert("Emulamos que se cierra la card")
//    return (
//       <div>
//          {
//             characters.map(
//                (char) => {
//                   return 
//                      <Card
//                         key = {characters.id}
//                         name = {characters.name}
//                         species = {characters.species}
//                         gender = {characters.gender}
//                         onClose = {cerrar}
//                      ></Card>
//                }
//             )
//          }
//       </div>

//    )
// }
