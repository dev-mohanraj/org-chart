import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  buildEmployeeTree
} from "../../utils";
import OrgTreeComponent, { useTree } from "react-drag-hierarchy-tree";
import { TreeCard } from "./tree.card";
import "./override.css";

export const TreeView = ({ employees, selectedEmployee }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [chartData, setChartData] = useState({});
  const { treeRef } = useTree();

  useEffect(() => {
    setIsLoading(true);
    if (employees.length > 0) {
      let result = buildEmployeeTree(employees);
      setChartData(result || {});
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employees]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen gap-4">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        <div>Loading...</div>
      </div>
    );
  }

  const renderCard = (props) => {
    return <TreeCard selectedEmployee={selectedEmployee} {...props.data} />;
  };

  if (Object.keys(chartData).length > 0 && !isLoading) {
    return (
      <div className="treeViewWrapper">
        <OrgTreeComponent
          data={chartData}
          ref={treeRef}
          collapsable={false}
          renderCard={renderCard}
        />
      </div>
    );
  }
};

TreeView.propTypes = {
  employees: PropTypes.array,
  selectedEmployee: PropTypes.object,
};
