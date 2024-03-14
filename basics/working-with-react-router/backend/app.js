const express = require("express");

const app = express();

app.use(express.json());

app.get("/custom-fetch", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  setTimeout(() => {
    res.status(200).json({
      status: "success",
      userDetails: {
        userFirstName: "Dan",
        userLastName: "Oye",
        userEmail: "email@example.com",
        userOrganizationName: "OrganizationOne",
        userAddress: "AddressOne",
      },
    });
  }, 1000);
});

app.listen(8080, "127.0.0.1", () => {
  console.log("listening on port 8080");
});
