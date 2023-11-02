import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Root from "./components/Root/Root";
import LoginForm from "./components/Login/LoginForm";
import Confirm from "./components/Confirm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/login" element={<LoginForm />} />
      <Route path="/confirm" element={<Confirm />} />
    </Route>
  )
);

export default router;
