import  {all} from "redux-saga/effects";
import {moviesSagas} from "./saga";

export default function* rootSaga(){
    yield all([...moviesSagas]);
}



