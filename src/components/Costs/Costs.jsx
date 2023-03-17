import { useState } from "react";
import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostsList from "./CostsList";
import CostDiagram from "../Diagram/CostsDiagram";

function Costs({ costs }) {
  const YEAR_VARIANTS = [2019, 2020, 2021, 2022, 2023];
  const [yearFilter, setYearFilter] = useState("all");

  const onChangeYearHandler = (year) => {
    setYearFilter(parseInt(year));
  };

  const yearPredicat = (cost) => {
    if (YEAR_VARIANTS.includes(yearFilter)) {
      return cost.costDate.getFullYear() === yearFilter;
    }
    return true;
  };

  const filtredCostsByYear = costs.filter((cost) => yearPredicat(cost));

  return (
    <div>
      <Card className="costs">
        <CostsFilter
          onChangeYear={onChangeYearHandler}
          yearVariants={YEAR_VARIANTS}
          year={yearFilter.toString()}
        />
        <CostDiagram costs={filtredCostsByYear} />
        <CostsList costs={filtredCostsByYear} yearFilter={yearFilter} />
      </Card>
    </div>
  );
}
export default Costs;
