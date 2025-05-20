import { NextRequest } from "next/server";
import { auth } from "./auth";

const protectedRoutes = ["/news", "/search"];

export const middleware = async (request: NextRequest) => {
  const session = await auth();
};
