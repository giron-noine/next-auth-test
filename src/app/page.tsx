import Image from "next/image";
import styles from "./page.module.css";
import { SignIn } from "@/app/components/signIn";
import UserInfo from "@/app/components/userInfo";

export default function Home() {
  return (
    <>
      <h1>TOP</h1>
      <UserInfo />
      <SignIn />
    </>
  );
}
