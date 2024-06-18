import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

function Routes() {
  return (
    <BrowserRouter>
      <PrivateRoutes />
    </BrowserRouter>
  );
}

export default Routes;
