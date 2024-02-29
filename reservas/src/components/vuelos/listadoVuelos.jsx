import React, { useMemo } from 'react';
import { Collapse} from 'antd';
// import { Vuelos } from './vuelos';
import { Spinner } from '../reservas/Spinner';
import { formatoVuelos } from './helpers/formatoVuelos';


export const ListadoVuelos = ({listado}) => {      
    
    const vuelos = useMemo( () => formatoVuelos(listado), [listado]);   
    
    if(!vuelos) {
        return <Spinner />
    } 
            
    return (

        <Collapse 
            size='small'
            style={{
                marginTop: 40,
                marginLeft: 10,
                marginBottom: 40,
                // backgroundColor: '#001527',
                backgroundColor: '#65B5C8',
                width: 900
            }}            
            items={vuelos} 
            defaultActiveKey={['1']} 
        />
    )
}

 