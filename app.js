import http from "http";

const app = http.createServer((req, res) => {
  res.write(200, { "Content-Type": "text/plain" });
  res.end();
});

app.listen(3000);
console.log("Server listening on port 3000");

app.on("request", async (req, res) => {
  const walleticon = await getWalleticon(req.body);
  res.write(200, { "Content-Type": "image/png" });
});
