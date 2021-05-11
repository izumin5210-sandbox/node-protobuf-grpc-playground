// package: testapis
// file: testapis/echo_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as testapis_echo_service_pb from "../testapis/echo_service_pb";

interface IEchoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    echo: IEchoServiceService_IEcho;
}

interface IEchoServiceService_IEcho extends grpc.MethodDefinition<testapis_echo_service_pb.EchoRequest, testapis_echo_service_pb.EchoResponse> {
    path: "/testapis.EchoService/Echo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<testapis_echo_service_pb.EchoRequest>;
    requestDeserialize: grpc.deserialize<testapis_echo_service_pb.EchoRequest>;
    responseSerialize: grpc.serialize<testapis_echo_service_pb.EchoResponse>;
    responseDeserialize: grpc.deserialize<testapis_echo_service_pb.EchoResponse>;
}

export const EchoServiceService: IEchoServiceService;

export interface IEchoServiceServer extends grpc.UntypedServiceImplementation {
    echo: grpc.handleUnaryCall<testapis_echo_service_pb.EchoRequest, testapis_echo_service_pb.EchoResponse>;
}

export interface IEchoServiceClient {
    echo(request: testapis_echo_service_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: testapis_echo_service_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    echo(request: testapis_echo_service_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: testapis_echo_service_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    echo(request: testapis_echo_service_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: testapis_echo_service_pb.EchoResponse) => void): grpc.ClientUnaryCall;
}

export class EchoServiceClient extends grpc.Client implements IEchoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public echo(request: testapis_echo_service_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: testapis_echo_service_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public echo(request: testapis_echo_service_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: testapis_echo_service_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public echo(request: testapis_echo_service_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: testapis_echo_service_pb.EchoResponse) => void): grpc.ClientUnaryCall;
}
