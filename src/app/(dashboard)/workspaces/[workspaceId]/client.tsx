"use client";

import { useWorkspaceId } from "@/features/workspaces/hook/use-workspace-id";

export const WorkspaceIdClient = () => {
  const workspaceId = useWorkspaceId();

  return <div className="h-full flex flex-col space-y-4"></div>;
};
