import React from 'react';
import { List } from 'antd';

export const listadoVuelos = () => {

    return (
        <List
            itemLayout="horizontal"
            // dataSource={data}
            renderItem={(item, index) => (
        <List.Item>
            <List.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
        </List.Item>
    )}
  />
    )
}