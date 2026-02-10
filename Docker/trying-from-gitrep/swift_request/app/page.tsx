import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOption } from "@/auth";

export default async function Home() {
  const session = await getServerSession(authOption);
  const role = session?.user.role;
  if (session) {
    if (role === "ADMIN") {
      redirect("/admin/dashboard");
    } else {
      redirect("/employee/dashboard");
    }
  } else {
    redirect("/login");
  }
}
