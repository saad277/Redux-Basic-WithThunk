


import namereducer from '../REDUX//namereducer'
import wishreducer from '../REDUX//wishreducer'


import {combineReducers} from 'redux'




const rootReducer=combineReducers({



name:namereducer,
wish:wishreducer



})


export default rootReducer;