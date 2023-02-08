import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              Sign-Out
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              Sign-In
            </Link>
          )}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
