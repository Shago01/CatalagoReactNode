import { useState } from "react";
import Login from "./login";
import Dashboard from "./Dashboard";

function AppDashboard() {
  const [isLogin, setIslogin] = useState(false);

  if (!isLogin) return <Login setLogin={setIslogin} />;
  return <Dashboard setLogin={setIslogin} />;
}

export default AppDashboard;
