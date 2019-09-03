

import React from 'react';

import PropTypes from 'prop-types';

import {
  Form,
  Input,
  Button,
  Icon, 
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