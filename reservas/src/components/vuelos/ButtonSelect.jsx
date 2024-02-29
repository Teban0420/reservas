
import { useNavigate } from 'react-router-dom';
import { Button} from 'antd';

export const BtnSelect = (segment) => {

    const navigate = useNavigate();

    const Enviar = () => {
        
        navigate('/formulario/fligths', {
            state: { userData: segment}
        });
    }

    return(
        <Button 
            type="primary" 
            size='small'
            style={{
                marginLeft: 630
            }}            
            onClick={Enviar}
        >
            SELECT  
        </Button>
    )
}