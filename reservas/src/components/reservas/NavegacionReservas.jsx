import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, RightSquareTwoTone, 
         VideoCameraOutlined} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Col } from 'antd';
import { ApiContext } from '../../context/ApiContext';
import { Formulario } from './formulario';


const { Header, Sider, Content } = Layout;

export const NavegacionReservas = () => {

  const [ auth, guardarAuth] = useContext(ApiContext);
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const salir = () => {  
    
    guardarAuth({
        token: '',
        auth: false
    })

    localStorage.clear()
    
    navigate('/');
  }

  return (
    <Layout>

      <Sider trigger={null} collapsible collapsed={collapsed}>

        <div className="demo-logo-vertical" />

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              label: <Link to="/formulario">New Bookings</Link>,
              key: '1',
              icon: <RightSquareTwoTone />,
            },
            {
              label: <Link to="/formulario/fligths">Booking</Link>,
              key: '2',
              icon: <VideoCameraOutlined />,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>

      <Layout>

        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

          <Button 
              type='primary' 
              danger  
              onClick={salir}
              style={{
                marginLeft: '85%'
              }}
            >                      
              Salir               
            </Button>

        </Header>

            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 490,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >

            <Formulario />              
              
          </Content>
      </Layout>
    </Layout>
  );
};
