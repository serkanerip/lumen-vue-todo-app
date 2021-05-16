import todoStore from "./store/todo-store";
import todoRoutes from "./routes/todo-routes";
export const install = (routes, store) => {
  todoRoutes.forEach((route) => routes.push(route));
  store.modules.todo = todoStore;
};
