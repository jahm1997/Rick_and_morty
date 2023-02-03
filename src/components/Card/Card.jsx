import "./Style.css"
import {Link} from "react-router-dom"

export default function Card(props) {
   return (
      <div className="divsCard" >
         <button className = "botoncitos" type="button" onClick={props.onClose} >X</button>
         <img className="imagenCard" src={props.image} alt={props.name} />
         <Link to={`/detail/${props.id}`} >
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
      </div>
      
   );
}

// export default function Card({name,species,gender,image,onClose}) {
//    return (
//       <div>
//          <button onClick={props.onClose}>X</button>
//          <img  src={image} alt={name} />
//          <h2>{name}</h2>
//          <h2>{species}</h2>
//          <h2>{gender}</h2>
//       </div>
//    );
// }