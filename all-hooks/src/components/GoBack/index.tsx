import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import "./styles.css";

export function GoBack() {
  return (
    <Link to="/" className="go-back">
      <ArrowLeft />
    </Link>
  );
}
