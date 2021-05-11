// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var testapis_echo_service_pb = require('../testapis/echo_service_pb.js');

function serialize_testapis_EchoRequest(arg) {
  if (!(arg instanceof testapis_echo_service_pb.EchoRequest)) {
    throw new Error('Expected argument of type testapis.EchoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_testapis_EchoRequest(buffer_arg) {
  return testapis_echo_service_pb.EchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_testapis_EchoResponse(arg) {
  if (!(arg instanceof testapis_echo_service_pb.EchoResponse)) {
    throw new Error('Expected argument of type testapis.EchoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_testapis_EchoResponse(buffer_arg) {
  return testapis_echo_service_pb.EchoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EchoServiceService = exports.EchoServiceService = {
  echo: {
    path: '/testapis.EchoService/Echo',
    requestStream: false,
    responseStream: false,
    requestType: testapis_echo_service_pb.EchoRequest,
    responseType: testapis_echo_service_pb.EchoResponse,
    requestSerialize: serialize_testapis_EchoRequest,
    requestDeserialize: deserialize_testapis_EchoRequest,
    responseSerialize: serialize_testapis_EchoResponse,
    responseDeserialize: deserialize_testapis_EchoResponse,
  },
};

exports.EchoServiceClient = grpc.makeGenericClientConstructor(EchoServiceService);
