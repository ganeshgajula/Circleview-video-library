import { NavbarWithoutSearch } from "../../components";
import { Link } from "react-router-dom";
import heroImg from "../../assets/landing-image.jpg";
import "./Home.css";

export const Home = () => {
  return (
    <header
      className="hero"
      style={{ background: `url(${heroImg}) no-repeat top center/cover` }}
    >
      <NavbarWithoutSearch />
      <div className="content">
        <div className="hero-title">Investing is a long term game</div>
        <p className="hero-description">
          Master the art of personal finance & investing from the specially
          curated videos suitable for all levels.
        </p>
        <Link to="/explore">
          <button className="btn-primary btn-md">Get Started</button>
        </Link>
      </div>
    </header>
  );
};
