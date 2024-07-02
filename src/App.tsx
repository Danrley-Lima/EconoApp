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
    var dataStorage = localStorage.getItem("data");

    setSession(sessionJson);

    if (dataStorage == null){
      setAccounts(financialJson);
    } else {
      setAccounts(JSON.parse(dataStorage));
    }
  }, []);

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
