import { useEffect, useState } from "react";
import { Content } from "./pages/content";
import { Footer } from "./pages/footer";
import { Header } from "./pages/header";
import { EMPLOYEES_LIST } from "./mocks/userlist.js";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(function init() {
    setEmployees(EMPLOYEES_LIST);
  }, []);

  return (
    <div className={"h-screen flex flex-col justify-between overflow-hidden"}>
      <Header />
      <Content employees={employees} />
      <Footer />
    </div>
  );
}

export default App;
