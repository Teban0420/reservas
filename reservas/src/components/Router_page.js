import React, { useContext } from 'react'
import { HomeOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import { About } from './About';
import { Contact } from './Contact';
import { Login } from './auth/Login';
import { ApiContext } from '../context/ApiContext';
import { Reservas } from './reservas/reservas';
import { Home } from './home/Home';
const { Header } = Layout;

export const Router_page = () => {

    const [ auth, guardarAuth ] = useContext(ApiContext)
    // const navigate = useNavigate()

    const {
        token: { colorBgContainer },
      } = theme.useToken();

    const items = [
      {
        label: <Link to="/">Home</Link>,
        key: 1,
        icon: <HomeOutlined />
      },
      {
        label: <Link to="/about">About</Link>,
        key: 2
      },
      {
        label: <Link to="/contact">Contact</Link>,
        key: 3
      },
      {
        label: <Link to="/login">Login</Link>,
        key: 4,
        icon: <LoginOutlined />
      }
      
    ];

      const items2 = [
      {
        label: <Link to="/">Home</Link>,
        key: 1,
        icon: <HomeOutlined />
      },
      {
        label: <Link to="/about">About</Link>,
        key: 2
      },
      {
        label: <Link to="/contact">Contact</Link>,
        key: 3
      },
      {
        label: <Link to="/reservas">Reservas</Link>,
        key: 5
      }
      
    ];
    
    return(
        <Router>
            <Layout className="layout">
                
                <Header
                    style={{
                    display: 'flex',
                    alignItems: 'center',
                    }}
                >
                    <div className="demo-logo" />

                    {
                      !auth.auth ?
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            items= {items}
                        />
                      : <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        items= {items2}
                        />
                    }
                       
                </Header>  

                  <Routes>

                    <Route path="/" Component={Home} />                    
                    <Route path="/about" Component={About} />                    
                    <Route path="/contact" Component={Contact} />                    
                    <Route path="/login" Component={Login} />                                       
                    <Route path="/reservas" Component={Reservas} />                                       
                    <Route path="*" element={<Navigate to="/" replace />} />

                </Routes>
            </Layout>
        </Router>
    )
}