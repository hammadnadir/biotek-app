import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/rootSaga";
import combinedReducer from "../redux/rootReducer";

const CreateStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: combinedReducer(),
    middleware: [sagaMiddleware],
    devTools: window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

export default CreateStore;
