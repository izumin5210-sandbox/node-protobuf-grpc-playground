import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as path from "path";
import * as glob from "glob";
import { promisify } from "util";
import { ProtoGrpcType } from "./__generated__/echo_service";
import { EchoServiceHandlers } from "./__generated__/testapis/EchoService";

const protos = glob.sync(path.join(__dirname, "..", "..", "..", "protos", "testapis", "*.proto"));
const pkgDef = protoLoader.loadSync(protos, {});
const pkgObj = (grpc.loadPackageDefinition(pkgDef) as unknown) as ProtoGrpcType;

export const createServer = async () => {
  const server = new grpc.Server();
  // @ts-expect-error https://github.com/grpc/grpc-node/issues/1766
  server.addService(pkgObj.testapis.EchoService.service, {
    Echo(call, callback) {
      callback(null, { message: call.request.message });
    },
  } as EchoServiceHandlers);
  const bindAsync = promisify(server.bindAsync).bind(server);
  const port = await bindAsync("127.0.0.1:0", grpc.ServerCredentials.createInsecure());
  return {
    address: `127.0.0.1:${port}`,
    start: server.start.bind(server),
    shutdown: promisify(server.tryShutdown).bind(server),
  };
};
