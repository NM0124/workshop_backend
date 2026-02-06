const app = require("./index.js");

app.listen(process.env.PORT_NO, () => {
  console.log("Server started on port no ", process.env.PORT_NO);
});