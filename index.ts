const polka = require("polka");
const send = require("@polka/send-type");
import axios from "axios";

const server = polka().post("/", (_: any, response: any) => {
  console.log("Triggering Netlify build", new Date());
  axios
    .post(process.env.NETLIFY_WEBHOOK ?? "")
    .then(() =>
      send(response, 200, {
        text: "Okay, I'm triggering a build on Netlify 🚀",
      })
    )
    .catch((error) => {
      console.log(error);
      send(response, 200, {
        text: "I got an error in trying to deploy the site.",
      });
    });
});

(server as any).listen(process.env.PORT ?? 3003, (error: any) => {
  if (error) console.log(error);
  console.log(`> Running on localhost:${process.env.PORT ?? 3003}`);
});
