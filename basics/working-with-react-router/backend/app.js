const express = require("express");
const morgan = require("morgan");
const jsonwebtoken = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());
// app.use(morgan("combined"));

app.use((req, res, next) => {
  console.log("a request 1");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS,PUT,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,Accept,Authorization,Credentials"
  );
  res.header("Access-Control-Allow-Credentials", true);

  next();
});

app.post("/custom-fetch/:authOperation", (req, res, next) => {
  console.log(`req.body: ${req.body.userFirstName}`);
  // console.log(`authOperation: ${req.params.authOperation}`);

  const cookies = JSON.stringify(req.cookies);
  const signedCookies = JSON.stringify(req.signedCookies);
  console.log(`cookies: ${cookies}`);
  console.log(`signedCookies: ${signedCookies}`);

  const message = "";
  const data = {};
  let authToken = "";

  // IF LOGIN, RETRIEVE JWT FROM HEADER (AUTHORIZATION) AND CONFIRM WHETHER OR NOT IT'S A VALID TOKEN & LOGIN
  if (req.params.authOperation === "login") {
    // check if JWT is valid & set authentication true or false

    let authTokenInHeaders = req.headers.authorization;
    let authToken = {};

    if (authTokenInHeaders) {
      authTokenInHeaders = authTokenInHeaders.split(" ")[1];

      try {
        authToken = jsonwebtoken.verify(authTokenInHeaders, "someTokenKey", {
          expiresIn: "1d",
          algorithm: "HS512",
        });
        Object.keys(authToken).forEach((value) => console.log(value));
      } catch (error) {
        return res
          .status(401)
          .json({ status: "error", message: "Unauthorized!" });
      }
    } else if (!authTokenInHeaders) {
      return res.status(401).json({
        status: "error",
        message: "Unauthorized! JWT not included in header",
      });
    }

    data.message = "Login Successful";
  }
  // IF SIGN UP
  else if (req.params.authOperation === "register") {
    // create a JWT, set authentication to true or false & forward JWT
    data.message = "Signup Successful";
    authToken = jsonwebtoken.sign(
      { id: "fasdofpasdfj123423" },
      "someTokenKey",
      {
        expiresIn: "1d",
        algorithm: "HS512",
      }
    );
    console.log(`authToken: ${authToken}`);
    data.authToken = authToken;
    data.userDetails = req.body;
  }

  // // Will always be true in this scenario
  // res.cookie("JWT", authToken, {
  //   expires: new Date(Date.now() + 86400000),
  //   httpOnly: true,
  //   secure: true,
  // });
  setTimeout(() => {
    return res
      .status(200)
      .cookie("Set-Cookie", authToken, {
        expires: new Date(Date.now() + 86400000),
        // httpOnly: true,
        // secure: true,
      })
      .json({
        status: "success",
        data: data,
      });
  }, 2000);
});

app.get("/custom-fetch", (req, res, next) => {
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
  }, 500);
});

app.get("/custom-fetch-fast", (req, res, next) => {
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
  }, 0);
});

app.get("/custom-fetch-params/:id", (req, res, next) => {
  const params = req.params;
  const query = req.query;
  res.status(200).json({
    status: "success",
    params,
    query,
  });
});

app.listen(8080, "127.0.0.1", () => {
  console.log("listening on port 8080");
});
