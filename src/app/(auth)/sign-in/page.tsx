import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { SignInCard } from "@/features/auth/components/sign-in-card";

async function SignInPage() {
  const user = await getCurrent();
  if (user) redirect("/");

  return <SignInCard />;
}

export default SignInPage;
