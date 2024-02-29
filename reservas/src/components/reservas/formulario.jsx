import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd'
import { Availability } from '../../api/Availability';
import { ListadoVuelos } from '../vuelos/listadoVuelos'


export const Formulario = () => { 

    // const navigate = useNavigate()
    const [ listado, setlistado ] = useState([])

    // funcion para activar el formulario
    const onFinish = ({originAirportCode, destinationAirportCode, weight}) => {     
    
        let availability = {
            accountNumber: '14000110001',
            carrierCodes: 'B6',           
            originAirportCode: originAirportCode,
            destinationAirportCode: destinationAirportCode,
            departureOn: '2024-02-26T20:30:00',
            weight: weight
        }
                        
        vuelos(availability); 

        availability = {};
    };

    const vuelos = async (availability) => {

        const {accountNumber, carrierCodes, departureOn, destinationAirportCode, 
                originAirportCode, weight } = availability;
        const url = `availability?accountNumber=${accountNumber}&carrierCodes=${carrierCodes}&originAirportCode=${originAirportCode}&destinationAirportCode=${destinationAirportCode}&departureOn=${departureOn}&weight=${weight}`;

        try {          
            const respuesta = await Availability.get(url);  
            setlistado(respuesta.data.routes)         

        } catch (error) {
            console.log(error)            
        }

    }

    // const validar= () => {

    //     const { accountNumber,
    //             carrierCodes,
    //             originAirportCode,
    //             destinationAirportCode,
    //             departureOn,
    //             weight } = availability
        
    //     let valido = !accountNumber.length || !carrierCodes.length 
    //                  || !originAirportCode.length || !destinationAirportCode.length || !departureOn.length || !weight.length
        
    //     return valido
        
    // }

    return (
        <>
         <div className='formulario_div'>

          <Form                 
                className='formulario__reservas'
                name="horizontal_login" 
                layout="inline"                
                onFinish={onFinish} >
                    
                <Form.Item label="Origin"
                    name="originAirportCode"
                    rules={[
                        {
                            required: true,
                            message: 'Please input origin',
                        },
                        {max: 3}
                    ]}  
                    hasFeedback             
                >

                <Input 
                    type='text'  
                    placeholder="Origin*"                     
                />

                </Form.Item>

                <Form.Item label="Destination"
                    name="destinationAirportCode"
                    rules={[
                        {
                            required: true,
                            message: 'Please input dest',
                        },
                        {max: 3}
                    ]}
                    hasFeedback
                >

                <Input
                    type="text"
                    placeholder="Destination*"                   
                />

                </Form.Item>

                <Form.Item
                    label='Weight (LB)'
                    name='weight'
                    rules={[
                        {
                            required: true,
                            message: 'Please input weight',
                        },
                    ]}
                    hasFeedback
                >

                <Input 
                    type='text' 
                    placeholder='Weight (LB)*'                       
                />

                </Form.Item>

                <Form.Item >
                    
                    <Button
                        type="primary"
                        htmlType="submit"                                        
                    >
                    Search
                    </Button>
                
                </Form.Item>
            </Form>
                {
                    (listado.length > 0) ? <ListadoVuelos listado={listado}/> : ''            
                }            
        </div>
    </>
    )
}