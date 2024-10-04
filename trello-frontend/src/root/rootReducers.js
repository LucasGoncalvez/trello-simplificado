import { createRouterReducer } from "@lagunovsky/redux-react-router";
import { tableroReducer } from "../modules/tablero/handlers/redux";
import { authReducer } from "../modules/auth/handlers/redux";

export const rootReducers = (history) => ({
  router: createRouterReducer(history),
  tablero: tableroReducer,
  auth: authReducer,
});
