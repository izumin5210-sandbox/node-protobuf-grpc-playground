// Original file: ../../protos/testapis/echo_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { EchoRequest as _testapis_EchoRequest, EchoRequest__Output as _testapis_EchoRequest__Output } from '../testapis/EchoRequest';
import type { EchoResponse as _testapis_EchoResponse, EchoResponse__Output as _testapis_EchoResponse__Output } from '../testapis/EchoResponse';

export interface EchoServiceClient extends grpc.Client {
  Echo(argument: _testapis_EchoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _testapis_EchoResponse__Output) => void): grpc.ClientUnaryCall;
  Echo(argument: _testapis_EchoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _testapis_EchoResponse__Output) => void): grpc.ClientUnaryCall;
  Echo(argument: _testapis_EchoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _testapis_EchoResponse__Output) => void): grpc.ClientUnaryCall;
  Echo(argument: _testapis_EchoRequest, callback: (error?: grpc.ServiceError, result?: _testapis_EchoResponse__Output) => void): grpc.ClientUnaryCall;
  echo(argument: _testapis_EchoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _testapis_EchoResponse__Output) => void): grpc.ClientUnaryCall;
  echo(argument: _testapis_EchoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _testapis_EchoResponse__Output) => void): grpc.ClientUnaryCall;
  echo(argument: _testapis_EchoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _testapis_EchoResponse__Output) => void): grpc.ClientUnaryCall;
  echo(argument: _testapis_EchoRequest, callback: (error?: grpc.ServiceError, result?: _testapis_EchoResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface EchoServiceHandlers extends grpc.UntypedServiceImplementation {
  Echo: grpc.handleUnaryCall<_testapis_EchoRequest__Output, _testapis_EchoResponse>;
  
}

export interface EchoServiceDefinition {
  Echo: MethodDefinition<_testapis_EchoRequest, _testapis_EchoResponse, _testapis_EchoRequest__Output, _testapis_EchoResponse__Output>
}
