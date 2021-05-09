import * as grpc from "@grpc/grpc-js";
import { EchoServiceClient, EchoServiceService } from "./__generated__/testapis/echo_service_grpc_pb";
import { promisify } from "util";
import { EchoRequest, EchoResponse, Message } from "./__generated__/testapis/echo_service_pb";

const createTestServer = async () => {
  const server = new grpc.Server();
  server.addService(EchoServiceService, {
    echo(call: grpc.ServerUnaryCall<EchoRequest, EchoResponse>, callback: grpc.sendUnaryData<EchoRequest>) {
      const res = new EchoResponse().setMessage(call.request.getMessage());
      callback(null, res);
    },
  });
  const bindAsync = promisify(server.bindAsync).bind(server);
  const port = await bindAsync("127.0.0.1:0", grpc.ServerCredentials.createInsecure());
  server.start();
  return {
    address: `127.0.0.1:${port}`,
    shutdown: promisify(server.tryShutdown).bind(server),
  };
};

it("requests successfully", async () => {
  const { address, shutdown } = await createTestServer();

  const client = new EchoServiceClient(address, grpc.credentials.createInsecure(), {});
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

  await shutdown();
});
