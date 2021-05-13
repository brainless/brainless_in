import { Application, Context } from "./deps.ts";

const app = new Application();

app.use((ctx: Context) => {
  ctx.response.body = "Hello world!";
});

console.log("tinyRobots server is running at http://localhost:8000");
console.log(import.meta.url);

addEventListener("fetch", app.fetchEventHandler());
