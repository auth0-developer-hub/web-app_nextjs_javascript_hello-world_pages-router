import { handleLogin } from "@auth0/nextjs-auth0";

export default async function signup(req, res) {
  await handleLogin(req, res, {
    authorizationParams: {
      prompt: "login",
      screen_hint: "signup",
    },
    returnTo: "/profile",
  });
}
