import "./env";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import createSchema from "../schema";
import createSession from "../session";

// const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8000;

async function createServer() {
  try {
    await createSession();
    const app = express();

    // app.use(
    //   cors({
    //     origin: dev ? process.env.URL_APP : process.env.PRODUCTION_URL_APP,
    //     credentials: true,
    //   })
    // );

    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });

    app.use(cors());
    app.use(express.json());

    const schema = await createSchema();

    const apolloServer = new ApolloServer({
      schema,
      context: ({ req, res }) => ({ req, res }),
      introspection: true,
      playground: {
        settings: {
          "request.credentials": "include",
        },
      },
    });

    app.listen({ port }, () => {
      console.log(
        `Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
      );
    });
  } catch (err) {
    console.log(err);
  }
}

createServer();
