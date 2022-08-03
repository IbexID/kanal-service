import { applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {dataReducer} from './reducers/dataReducer'



const rootReducer = combineReducers({
    userData: dataReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))