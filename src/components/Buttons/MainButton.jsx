import "./MainButton.css";
const MainButton = ({ className, children }) => {
  return (
    <a href="#" className={`main-btn ${className || ""}`}>
      {children}
    </a>
  );
};

export default MainButton;
 