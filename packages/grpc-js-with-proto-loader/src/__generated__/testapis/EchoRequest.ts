// Original file: ../../protos/testapis/echo_service.proto

import type { Message as _testapis_Message, Message__Output as _testapis_Message__Output } from "../testapis/Message";

export interface EchoRequest {
  message?: _testapis_Message | null;
}

export interface EchoRequest__Output {
  message: _testapis_Message__Output | null;
}
