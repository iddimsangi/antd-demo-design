import React from 'react';
import {  Layout,Breadcrumb} from 'antd';
import './Home.css';
const {  Content, } = Layout;
function Home() {
    return (
    <div>
       <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
           width:1000,
            margin: 0,
            minHeight:'67vh',
            textAlign:'center'
          }}
        >
          <h1>WELCOME TO MY TODO APP</h1>
          <div className="inpt-dv">
            <input type="text" />
            <a href="#" className="ghost">Add</a>
          </div>
          
        </Content>
      </Layout>
        </div>
    )
}

export default Home
