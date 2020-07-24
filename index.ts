const polka = require("polka");
const send = require("@polka/send-type");

const server = polka().all("/", (_: any, response: any) => {
  console.log("OK");
  return send(response, 200, {
    text: "Okay, I'm triggering a build on Netlify 🚀",
  });
});

(server as any).listen(process.env.PORT ?? 3003, (error: any) => {
  if (error) console.log(error);
  console.log(`> Running on localhost:${process.env.PORT ?? 3003}`);
});
