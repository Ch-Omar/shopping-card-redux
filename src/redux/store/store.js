import { createStore } from 'redux'
import reducersroot from '../reducer/reducers'
const store= createStore(reducersroot,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store