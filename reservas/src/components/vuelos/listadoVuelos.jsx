import React, { useState } from 'react';
import { Collapse, Button} from 'antd';
import { Vuelos } from './vuelos';


export const ListadoVuelos = ({listado}) => {  
    
    console.log(listado)
    
    const [ vuelos, setvuelos ] = useState(listado)

    let items = []
    let segment = []
    
    vuelos.forEach( (vuelo, i) => {

        let objeto = {
            key:  '',
            label:  '',
            children:  ''
        }

        objeto.key = i
        segment = vuelo.segments
        
        segment.forEach( e => {
            objeto.label = <span style={{color: 'rgba(255,255,255,0.8)'}}> {e.onload.code}- {e.offload.code} </span>
            objeto.children = <p>
                
                    {e.transportMeans.scheduledDeparture} 
                    
                    <br />
                    
                    {e.transportMeans.scheduledArrival}
                    
                    <Button 
                        type="primary" 
                        size='small'
                        style={{
                            marginLeft: 630
                        }}
                    >
                        SELECT  
                    </Button>
                </p>
        })
        
        items.push(objeto)          
    
    })


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
            items={items} 
            defaultActiveKey={['1']} 
        />
    )
}

 