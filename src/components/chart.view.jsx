import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { buildEmployeeTree } from "../utils";
import OrgTreeComponent, { useTree } from "react-drag-hierarchy-tree";

export const ChartView = ({ employees }) => {
  const [isCharting, setIsCharting] = useState(false);
  const [chartData, setChartData] = useState({});
  const { treeRef } = useTree();

  useEffect(() => {
    setIsCharting(true);
    if (employees.length > 0) {
      let result = buildEmployeeTree(employees)[0];
      setChartData(result || {});
    }
    setIsCharting(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employees]);

  if (isCharting) {
    return (
      <div className="flex items-center justify-center h-screen gap-4">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        <div>Loading...</div>
      </div>
    );
  }

  if (Object.keys(chartData).length > 0 && !isCharting) {
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
