import React from 'react';
import c from './Card.module.css'
import { Link } from 'react-router-dom'


function Card({ name, image, temperaments, id, weight }) {
   return (
      <>
         <div className={c.name1}>
            <p className={c.name} >{name}</p>

            <Link to={`/perro/${id}`}>
               <img className={c.pic} src={image ? image : 'https://th.bing.com/th/id/OIP.lWYHM0gm2akUkT45IkDUHgHaE8?w=265&h=180&c=7&r=0&o=5&pid=1.7'} alt={"img"} />
            </Link>

            <div className={c.divDietsNames}>
               {temperaments ? temperaments.length ? temperaments.map((f, i) => (f.name ? <p key={i}> {f.name} </p> : <p key={i}>{f}</p>)) : <p>Temperament not defined</p> : <p>Sorry dog does not exist</p>}
            </div>

            <p className={c.weight}> Min Weight: {weight[0]} </p>
            <p className={c.weight}> Max Weight: {weight[1]} </p>

         </div>
      </>

   )
}

export default Card