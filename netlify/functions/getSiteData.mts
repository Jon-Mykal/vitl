import axios from "axios";
import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
//   let res = await axios.post("https://api.fygaro.com/api/v1/gatekeeper/sign-in", {
//     "email": "jul_virgin@yahoo.com",
//     "password": "gajae232003"
// });

let resV2 = await fetch("https://api.fygaro.com/api/v1/gatekeeper/sign-in", {
  method: "POST",
  body: JSON.stringify({
    email: "jul_virgin@yahoo.com",
    password: "gajae232003"
})
});
let dataV2 =  await resV2.json();

  console.log();
  return new Response("Hello, world!" + resV2.status);
}