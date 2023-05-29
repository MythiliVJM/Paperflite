import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga";
import MovieReducer from './features/movieSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const stroe= configureStore({
    reducer:{
        movie: MovieReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    
});
sagaMiddleware.run(rootSaga);
export default stroe;

