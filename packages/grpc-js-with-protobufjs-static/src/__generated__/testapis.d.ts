import * as $protobuf from "protobufjs";
/** Namespace testapis. */
export namespace testapis {

    /** Represents an EchoService */
    class EchoService extends $protobuf.rpc.Service {

        /**
         * Constructs a new EchoService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new EchoService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EchoService;

        /**
         * Calls Echo.
         * @param request EchoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EchoResponse
         */
        public echo(request: testapis.IEchoRequest, callback: testapis.EchoService.EchoCallback): void;

        /**
         * Calls Echo.
         * @param request EchoRequest message or plain object
         * @returns Promise
         */
        public echo(request: testapis.IEchoRequest): Promise<testapis.EchoResponse>;
    }

    namespace EchoService {

        /**
         * Callback as used by {@link testapis.EchoService#echo}.
         * @param error Error, if any
         * @param [response] EchoResponse
         */
        type EchoCallback = (error: (Error|null), response?: testapis.EchoResponse) => void;
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message body */
        body?: (string|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: testapis.IMessage);

        /** Message body. */
        public body: string;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: testapis.IMessage): testapis.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link testapis.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: testapis.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link testapis.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: testapis.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): testapis.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): testapis.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): testapis.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: testapis.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EchoRequest. */
    interface IEchoRequest {

        /** EchoRequest message */
        message?: (testapis.IMessage|null);
    }

    /** Represents an EchoRequest. */
    class EchoRequest implements IEchoRequest {

        /**
         * Constructs a new EchoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: testapis.IEchoRequest);

        /** EchoRequest message. */
        public message?: (testapis.IMessage|null);

        /**
         * Creates a new EchoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EchoRequest instance
         */
        public static create(properties?: testapis.IEchoRequest): testapis.EchoRequest;

        /**
         * Encodes the specified EchoRequest message. Does not implicitly {@link testapis.EchoRequest.verify|verify} messages.
         * @param message EchoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: testapis.IEchoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EchoRequest message, length delimited. Does not implicitly {@link testapis.EchoRequest.verify|verify} messages.
         * @param message EchoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: testapis.IEchoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EchoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EchoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): testapis.EchoRequest;

        /**
         * Decodes an EchoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EchoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): testapis.EchoRequest;

        /**
         * Verifies an EchoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EchoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EchoRequest
         */
        public static fromObject(object: { [k: string]: any }): testapis.EchoRequest;

        /**
         * Creates a plain object from an EchoRequest message. Also converts values to other types if specified.
         * @param message EchoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: testapis.EchoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EchoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EchoResponse. */
    interface IEchoResponse {

        /** EchoResponse message */
        message?: (testapis.IMessage|null);
    }

    /** Represents an EchoResponse. */
    class EchoResponse implements IEchoResponse {

        /**
         * Constructs a new EchoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: testapis.IEchoResponse);

        /** EchoResponse message. */
        public message?: (testapis.IMessage|null);

        /**
         * Creates a new EchoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EchoResponse instance
         */
        public static create(properties?: testapis.IEchoResponse): testapis.EchoResponse;

        /**
         * Encodes the specified EchoResponse message. Does not implicitly {@link testapis.EchoResponse.verify|verify} messages.
         * @param message EchoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: testapis.IEchoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EchoResponse message, length delimited. Does not implicitly {@link testapis.EchoResponse.verify|verify} messages.
         * @param message EchoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: testapis.IEchoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EchoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EchoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): testapis.EchoResponse;

        /**
         * Decodes an EchoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EchoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): testapis.EchoResponse;

        /**
         * Verifies an EchoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EchoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EchoResponse
         */
        public static fromObject(object: { [k: string]: any }): testapis.EchoResponse;

        /**
         * Creates a plain object from an EchoResponse message. Also converts values to other types if specified.
         * @param message EchoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: testapis.EchoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EchoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
