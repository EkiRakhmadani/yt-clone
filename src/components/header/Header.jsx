import "./_header.scss";
import Youtube_logo from "../../asset/youtube_logo.png";
import Avatar from "../../asset/avatar.png";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    history(`/search/${input}`);
  };

  const { photoURL } = useSelector((state) => state.auth?.user);

  return (
    <div className="header">
      <FaBars
        className="header_menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <Link to="/">
        <img src={Youtube_logo} alt="" className="header_logo" />
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header_icon">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={photoURL} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
