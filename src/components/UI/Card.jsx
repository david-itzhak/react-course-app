import "./Card.css";

function Card({ className, children }) {
  const resultingClassNamesSet = "card " + className;
  return <div className={resultingClassNamesSet}>{children}</div>;
}
export default Card;
