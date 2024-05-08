import { auth } from "@/auth";
import { SignOut } from "@/app/components/signOut";
import UserInfo from "@/app/components/userInfo";

export default async function Dashboard() {
  const session = await auth();

  if (!session) return <p>unauthraise</p>;

  return (
    <>
      <h1>Dashboard</h1>
      <p>Protected content</p>
      <UserInfo />
      <SignOut />
    </>
  );
}
