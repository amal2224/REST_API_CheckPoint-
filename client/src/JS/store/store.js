// redux = asynchrone
// au niveau de  redux async en va ajouter "applyMiddleware" --> pour utiliser cet midd qui est entre l'action et le reducer
import { createStore , applyMiddleware , compose} from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer ,composeEnhancer(applyMiddleware(thunk)));
export default store;