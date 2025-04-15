import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/auth.action";
import React from "react";

const page = async () => {
  const user = await getCurrentUser();

  // Optional: handle missing user gracefully
  if (!user?.name) {
    return <p>Unable to load user info. Please sign in again.</p>;
  }

  return (
    <>
      <h3>Interview Generation</h3>
      <Agent
        userName={user.name}
        userId={user.id ?? undefined}
        type="generate"
      />
    </>
  );
};

export default page;
