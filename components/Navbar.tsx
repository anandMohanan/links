import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = ({ color }: any): any => {
  const router = useRouter();
  return (
    <nav
      className={`py-10 px-10  z-0 flex justify-between font-Source ${color}`}
    >
      <Link href={"/"}>
        <h1
          className={`cursor-pointer ${
            router.pathname == "/" ? "underline" : ""
          }  font-semibold font-Secular`}
        >
          {" "}
          Links
        </h1>
      </Link>
      <div className="flex items-center">
        <ul className="mr-4">
          <Link href={"/register"}>
            <li
              className={`cursor-pointer ${
                router.pathname == "/about" ? "underline" : ""
              } text-prim font-semibold`}
            >
              Register
            </li>
          </Link>
        </ul>
        <ul>
          <Link href={"/login"}>
            <li
              className={`cursor-pointer ${
                router.pathname == "/about" ? "underline" : ""
              } text-prim font-semibold`}
            >
              Login
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
