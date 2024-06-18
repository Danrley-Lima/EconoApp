import { useEffect, useState } from "react";

import sessionJson from "../data/mockedAccountData.json";
import financialJson from "../data/mockedFinancialData.json";

import Loading from "./components/Loading";
import { useFinancesStore } from "./context/FinancesStore";
import { useSessionStore } from "./context/SessionStore";
import Routes from "./routes";

function App() {
  const [init, setInit] = useState<boolean>(false);

  const { setSession, session } = useSessionStore();

  const { setAccounts, accounts } = useFinancesStore();

  useEffect(() => {
    // Defina o estado inicial com os dados do JSON
    setSession(sessionJson);
    setAccounts(financialJson);
    console.log("Dados do estado:", accounts);
  }, [accounts, setAccounts, setSession]);

  useEffect(() => {
    if (session && accounts.length > 0)
      setTimeout(() => {
        setInit(true);
      }, 2000);
  }, [session, accounts]);

  if (!init) return <Loading />;

  return (
    <div className="font-DM-Sans">
      <Routes />
    </div>
  );
}

export default App;
