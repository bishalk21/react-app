import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import UserContext from "../../context/UserContext";

// --------- RTK
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../reducers/userSlice";

const Login = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // const [userInfo, setUserInfo] = useState();
  // ---------- RTK
  const dispatch = useDispatch();

  // ---------- RTK
  const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    // api call - username and password
    const data = {
      name: userInfo,
    };
    dispatch(setUserInfo(data.name));
  }, []);

  // -------- USING CONTEXT
  // const { setUserInfo } = useContext(UserContext);

  const handleLogin = () => {
    // ------------ context
    // setUserInfo(userName)

    // -------rtk
    dispatch(setUserInfo(userName));
    navigate("/"); // Navigate to dashboard page
  };

  return (
    <div className="flex h-[75vh] items-center justify-center">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
