import { useEffect, useState } from "react";
import { Content } from "./pages/content.jsx";
import { Footer } from "./pages/footer.jsx";
import { Header } from "./pages/header.jsx";

function App() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeList = async () => {
      try {
        const response = await fetch("/api/employees/list");
        if (!response.ok) {
          throw new Error("Failed to fetch employee list");
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employee list:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployeeList();
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
