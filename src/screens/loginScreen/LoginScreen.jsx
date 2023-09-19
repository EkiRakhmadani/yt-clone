import "./_loginScreen.scss";
import Youtube_logo from "../../asset/youtube_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const history = useNavigate();

  useEffect(() => {
    if (accessToken) {
      history("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login_container">
        <img src={Youtube_logo} alt="" />
        <button onClick={handleLogin}>Login with Google</button>
        <p>This project was made by using Youtube Data API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
