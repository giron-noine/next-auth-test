import { auth } from "@/auth";

export default async function UserInfo() {
  const session = await auth();

  if (!session) return <p>unauthraise</p>;

  return (
    <>
      <div>
        <p>USER E-mail</p>
        <span>{session.user?.email}</span>
        <p>USER ID</p>
        <span>{session.user?.id}</span>
      </div>
    </>
  );
}
