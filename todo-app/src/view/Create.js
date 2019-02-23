import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Input, message } from 'antd'

import {addTodo} from '../actions'
class CreateFrom extends Component {
  constructor(props){
    super(props)
    this.handleOk = this.handleOk.bind(this)
  }
  handleOk(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const todo = {
          createTime: new Date().getTime(),
          ...values
        }
        this.props.addTodo(todo)
        message.success('添加todo成功', .5, () => this.props.closeCreate())
      }
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        title="创建任务"
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.props.closeCreate}
      >
        <Form onSubmit={this.handleOk} className="login-form">
          <Form.Item
            label="项目名称："
          >
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入项目名称' }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            label="项目详情："
          >
            {getFieldDecorator('text', {
              rules: [{ required: true, message: '请输入项目详情' }],
            })(
              <Input.TextArea />
            )}
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
}) 
export default connect(null, mapDispatchToProps)(Form.create({ name: 'normal_login' })(CreateFrom));
