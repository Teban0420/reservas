
import { Routes, Route } from 'react-router-dom';
import { Login, PagesRoutes} from '../components';
import { ReservasRoutes } from '../components/reservas/routes/ReservasRoutes';

export const AppRouter = () => {
    return(
        <>             
            <Routes>
                <Route path='login' element={<Login />} />                 
                <Route path='/*' element={<PagesRoutes />} />                 
                <Route path='/formulario/*' element={<ReservasRoutes />} />                 
            </Routes>        
        </>
    )
}