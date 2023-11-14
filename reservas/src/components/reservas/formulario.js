import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd'
import { LogoutOutlined } from '@ant-design/icons' 
import { Bookings } from '../../api/Bookings';
import { Availability } from '../../api/Availability';
import { listadoVuelos } from '../listadoVuelos'

export const Formulario = () => {

    const navigate = useNavigate()

    const [availability, setavailability] = useState({
        accountNumber: '',
        carrierCodes: '',
        originAirportCode: '',
        destinationAirportCode: '',
        departureOn: '',
        weight: ''
    });

    // funcion para activar el formulario
    const onFinish = (values) => {
        
        setavailability({
            accountNumber: '14000110001',
            carrierCodes: 'B6',
            originAirportCode: values.originAirportCode,
            destinationAirportCode: values.destinationAirportCode,
            departureOn: '2023-11-14T20:30:00',
            weight: values.weight
        })
        
        vuelos(); 
    };

    const vuelos = async () => {

        try {
            
            const respuesta = await Availability.get(`
            /availability?accountNumber=${availability.accountNumber}&carrierCodes=${availability.carrierCodes}
            &originAirportCode=${availability.originAirportCode}&destinationAirportCode=${availability.destinationAirportCode}
            &departureOn=${availability.departureOn}&weight=${availability.weight}`);

            <listadoVuelos />

            console.log(respuesta)

        } catch (error) {
            console.log(error)
            
        }

    }

    const validar= () => {

        const { accountNumber,
                carrierCodes,
                originAirportCode,
                destinationAirportCode,
                departureOn,
                weight } = availability
        
        let valido = !accountNumber.length || !carrierCodes.length 
                     || !originAirportCode.length || !destinationAirportCode.length || !departureOn.length || !weight.length
        
        return valido
        
    }

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
                        message: 'Please input origin!',
                    },]}                
                
                >

                <Input 
                    type='text'  
                    placeholder="Origin*"  
                    value={availability.originAirportCode}
                />

                </Form.Item>

                <Form.Item label="Destination"
                    name="destinationAirportCode"
                    rules={[
                    {
                        required: true,
                        message: 'Please input dest!',
                    },]}
                >

                <Input
                    type="text"
                    placeholder="Destination*"
                    value={availability.destinationAirportCode}
                />

                </Form.Item>

                <Form.Item
                    label='weight'
                    name='weight'
                    rules={[
                        {
                            required: true,
                            message: 'Please input weight!',
                        },]}
                >

                <Input 
                    type='text' 
                    placeholder='Weight*' 
                    value={availability.weight}
                />

                </Form.Item>

                <Form.Item shouldUpdate>
                    {() => (
                    <Button
                        type="primary"
                        htmlType="submit" 
                        // disabled={validar()}                   
                    >
                    Search
                    </Button>
                )}
                </Form.Item>
            </Form>  
        </div>
    </>
    )
}