import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd'
import { LogoutOutlined } from '@ant-design/icons' 
import { Bookings } from '../../api/Bookings';

export const Formulario = () => {

    const navigate = useNavigate()

    const [form] = Form.useForm();

    const [reserva, setReserva] = useState({
        'agentAccountNumber': '',
        'airWaybill': {
          'prefix': '279',
          'referenceType': 'AIR WAYBILL'
        },
        'destinationAirportCode': '',
        'natureOfGoods': '',
        'originAirportCode': '',
        'pieces': 0,
        'segments': [],
        'weight': {}
    });

    // leer datos del formulario
    const actualizarState = e => {

        setReserva({
            ...reserva,
            [e.target.name] : e.target.value
        })
    }

    // funcion para activar el formulario
    const onFinish = (values) => {
        console.log('Finish:', values);
        CrearBooking(); 
    };

    const CrearBooking = async() => {

        const resp = await Bookings.post('/bookings', reserva, {
            headers: {
                "apikey": "EnbX12j02DDHFrAoqjaq3FIkmTGncrrk",
                "Accept": "application/json",
                "Content-Type": "application/json"
              }
        })

        console.log(resp)
        
    }

    const validar_reserva = () => {

        const {agentAccountNumber, destinationAirportCode, natureOfGoods, originAirportCode, 
                pieces, segments, weight } = reserva
        
        let valido = !agentAccountNumber.length || !destinationAirportCode.length 
                     || !natureOfGoods.length || !originAirportCode.length || !pieces.length || !segments.length || !weight.length
        
        return valido
        
    }

    return (
        <>
        <div className='formulario_div'>
          <Form 
                className='formulario__reservas'
                form={form} 
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

                <Input  placeholder="Origin*" />

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
                />

                </Form.Item>

                <Form.Item label="Shipping Date"
                    name="shipping_date"
                    rules={[
                        {
                            required: true,
                            message: 'Please Shipping Date!'
                        }
                    ]}
                >
        
                <Input
                    type='date'
                />

                </Form.Item>

                <Form.Item label="Arrival Date"
                    name="arrival_date"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Arrival Date'
                        }
                    ]}
                >
                    <Input
                        type='date'
                    />

                </Form.Item>

                <Form.Item label="Product"
                    name="product"
                    rules={[
                        {
                            required: true,
                            message: 'Please Input Product'
                        }
                    ]}
                >

                <Input type='text' placeholder='Product'/>
                    
                </Form.Item>

                <Form.Item 
                    label="Commodity"
                    name="commodity"
                    rules={[
                        {
                            required: true,
                            message: 'Please Input Commodity'
                        }
                    ]}
                >
                
                <Input type='text' placeholder='Commodity' />

                </Form.Item>

                <Form.Item 
                    label="Shipment Description"
                    name="shippment_description"
                    rules={[{ required: true, message: 'Please Input Shipment Description'}]}
                >
                
                <Input type='text' placeholder='Shipment Description' />

                </Form.Item>

                <Form.Item
                    label="SCC"
                    name="scc"
                >
                
                <Input type='number' min="1"  max="100"/>

                </Form.Item>

                <Form.Item
                    label="Pieces"
                    name="pieces"
                    rules={[{ required: true, message: 'Please Input Pieces'}]}
                >

                <Input type='text' placeholder='Pieces' />

                </Form.Item>

                <Form.Item
                    label="Weight"
                    name="weight"
                    rules={[{required: true, message: 'Please Input Weight'}]}
                >
                
                <Input type='text' placeholder='Weight' />

                </Form.Item>

            <Form.Item shouldUpdate>
                {() => (
                <Button
                    type="primary"
                    htmlType="submit" 
                    // disabled={validar_reserva()}                   
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