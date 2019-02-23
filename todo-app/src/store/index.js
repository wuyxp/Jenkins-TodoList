import { createStore } from 'redux'
import rootReducer from '../reducers'
const initStore = {
  todos: [{
    id: 1111111,
    title: '使用jenkins进行持续构建打包',
    createTime: 1550890987416,
    text: '添加的第一天测试数据添加的第一天测试数据添加的第一天测试数据添加的第一天测试数据',
    completed: true 
  }, {
    id: 2222222,
    title: '添加的第二天测试数据',
    createTime: 1550891087416,
    text: '添加的第二天测试数据添加的第二天测试数据添加的第二天测试数据添加的第二天测试数据添加的第二天测试数据',
    completed: true 
  }, {
    id: 3333333,
    title: '添加的第三天测试数据',
    createTime: 1550891987416,
    text: '添加的第三天测试数据添加的第三天测试数据添加的第三天测试数据添加的第三天测试数据添加的第三天测试数据添加的第三天测试数据',
    completed: false
  }, {
    id: 4444444,
    title: '添加的第四天测试数据',
    createTime: 1550892987416,
    text: '添加的第四天测试数据添加的第四天测试数据添加的第四天测试数据添加的第四天测试数据',
    completed: false
  }],
  visibilityFilter: 'SHOW_ALL'
}
const store = createStore(rootReducer, initStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store