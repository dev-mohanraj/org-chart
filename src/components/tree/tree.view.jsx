import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { buildEmployeeTree } from "../../utils";
import OrgTreeComponent, { useTree } from "react-drag-hierarchy-tree";
import { TreeCard } from "./tree.card";
import "./override.css";

export const TreeView = ({ employees, selectedEmployee, team }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [chartData, setChartData] = useState({});
  const { treeRef } = useTree();
  const [zoomLevel, setZoomLevel] = useState(1); // State for zoom level

  useEffect(() => {
    setIsLoading(true);
    if (employees.length > 0) {
      let result = buildEmployeeTree(employees, team);
      setChartData(result || {});
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employees, team]);

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0.1) {
      setZoomLevel(zoomLevel - 0.1);
    }
  };

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

  if (chartData.length > 0 && !isLoading) {
    return (
      <div className="flex flex-col overflow-auto relative">
        <div className="treeViewWrapper flex flex-col overflow-hidden overflow-x-auto">
          <div style={{ transform: `scale(${zoomLevel})` }}>
            {chartData.map((item) => {
              return (
                <OrgTreeComponent
                  key={item.name}
                  data={item}
                  ref={treeRef}
                  collapsable={false}
                  renderCard={renderCard}
                />
              );
            })}
          </div>
        </div>
        <div className="flex gap-4 fixed bottom-20 right-10 items-center">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={handleZoomIn}
          >
            +
          </button>
          {Math.round(zoomLevel * 100)} %
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={handleZoomOut}
          >
            -
          </button>
        </div>
      </div>
    );
  }
};

TreeView.propTypes = {
  employees: PropTypes.array,
  selectedEmployee: PropTypes.object,
};
