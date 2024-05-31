import { useContext, useState } from 'react'
import { useNavigate, Link  } from 'react-router-dom';
import { Button,  Form, Input, Typography, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { ApiContext } from '../../context/ApiContext';
import { ApiLogin } from '../../api/login';
import { MsgError } from '../ui/MsgError';
import { Spinner } from '../ui/Spinner';


const { Title} = Typography

export const Login = () => {

  const [ auth, guardarAuth ] = useContext(ApiContext);
  const [showError, setShowError] = useState(false);

  const [btnEnviar, setBtnEnviar] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const navigate = useNavigate(); 
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async ({user, password}) => {
    
    try {
      
      setBtnEnviar(true);
      setShowSpinner(true);
      
      const respuesta = await ApiLogin.post('Authenticate/login', {
        username: user,
        password
      });

      const { sessionid, agents, username, changepassword } = respuesta.data;

      localStorage.setItem('token', sessionid);
      
      guardarAuth({
            token: sessionid,
            auth: true,
            agents,
            username,
      }); 
      
      setShowSpinner(false);
        
      navigate('/formulario');
      
    } catch (error) {     

      setShowError(true); 
      msgError();    
      
    }     
    
  };
  
  const msgError = () => {
      messageApi.open({
        type: 'error',
        content: 'Something Wrong'
    });
  }

  if(showSpinner){
    return <Spinner />
  }

    return(
      <>         
        <div className='contenedor_login'>

          <div className='hero'>

            <div className='logo'>
                <img  width='250' height='60' src={require('../ui/img/JetBlueCargo.png')} alt="JetBlue Cargo" />
            </div>

            <div className='login'>                

                {
                  (showError) && <MsgError msg={contextHolder}  />                     
                }

                <br />
                <br />
                <Form
                    name="basic"
                    labelCol={{
                      span: 6,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                  <Form.Item          
                      label={ <UserOutlined style={{fontSize: 20}} />}
                      name="user"               
                      rules={[
                        {
                          required: true,
                          message: 'Input username',
                        },
                      ]}
                  >
                  <Input  placeholder='Username' />
                 </Form.Item>

                <Form.Item
                    label={<LockOutlined style={{fontSize: 20}}/>}
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Input password',
                      },
                    ]}
                >
                  <Input.Password  placeholder='Password'/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                      offset: 10,
                      span: 8,
                    }}
                >
                  <Button 
                    type="primary" 
                    htmlType="submit"
                    style={{backgroundColor: '#1D2758', marginTop: '1rem', color: 'white'}}
                    disabled={btnEnviar}
                  >
                    Login
                  </Button>

                 </Form.Item>
              </Form> 

            </div>
              <div className='logo'>
                <span className='year'>{'© '} {new Date().getFullYear()} - </span>
                <strong className='year'style={{marginRight: 5}}>Powered By</strong> {''}               
                  <img  width='180' height='40' src={require('../ui/img/aeronexcargologo.png')} alt="Logo" />
              </div>
          </div>
        
        </div>
        
      </>
    )
}