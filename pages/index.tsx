import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <Navbar color={"bg-black"} />
      <section className="">
        <h1 className="text-center text-9xl p-10 font-Secular text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-green-200 to-green-500">
          Links
        </h1>
      </section>
      <section className="bg-gradient-to-tr from-green-200 via-green-300 to-blue-500 p-16">
        <h2 className=" text-center text-amber-700  text-7xl font-Secular">
          A new way to share links.
        </h2>
        <h2 className="text-center text-7xl font-Secular text-indigo-700">
          A new way to share links.
        </h2>
        <h2 className="text-center text-7xl font-Secular text-fuchsia-400">
          A new way to share links.
        </h2>
        <h3 className="font-Secular mt-3 text-amber-400 text-4xl text-center">
          Wait no,linktree exits but.
        </h3>
      </section>
    </main>
  );
}
