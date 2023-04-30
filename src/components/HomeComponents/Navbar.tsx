import blogsIcon from "../../assets/iconsHome1.svg";
import { Link } from "react-router-dom";
function Navbar() {
  const isLoggedIn = () => {
    const token = localStorage.getItem("secret_token");
    return token !== null;
  };
  const logout = async () => {
    localStorage.removeItem("secret_token");
  };
  return (
    <div className="w-full flex items-center justify-between flex-column font-semibold pt-8 pb-8 tracking-wider pl-36 pr-36">
      <ul className="flex flex-row gap-4 items-center text-3xl  text-[#56538b] font-bold">
        <img src={blogsIcon} alt="" className=" w-16 h-16 " />
        <p>Blogs</p>
      </ul>
      <ul className="flex text-xl flex-row gap-4 items-center ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <ul className="flex text-xl flex-row gap-4 items-center ">
        {isLoggedIn() ? (
          <li>
            <Link to="/">
              <p onClick={logout}>Logout</p>
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
