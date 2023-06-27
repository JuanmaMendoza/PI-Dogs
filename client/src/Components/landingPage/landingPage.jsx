import s from './App.module.css';
import React from "react";
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>

   <div className={s.App}>
        <h4>
          <span>WELCOME!</span>
          </h4> 
      
         <Link to='/home'>
        <button type="button" className={s.fill}>HOME</button>
           </Link>

       <div className={s.im}>
       <img className ={s.res} src="https://vidaconmascotas.com/wp-content/uploads/2021/03/%C2%BFCuantas-razas-de-perros-existen-en-el-mundo-Todos-los.jpg" alt={"img"}/>  
      </div>
      </div>
     </>
  );
}

export default LandingPage;