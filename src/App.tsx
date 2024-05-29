import { useEffect } from "react";

import financialJson from "../data/mockedFinancialData.json";
import sessionJson from "../data/mockedAccountData.json";

import { useFinancesStore } from "./context/FinancesStore";
import { useSessionStore } from "./context/SessionStore";
import Home from "./pages/Home";

function App() {

  const { setSession } = useSessionStore();

  const { setAccounts, accounts } = useFinancesStore();

  useEffect(() => {
    // Defina o estado inicial com os dados do JSON
    setSession(sessionJson);
    setAccounts(financialJson);
    console.log("Dados do estado:", accounts);
  }, []);

  return (
    <div className="font-DM-Sans">
      <Home/>
    </div>
  );
}

export default App;
