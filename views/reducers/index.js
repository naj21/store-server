import {combineReducers} from 'redux';
import LenovoReducer from './lenovo';
import SamsungReducer from './samsung';
import CartLaptopsReducers from './cartLaptops';

const rootReducer = combineReducers({
	lenovo: LenovoReducer,
	samsung: SamsungReducer,
	cartLaptops: CartLaptopsReducers
}); 

export default rootReducer;