import { useContext, useEffect } from 'react'
import {  Route, Routes, useNavigate } from 'react-router-dom';
import { NavegacionReservas } from '../NavegacionReservas'
import { ApiContext } from '../../../context/ApiContext'
import { Formulario } from '../formulario';

export const ReservasRoutes = () => {

    const [auth, guardarAuth] = useContext(ApiContext);
    const navigate =  useNavigate();

    // redirigo si no hay token
    useEffect( () => {
        if(auth.token === ''){  
            navigate('/');
        }
    });

    return(
        <>
          <NavegacionReservas />

          <Routes>
             <Route path='/formulario' element={Formulario}/>             
          </Routes>
        </>
    )
}