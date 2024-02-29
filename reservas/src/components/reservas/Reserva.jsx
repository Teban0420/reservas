import { useLocation } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { Notificacion } from './Notificacion';
import { Bookings } from '../../api/Bookings';


export const Reserva = () => {

    const {state} = useLocation(); 
    let segment; 

    const onFinish = ({natureOfGoods, pieces, weight }) => {

        const reserva = {
            'agentAccountNumber': '00000001116',
            'airWaybill': {
                'prefix': "279",
                'referenceType': 'AIR WAYBILL'
            },
            'destinationAirportCode': segment.offload.code,
            'natureOfGoods': natureOfGoods,
            'originAirportCode': segment.onload.code,
            'pieces': pieces,
            'segments': [segment],
            'weight':{'amount':weight, 'unit': 'LB' }
        }
        
        crearReserva(reserva);
    };

    if(state !== null){        
         segment = state.segmentData.segment 
    }

    else{
        return <Notificacion />
    }

    const crearReserva = async (reserva) => {
        
        try {
            
            const respuesta = await Bookings.post('v2', reserva);

            if(respuesta.status == 200){
                console.log('creado correctamente')
                // return <NotificacionExito />
            }

        } catch (error) {
            console.log(error);
        }
    }
            
    return(
        <>            
            <Form
                name="horizontal"
                layout="inline"  
                labelCol={{
                span: 6,
                }}
                wrapperCol={{
                span: 11,
                }}
                style={{
                maxWidth: 1200,
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}                
                autoComplete="off"
            >

                <Form.Item
                    label="Origin"
                    name="Origin"                
                >
                    <Input 
                        type='text'
                        defaultValue={segment.onload.code}                    
                    />

                </Form.Item>

                <Form.Item
                    label="Dest"
                    name="Dest"                
                >

                <Input 
                    type='text'
                    defaultValue={segment.offload.code}   
                />
             
                </Form.Item>

                <Form.Item
                    label="Date"
                    name="Date"                
                >

                <Input 
                    type='text'
                    defaultValue={segment.transportMeans.date}   
                />

                </Form.Item>

                <Form.Item
                    label="OfGoods"
                    name="natureOfGoods"   
                    rules={[
                        {
                            required: true,
                            message: 'Please input',
                        },
                        {max: 3}
                    ]}
                    hasFeedback              
                >

                <Input 
                    type='text'
                    placeholder='nature of goods'               
                />

                </Form.Item>

                <Form.Item
                    label="pieces"
                    name="pieces"   
                    rules={[
                        {
                            required: true,
                            message: 'Please input',
                        },
                        {max: 3}
                    ]}
                    hasFeedback              
                >

                <Input 
                    type='number'
                    placeholder='pieces'               
                />

                </Form.Item>

                <Form.Item
                    label="weight"
                    name="weight"   
                    rules={[
                        {
                            required: true,
                            message: 'Please input',
                        },
                        {max: 6}
                    ]}
                    hasFeedback              
                >

                <Input 
                    type='number'
                    placeholder='weight'               
                />

                </Form.Item>
           
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>

                </Form.Item>
        </Form>
       </>
    )
}