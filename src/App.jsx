import { useEffect, useState } from "react";
import { Content } from "./pages/content";
import { Footer } from "./pages/footer";
import { Header } from "./pages/header";
import { EMPLOYEES_LIST } from "./mocks/userlist.js";

function App() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function init() {
    setIsLoading(true);
    setEmployees(EMPLOYEES_LIST);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen gap-4">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className={"h-screen flex flex-col justify-between overflow-hidden"}>
      <Header />
      <Content employees={employees} />
      <Footer />
    </div>
  );
}

export default App;
