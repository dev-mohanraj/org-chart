import { useEffect, useState } from "react";
import { Content } from "./pages/content";
import { Footer } from "./pages/footer";
import { Header } from "./pages/header";

function App() {
  const [employees, setEmployees] = useState([]);

  return (
    <div className={"h-screen flex flex-col justify-between overflow-hidden"}>
      <Header />
      <Content employees={employees} />
      <Footer />
    </div>
  );
}

export default App;
