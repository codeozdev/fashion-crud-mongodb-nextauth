import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SignOut from "@/components/SignOut";

export default async function AccountPage() {
  const session = await getServerSession(options);

  return (
    <div>
      <h1>Account Page</h1>
      <p>{session?.user?.name}</p>
      <SignOut />
    </div>
  );
}
