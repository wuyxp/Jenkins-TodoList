import React from 'react'
import { List, Avatar, Switch } from 'antd'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import dayjs from 'dayjs'
const ListTodos = (props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="../../public/logo.svg" />}
            title={
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <div>
                <h3>{item.title}</h3>
                <code>{dayjs(item.createTime).format('YYYY-MM-DD HH:mm:ss')}</code>
              </div>
              <div>
                <Switch checkedChildren="已完成" unCheckedChildren="未完成" checked={item.completed} onChange={props.toggleTodo.bind(this, item.id)} />
              </div>
            </div>}
            description={item.text}
          />
        </List.Item>
      )}
    />
  )
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
export default connect(null, mapDispatchToProps)(ListTodos)