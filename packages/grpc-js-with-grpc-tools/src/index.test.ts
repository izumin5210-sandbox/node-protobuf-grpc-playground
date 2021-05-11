import * as grpc from "@grpc/grpc-js";
import { EchoServiceClient } from "./__generated__/testapis/echo_service_grpc_pb";
import { EchoRequest, EchoResponse, Message } from "./__generated__/testapis/echo_service_pb";
import { createServer } from "./";

it("requests successfully", async () => {
  const server = await createServer();
  server.start();

  const client = new EchoServiceClient(server.address, grpc.credentials.createInsecure(), {});
  const req = new EchoRequest().setMessage(new Message().setBody("hello"));
  const res = await new Promise<EchoResponse>((resolve, reject) => {
    client.echo(req, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  expect(res.getMessage()?.getBody()).toEqual("hello");

  await server.shutdown();
});
