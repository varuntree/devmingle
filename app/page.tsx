import Image from "next/image";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <div className="flex flex-row justify-center items-center h-screen gap-4 rounded-lg p-33">
        <div className="bg-blue-500">
          <SignIn />
        </div>
        <div className="bg-red-500">
          <SignOut />
        </div>
      </div>
    </div>
  );
}