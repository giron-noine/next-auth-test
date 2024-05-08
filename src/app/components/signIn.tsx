import { signIn } from "../../auth";

export function SignIn() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("auth0", { redirectTo: "/dashboard" });
        }}
      >
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}
