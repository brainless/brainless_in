import { Application, Context } from "./deps.ts";

const app = new Application();

app.use((ctx: Context) => {
  ctx.response.body = "Hello world!";
});

console.log("tinyRobots server is running at http://localhost:8000");
console.log(import.meta.url);

await app.listen("127.0.0.1:8000");
