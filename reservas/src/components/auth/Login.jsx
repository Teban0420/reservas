import { useContext } from 'react'
import { Button,  Form, Input, Typography } from 'antd';
import { ApiContext } from '../../context/ApiContext';
import { useNavigate  } from 'react-router-dom';
const { Title} = Typography


export const Login = () => {

  const [ auth, guardarAuth ] = useContext(ApiContext)

  const navigate = useNavigate()

  // const [ credenciales, guardarCredenciales ] = useState({})

  const onFinish = ({username, password}) => {

    // hacer peticion fecth para login

    // try {
      
    // } catch (error) {
      
    // }
    
    localStorage.setItem('token', 'ABUKSIU35698751236')
    guardarAuth({
        token: 'ABUKSIU35698751236',
        auth: true
    })

    navigate('/reservas')
    
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const volver = () => {
      navigate('/');
  }

    return(
      <>
      <div
          className="formulario"          
        >
        <Title level={2} >Iniciar Sesión</Title> 
          
          <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 12,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
          >
          <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
          >
        <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
        >
      <Input.Password />
      </Form.Item>

      <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
      >

        <Button 
          type="primary" 
          htmlType="submit"
        >
          Submit
        </Button>

      </Form.Item>
    </Form> 

      <Button 
          type="primary" 
          danger htmlType="submit"
          onClick={volver}
      >
        Volver
      </Button>
    
    </div>
      </>
    )
}