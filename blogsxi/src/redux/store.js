import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./LoginReducer/loginReducer";
import registerReducer from "./RegisterReducer/registerReducer";
import dataReducer from "./DataReducer/dataReducer";


const rootReducer=combineReducers({
    loginReducer,
    registerReducer,
    dataReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));