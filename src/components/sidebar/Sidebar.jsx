import { useDispatch } from "react-redux";
import "./_sidebar.scss";
import {
  MdExitToApp,
  MdHistory,
  MdHome,
  MdLibraryBooks,
  MdSubscriptions,
  MdThumbUp,
} from "react-icons/md";
import { log_out } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(log_out());
  };
  return (
    <nav
      className={sidebar ? "sidebar active" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <li>
        <Link to="/">
          <MdHome size={23} />
          <span>Home</span>
        </Link>
      </li>

      <li>
        <Link to="/feed/subscriptions">
          <MdSubscriptions size={23} />
          <span>Subscribe</span>
        </Link>
      </li>

      <li>
        <MdThumbUp size={23} />
        <span>Likes</span>
      </li>

      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <hr />

      <li onClick={logOutHandler}>
        <MdExitToApp size={23} />
        <span>Logout</span>
      </li>

      <hr />
    </nav>
  );
};

export default Sidebar;
