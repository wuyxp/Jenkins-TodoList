import React, { Component } from 'react'
import { Layout, Button } from 'antd';
import { connect } from 'react-redux'
import List from '../component/List'
class Home extends Component{
  render(){
    return (
      <Layout>
        <Layout.Header style={{ textAlign: 'center', color: '#fff' }}>
          TODO LIST
          <Button style={{ marginLeft: '20px'}} type="primary">添加</Button>
        </Layout.Header>
        <Layout.Content style={{ padding: '0 50px'}}>
          <List data={this.props.todos}/>
        </Layout.Content>
      </Layout>
    )
  }
}
const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(Home)