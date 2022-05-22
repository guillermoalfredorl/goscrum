import { useNavigate } from "react-router-dom";
import "./Header.styles.css";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <header>
      <img src="/img/GoScrum.jpg" alt="Logo" />
      <div className="wrapper_right_header">
        <div>Pepe</div>
        <div onClick={handleLogout}>x</div>
      </div>
    </header>
  );
};
