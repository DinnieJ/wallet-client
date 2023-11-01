import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./components/Root/Root";
import LoginForm from "./components/Login/LoginForm";



const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
        <Route path="/login" element={<LoginForm/>}/>
    </Route>
))

export default router