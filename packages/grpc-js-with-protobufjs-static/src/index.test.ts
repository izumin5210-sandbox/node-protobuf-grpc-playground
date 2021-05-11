import * as grpc from "@grpc/grpc-js";
import { testapis as testapisPb } from "./__generated__/testapis";
import { createServer } from "grpc-js-with-proto-loader";

it.skip("requests successfully", async () => {
  const server = await createServer();
  server.start();

  const Client = grpc.makeGenericClientConstructor({}, "");
  const client = new Client(server.address, grpc.credentials.createInsecure(), {});
  const echoClient = testapisPb.EchoService.create(
    (meth, req, cb) => {
      client.makeUnaryRequest(
        meth.name,
        (arg) => Buffer.from(arg),
        (arg) => arg,
        req,
        cb
      );
    },
    false,
    false
  );
  // it does not works
  const res = await echoClient.echo({ message: { body: "hello" } });

  expect(res.message?.body).toEqual("hello");

  await server.shutdown();
});
