import { useState } from "react";
import "./_categoriesBar.scss";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";

const keywords = [
  "All",
  "HTML",
  "CSS",
  "React js",
  "Tailwind",
  "Bootstrap",
  "use of API",
  "Coldplay",
  "Vespa",
  "Art",
];

const CategoriesBar = () => {
  const [activeKeyword, setActiveKeyword] = useState("All");

  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActiveKeyword(value);
    dispatch(getVideosByCategory(value));

    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, e) => (
        <span
          key={e}
          className={activeKeyword === value ? "active" : ""}
          onClick={() => handleClick(value)}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
