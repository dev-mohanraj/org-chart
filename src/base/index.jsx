import { createServer } from "miragejs";
import { EMPLOYEES_LIST } from "../mocks/userlist";

export const BaseWrapper = ({ children }) => {
  createServer({
    routes() {
      this.get("/api/employees/list", () => {
        return EMPLOYEES_LIST;
      });
    },
  });
  return children;
};
