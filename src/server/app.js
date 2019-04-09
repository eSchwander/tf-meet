import awsConfig from "../../secrets/sercretConfig";

const koa = require("koa");
const app = new koa();

app.use(function*() {
  this.body = "Hello world!";
});

app.listen(3000, function() {
  console.log("Server running on https://localhost:3000");
});
