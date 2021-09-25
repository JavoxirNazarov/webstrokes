import { withIronSession } from "next-iron-session";

export default function withSession(handler: any) {
  return withIronSession(handler, {
    password: "javascript",
    cookieName: "webstrokes/session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
  });
}
