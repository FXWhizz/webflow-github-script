import * as env from "env";
//env.SOME_ENV_VARIABLE;

export async function Education(name) {
  console.log(`Serving from ${name}`);
  let api =
    env.ENVIROMENT === "DEVELOPMENT" ? env.LOCAL_GRAPHQL : env.URL_GRAPHQL;
}
