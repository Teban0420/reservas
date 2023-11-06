import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Row, Col } from 'antd'
import { LogoutOutlined } from '@ant-design/icons' 

export const Formulario = () => {

    const [form] = Form.useForm();
    const [clientReady, setClientReady] = useState(false);
    const navigate = useNavigate()

    // To disable submit button at the beginning.
    useEffect(() => {

        setClientReady(true);
    
    }, []);

    const onFinish = (values) => {
        console.log('Finish:', values);
    };

    return (
        <>

          <Form 
                className='formulario__reservas'
                form={form} 
                name="horizontal_login" 
                layout="inline" 
                onFinish={onFinish} >
                    
                <Form.Item label="Origin"
                    name="origin"
                    rules={[
                    {
                        required: true,
                        message: 'Please input origin!',
                    },]}                
                
                >

                <Input  placeholder="Origin*" />

                </Form.Item>

                <Form.Item label="Destination"
                    name="destination"
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
                    disabled={
                    !clientReady ||
                    !form.isFieldsTouched(true) ||
                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                    }
            >
                Search
                </Button>
            )}
            </Form.Item>
        </Form>  
        </>
    )
}