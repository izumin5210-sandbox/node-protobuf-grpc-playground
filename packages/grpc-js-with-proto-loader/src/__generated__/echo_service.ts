import type * as grpc from "@grpc/grpc-js";
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  EchoServiceClient as _testapis_EchoServiceClient,
  EchoServiceDefinition as _testapis_EchoServiceDefinition,
} from "./testapis/EchoService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  testapis: {
    EchoRequest: MessageTypeDefinition;
    EchoResponse: MessageTypeDefinition;
    EchoService: SubtypeConstructor<typeof grpc.Client, _testapis_EchoServiceClient> & {
      service: _testapis_EchoServiceDefinition;
    };
    Message: MessageTypeDefinition;
  };
}
