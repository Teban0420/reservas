
import { Routes, Route } from 'react-router-dom';
import { Login, PagesRoutes} from '../components';

export const AppRouter = () => {
    return(
        <>             
            <Routes>
                <Route path='login' element={<Login />} />                 
                <Route path='/*' element={<PagesRoutes />} />                 
            </Routes>        
        </>
    )
}