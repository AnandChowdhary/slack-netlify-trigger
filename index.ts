import polka from "polka";
const send = require("@polka/send-type");

const server = polka().all("/", (_, response) => {
  console.log("OK");
  return send(response, 200, {
    text: "Okay, I'm triggering a build on Netlify 🚀",
  });
});

(server as any).listen(3003, (error: any) => {
  if (error) console.log(error);
  console.log(`> Running on localhost:3003`);
});
