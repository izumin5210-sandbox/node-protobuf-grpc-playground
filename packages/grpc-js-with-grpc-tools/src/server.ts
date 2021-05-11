import * as grpc from "@grpc/grpc-js";
import { EchoServiceService } from "./__generated__/testapis/echo_service_grpc_pb";
import { promisify } from "util";
import { EchoRequest, EchoResponse } from "./__generated__/testapis/echo_service_pb";

export const createServer = async () => {
  const server = new grpc.Server();
  server.addService(EchoServiceService, {
    echo(call: grpc.ServerUnaryCall<EchoRequest, EchoResponse>, callback: grpc.sendUnaryData<EchoRequest>) {
      const res = new EchoResponse().setMessage(call.request.getMessage());
      callback(null, res);
    },
  });
  const bindAsync = promisify(server.bindAsync).bind(server);
  const port = await bindAsync("127.0.0.1:0", grpc.ServerCredentials.createInsecure());
  return {
    address: `127.0.0.1:${port}`,
    start: server.start.bind(server),
    shutdown: promisify(server.tryShutdown).bind(server),
  };
};
