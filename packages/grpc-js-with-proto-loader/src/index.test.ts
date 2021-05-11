import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as glob from "glob";
import * as path from "path";
import { createServer } from "./";
import { ProtoGrpcType } from "./__generated__/echo_service";
import { EchoResponse } from "./__generated__/testapis/EchoResponse";

const protos = glob.sync(path.join(__dirname, "..", "..", "..", "protos", "testapis", "*.proto"));
const pkgDef = protoLoader.loadSync(protos, {});
const pkgObj = (grpc.loadPackageDefinition(pkgDef) as unknown) as ProtoGrpcType;

it("requests successfully", async () => {
  const server = await createServer();
  server.start();

  const client = new pkgObj.testapis.EchoService(server.address, grpc.credentials.createInsecure());
  const res = await new Promise<EchoResponse>((resolve, reject) => {
    client.echo({ message: { body: "hello" } }, (err, res) => {
      if (err || res == null) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });

  expect(res.message?.body).toEqual("hello");

  await server.shutdown();
}, 5000);
