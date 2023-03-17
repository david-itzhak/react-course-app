import "./CostDate.css";

function CostDate({ costDate }) {
  const month = costDate.toLocaleDateString("ru-RU", { month: "long" });
  const year = costDate.getFullYear();
  const day = costDate.toLocaleDateString("ru-RU", { day: "2-digit" });

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
}
export default CostDate;
