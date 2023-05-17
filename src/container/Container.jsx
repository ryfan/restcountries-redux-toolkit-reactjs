import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { useRestCountries } from '../hooks';
import { ContentCountries } from '../components/ContentCountries';

const { Header, Content, Footer } = Layout;

export const Container = () => {
 const countries = useRestCountries();
 const [dataCountries, setdataCountries] = useState([]);
 useEffect(() => {
  countries.getAllCountries();
 }, []);

 useEffect(() => {
  const { list } = countries.state;
  setdataCountries(list);
 }, [countries.state.list]);

 useEffect(() => {
  return () => {
   countries.resetState();
   countries.resetStatus();
  };
 }, []);

 return (
  <Layout className="layout">
   <Header
    style={{
     display: 'flex',
     alignItems: 'center'
    }}
   >
    <h1 style={{ color: '#ffffff' }}>Redux Toolkit Rest Countries</h1>
   </Header>
   <Content
    style={{
     padding: '50px'
    }}
   >
    <div className="site-layout-content">
     <ContentCountries data={dataCountries} />
    </div>
   </Content>
   <Footer
    style={{
     textAlign: 'center'
    }}
   >
    Ant Design ©2023 Created by Ant UED
   </Footer>
  </Layout>
 );
};
