import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Root from "./components/Root/Root";
import LoginForm from "./components/Login/LoginForm";
import Confirm from "./components/Confirm";
import FirstTimeTOTP from "./components/FirstTimeTOTP";
import TOTPVerify from "./components/TOTPVerify";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/login" element={<LoginForm />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="firsttime" element={<FirstTimeTOTP/>}/>
      <Route path="otp" element={<TOTPVerify/>}/>
      <Route path="dashboard" element={<h1>Hello, you logged in</h1>}/>
    </Route>
  )
);

export default router;
