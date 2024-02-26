import { HomeOutlined, LoginOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import {Link, Routes, Route, Navigate } from 'react-router-dom'
import { About, Contact, Home, PaginaInicio } from '../pages';
import { Formulario } from '../reservas/formulario';
const { Header } = Layout;

export const Navegacion = () => {

    // const [ auth, guardarAuth ] = useContext(ApiContext)
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
    
    return(
        
      <Layout className="layout">
                
          <Header
              style={{
              display: 'flex',
              alignItems: 'center',
              }}
          >
              <div className="demo-logo" />                    
                
                  <Menu
                      theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={['1']}
                      items= {items}
                  />    
          </Header>  

              <Routes>

                <Route path="/" Component={Home} />                    
                <Route path="/about" Component={About} />                    
                <Route path="/contact" Component={Contact} />                                                                                                
                <Route path="/reservas" Component={Formulario} />                                                                                                
                {/* <Route path="*" element={<Navigate to="/" replace />} /> */}

            </Routes>
      </Layout>
        
    )
}