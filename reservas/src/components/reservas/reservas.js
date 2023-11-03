import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, Row, Col } from 'antd'
import { LogoutOutlined } from '@ant-design/icons' 
import { ApiContext } from '../../context/ApiContext'


export const Reservas = () => {

  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);
  const navigate = useNavigate()

  // uso el context
  const [ auth, guardarAuth ] = useContext(ApiContext)

  // To disable submit button at the beginning.
  useEffect(() => {

    setClientReady(true);
    
  }, []);

  useEffect( () => {

        if(auth.token === ''){

            navigate('/')
        }
  })

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  const salir = () => {  
    
    guardarAuth({
        token: '',
        auth: false
    })

    localStorage.clear()
    
    navigate('/')
  }

    return(
        <>
            <Row className='salir'>
                <Col span={23} align="right">
                    <Button type='primary' danger onClick={salir}>
                        <LogoutOutlined />
                        Salir               
                    </Button>
                </Col>
            </Row>

            <Form 
                className='formulario__reservas'
                form={form} 
                name="horizontal_login" 
                layout="inline" 
                onFinish={onFinish} >
                    
            <Form.Item
                name="origin"
                rules={[
                {
                    required: true,
                    message: 'Please input origin!',
                },]}                
               
            >

            <Input  placeholder="Origin" />
            </Form.Item>

            <Form.Item
                name="dest"
                rules={[
                {
                    required: true,
                    message: 'Please input dest!',
                },]}
                
                // wrapperCol={{
                //     span: 12,
                // }}
            >

            <Input
            type="text"
            placeholder="Dest"
            />

            </Form.Item>

            <Form.Item
                name="fecha"
                rules={[
                    {
                        required: true,
                        message: 'Please input Date!'
                    }
                ]}
            >
        
            <Input
                type='date'
            />

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
        
    
