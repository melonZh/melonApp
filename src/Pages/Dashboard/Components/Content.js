import React from 'react';

import { 
  Layout,
  Typography,
} from 'antd'

import {
  Route,
  Switch,
} from "react-router-dom";





const {
  Content
} = Layout
const { Title } = Typography


const Home = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '15rem' }}>
        <Title>欢迎使用！！！</Title>
      </div>
    </div>
  )
}

const ContentWrapper = props => {
  
 return (
  <Content>
    <Switch>
      <Route path={"/"} exact component={Home} />
      
    </Switch>
  </Content>
 )
}






export default ContentWrapper