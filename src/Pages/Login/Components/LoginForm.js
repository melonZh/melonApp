

import React, { useState } from 'react';

import PropTypes from 'prop-types';

import svgCaptcha  from 'svg-captcha'

import {
  Form,
  Input,
  Button,
  Icon,
  Row,
  Col, 
} from 'antd';

import Style from './LoginForm.module.less'


const NormalLoginForm = (props) => {
  const { getFieldDecorator } = props.form;
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const { form, onSubmit } = props
    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values)
      }
    });
  }


  return (
    <Form onSubmit={handleSubmit} className={Style.loginForm}>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item>
            {getFieldDecorator('userId', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input 
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="请输入用户名"
              />,
            )}
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="请输入密码"
              />,
            )}
          </Form.Item>
        </Col>
      </Row>
      {/* <Row gutter={16}>
        <Col span={16}>
          <Form.Item>
            {getFieldDecorator('code', {
              rules: [{ required: true, message: '请输入验证码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="请输入验证码"
              />,
            )}
          </Form.Item>
        </Col>
        <Col span={8}>

        </Col>
      </Row> */}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={Style.loginFormButton}
        >
          登陆
        </Button>
      </Form.Item>
    </Form>
  );
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

NormalLoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default LoginForm