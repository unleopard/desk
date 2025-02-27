// import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Application from "./Components/Layout/Application.tsx";
import Login from "./Components/Login/Login.tsx";
import ProtectedRoute from "./Components/App/ProtectedRoute.tsx";
import Logout from "./Components/Login/Logout.tsx";


function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/app" element={<Application/>}/>
                    <Route path="/app/dashboard" element={<Application/>}/>
                    <Route path="/app/leads" element={<Application/>}/>
                    <Route path="/app/customers" element={<Application/>}/>
                    <Route path="/app/analytics" element={<Application/>}/>
                    <Route path="/app/settings" element={<Application/>}/>
                    <Route path="/app/help" element={<Application/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App
