import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import RegisterExpense from "../../pages/RegisterExpense";

function PrivateRoutes() {
    
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/registerExpense" element={<RegisterExpense />} />
            <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
    )
}

export default PrivateRoutes;