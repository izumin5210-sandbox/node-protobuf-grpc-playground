// package: testapis
// file: testapis/echo_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Message extends jspb.Message {
  getBody(): string;
  setBody(value: string): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    body: string;
  };
}

export class EchoRequest extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): EchoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EchoRequest): EchoRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: EchoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoRequest;
  static deserializeBinaryFromReader(message: EchoRequest, reader: jspb.BinaryReader): EchoRequest;
}

export namespace EchoRequest {
  export type AsObject = {
    message?: Message.AsObject;
  };
}

export class EchoResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): EchoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EchoResponse): EchoResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
  static serializeBinaryToWriter(message: EchoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoResponse;
  static deserializeBinaryFromReader(message: EchoResponse, reader: jspb.BinaryReader): EchoResponse;
}

export namespace EchoResponse {
  export type AsObject = {
    message?: Message.AsObject;
  };
}
