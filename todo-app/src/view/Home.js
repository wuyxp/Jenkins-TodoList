import React, { Component } from 'react'
import { Layout, Button, Radio } from 'antd';
import { connect } from 'react-redux'
import List from '../component/List'
import { VisibilityFilters, setVisibilityFilter } from '../actions'
class Home extends Component{
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  getTodos(){
    return this.props.todos.filter(todo => {
      if(this.props.filter === VisibilityFilters.SHOW_ALL){
        return true
      }else{
        if(this.props.filter === VisibilityFilters.SHOW_COMPLETED){
          return todo.completed
        }else {
          return !todo.completed
        }
      }
    })
  }
  onChange(event){
    this.props.filterTodos(event.target.value)
  }
  render(){
    return (
      <Layout>
        <Layout.Header style={{ textAlign: 'center', color: '#fff' }}>
          TODO LIST
          <Button style={{ marginLeft: '20px'}} type="primary">添加</Button>
        </Layout.Header>
        <Radio.Group style={{ padding: '30px 50px'}} onChange={this.onChange} value={this.props.filter}>
          <Radio.Button value={VisibilityFilters.SHOW_ALL}>全部</Radio.Button>
          <Radio.Button value={VisibilityFilters.SHOW_COMPLETED}>已完成</Radio.Button>
          <Radio.Button value={VisibilityFilters.SHOW_ACTIVE}>未完成</Radio.Button>
        </Radio.Group>
        <Layout.Content style={{ padding: '0 50px'}}>
          <List data={this.getTodos()}/>
        </Layout.Content>
      </Layout>
    )
  }
}
const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.visibilityFilter
})
const mapDispatchToProps = (dispatch) => ({
  filterTodos: filter => dispatch(setVisibilityFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)