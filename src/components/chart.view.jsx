import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { buildEmployeeTree } from "../utils";
import OrgTreeComponent, { useTree } from "react-drag-hierarchy-tree";

export const ChartView = ({ employees }) => {
  const [chartData, setChartData] = useState({});
  const { treeRef } = useTree();

  useEffect(() => {
    if (employees.length > 0) {
      let result = buildEmployeeTree(employees)[0];
      setChartData(result);
    }
  }, [employees]);

  const data = {
    id: 1,
    label: "President",
    children: [
      {
        id: 2,
        label: "Administrative",
        children: [
          {
            id: 3,
            label: "Director",
            children: [],
          },
        ],
      },
      {
        id: 4,
        label: "Finances",
        children: [
          {
            id: 5,
            label: "Seller",
            children: [],
          },
        ],
      },
    ],
  };
  if (Object.keys(chartData).length > 0) {
    return (
      <div>
        <OrgTreeComponent data={chartData} ref={treeRef} collapsable={false} />
      </div>
    );
  }
};

ChartView.propTypes = {
  employees: PropTypes.array,
};
