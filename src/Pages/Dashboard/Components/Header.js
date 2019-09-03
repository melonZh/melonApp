import React from 'react';

import { withRouter } from "react-router";


import { 
  Layout,
  Avatar,
  Dropdown,
  Menu,
  Button,
} from 'antd'


import {
  isNil,
  flow,
  prop,
} from 'lodash/fp'

import Style from "./Layout.module.less";

const {
  Header
} = Layout




const HeaderWrapper = props => {
  const user = localStorage.getItem('user')
  const { history } = props
  console.log(props)
  const onLogout = () => {
    history.push('/login')
    localStorage.clear()
  }
  let userName = 'user'
  let menu = null
  const menuMappings = [{
    title: '退出登录',
    fucName: onLogout,
  }]
  
  const HeaderMenu = (
    <Menu>
      {
        menuMappings.map(({ title, fucName }, index) => (
          <Menu.Item key={index} onClick={fucName}>
            <Button type="link">{title}</Button>
          </Menu.Item>
        ))
      }
    </Menu>
  )
  if (!isNil(user)) {
    userName = flow(
      prop('user'),
      prop('userName')
    )(JSON.parse(localStorage.getItem('user')))
    menu = HeaderMenu
  }
  
 
 return (
  <Header className={Style.HeaderWrapper}>
    <div className={Style.UserLogo}>
      <Dropdown overlay={menu} >
        <Avatar size="large" style={{background: '#7265e6'}}>
          {userName}
        </Avatar>
      </Dropdown>
    </div>
  </Header>
 )
}





export default withRouter(HeaderWrapper)