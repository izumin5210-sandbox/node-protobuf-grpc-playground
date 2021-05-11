/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.testapis = (function() {

    /**
     * Namespace testapis.
     * @exports testapis
     * @namespace
     */
    var testapis = {};

    testapis.EchoService = (function() {

        /**
         * Constructs a new EchoService service.
         * @memberof testapis
         * @classdesc Represents an EchoService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function EchoService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (EchoService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = EchoService;

        /**
         * Creates new EchoService service using the specified rpc implementation.
         * @function create
         * @memberof testapis.EchoService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {EchoService} RPC service. Useful where requests and/or responses are streamed.
         */
        EchoService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link testapis.EchoService#echo}.
         * @memberof testapis.EchoService
         * @typedef EchoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {testapis.EchoResponse} [response] EchoResponse
         */

        /**
         * Calls Echo.
         * @function echo
         * @memberof testapis.EchoService
         * @instance
         * @param {testapis.IEchoRequest} request EchoRequest message or plain object
         * @param {testapis.EchoService.EchoCallback} callback Node-style callback called with the error, if any, and EchoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(EchoService.prototype.echo = function echo(request, callback) {
            return this.rpcCall(echo, $root.testapis.EchoRequest, $root.testapis.EchoResponse, request, callback);
        }, "name", { value: "Echo" });

        /**
         * Calls Echo.
         * @function echo
         * @memberof testapis.EchoService
         * @instance
         * @param {testapis.IEchoRequest} request EchoRequest message or plain object
         * @returns {Promise<testapis.EchoResponse>} Promise
         * @variation 2
         */

        return EchoService;
    })();

    testapis.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof testapis
         * @interface IMessage
         * @property {string|null} [body] Message body
         */

        /**
         * Constructs a new Message.
         * @memberof testapis
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {testapis.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message body.
         * @member {string} body
         * @memberof testapis.Message
         * @instance
         */
        Message.prototype.body = "";

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof testapis.Message
         * @static
         * @param {testapis.IMessage=} [properties] Properties to set
         * @returns {testapis.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link testapis.Message.verify|verify} messages.
         * @function encode
         * @memberof testapis.Message
         * @static
         * @param {testapis.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.body);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link testapis.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof testapis.Message
         * @static
         * @param {testapis.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof testapis.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {testapis.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.testapis.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.body = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof testapis.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {testapis.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof testapis.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!$util.isString(message.body))
                    return "body: string expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof testapis.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {testapis.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.testapis.Message)
                return object;
            var message = new $root.testapis.Message();
            if (object.body != null)
                message.body = String(object.body);
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof testapis.Message
         * @static
         * @param {testapis.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.body = "";
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof testapis.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    testapis.EchoRequest = (function() {

        /**
         * Properties of an EchoRequest.
         * @memberof testapis
         * @interface IEchoRequest
         * @property {testapis.IMessage|null} [message] EchoRequest message
         */

        /**
         * Constructs a new EchoRequest.
         * @memberof testapis
         * @classdesc Represents an EchoRequest.
         * @implements IEchoRequest
         * @constructor
         * @param {testapis.IEchoRequest=} [properties] Properties to set
         */
        function EchoRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EchoRequest message.
         * @member {testapis.IMessage|null|undefined} message
         * @memberof testapis.EchoRequest
         * @instance
         */
        EchoRequest.prototype.message = null;

        /**
         * Creates a new EchoRequest instance using the specified properties.
         * @function create
         * @memberof testapis.EchoRequest
         * @static
         * @param {testapis.IEchoRequest=} [properties] Properties to set
         * @returns {testapis.EchoRequest} EchoRequest instance
         */
        EchoRequest.create = function create(properties) {
            return new EchoRequest(properties);
        };

        /**
         * Encodes the specified EchoRequest message. Does not implicitly {@link testapis.EchoRequest.verify|verify} messages.
         * @function encode
         * @memberof testapis.EchoRequest
         * @static
         * @param {testapis.IEchoRequest} message EchoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EchoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                $root.testapis.Message.encode(message.message, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EchoRequest message, length delimited. Does not implicitly {@link testapis.EchoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof testapis.EchoRequest
         * @static
         * @param {testapis.IEchoRequest} message EchoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EchoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EchoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof testapis.EchoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {testapis.EchoRequest} EchoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EchoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.testapis.EchoRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = $root.testapis.Message.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EchoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof testapis.EchoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {testapis.EchoRequest} EchoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EchoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EchoRequest message.
         * @function verify
         * @memberof testapis.EchoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EchoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message")) {
                var error = $root.testapis.Message.verify(message.message);
                if (error)
                    return "message." + error;
            }
            return null;
        };

        /**
         * Creates an EchoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof testapis.EchoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {testapis.EchoRequest} EchoRequest
         */
        EchoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.testapis.EchoRequest)
                return object;
            var message = new $root.testapis.EchoRequest();
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".testapis.EchoRequest.message: object expected");
                message.message = $root.testapis.Message.fromObject(object.message);
            }
            return message;
        };

        /**
         * Creates a plain object from an EchoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof testapis.EchoRequest
         * @static
         * @param {testapis.EchoRequest} message EchoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EchoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = null;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.testapis.Message.toObject(message.message, options);
            return object;
        };

        /**
         * Converts this EchoRequest to JSON.
         * @function toJSON
         * @memberof testapis.EchoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EchoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EchoRequest;
    })();

    testapis.EchoResponse = (function() {

        /**
         * Properties of an EchoResponse.
         * @memberof testapis
         * @interface IEchoResponse
         * @property {testapis.IMessage|null} [message] EchoResponse message
         */

        /**
         * Constructs a new EchoResponse.
         * @memberof testapis
         * @classdesc Represents an EchoResponse.
         * @implements IEchoResponse
         * @constructor
         * @param {testapis.IEchoResponse=} [properties] Properties to set
         */
        function EchoResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EchoResponse message.
         * @member {testapis.IMessage|null|undefined} message
         * @memberof testapis.EchoResponse
         * @instance
         */
        EchoResponse.prototype.message = null;

        /**
         * Creates a new EchoResponse instance using the specified properties.
         * @function create
         * @memberof testapis.EchoResponse
         * @static
         * @param {testapis.IEchoResponse=} [properties] Properties to set
         * @returns {testapis.EchoResponse} EchoResponse instance
         */
        EchoResponse.create = function create(properties) {
            return new EchoResponse(properties);
        };

        /**
         * Encodes the specified EchoResponse message. Does not implicitly {@link testapis.EchoResponse.verify|verify} messages.
         * @function encode
         * @memberof testapis.EchoResponse
         * @static
         * @param {testapis.IEchoResponse} message EchoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EchoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                $root.testapis.Message.encode(message.message, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EchoResponse message, length delimited. Does not implicitly {@link testapis.EchoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof testapis.EchoResponse
         * @static
         * @param {testapis.IEchoResponse} message EchoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EchoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EchoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof testapis.EchoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {testapis.EchoResponse} EchoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EchoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.testapis.EchoResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = $root.testapis.Message.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EchoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof testapis.EchoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {testapis.EchoResponse} EchoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EchoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EchoResponse message.
         * @function verify
         * @memberof testapis.EchoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EchoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message")) {
                var error = $root.testapis.Message.verify(message.message);
                if (error)
                    return "message." + error;
            }
            return null;
        };

        /**
         * Creates an EchoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof testapis.EchoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {testapis.EchoResponse} EchoResponse
         */
        EchoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.testapis.EchoResponse)
                return object;
            var message = new $root.testapis.EchoResponse();
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".testapis.EchoResponse.message: object expected");
                message.message = $root.testapis.Message.fromObject(object.message);
            }
            return message;
        };

        /**
         * Creates a plain object from an EchoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof testapis.EchoResponse
         * @static
         * @param {testapis.EchoResponse} message EchoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EchoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.message = null;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.testapis.Message.toObject(message.message, options);
            return object;
        };

        /**
         * Converts this EchoResponse to JSON.
         * @function toJSON
         * @memberof testapis.EchoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EchoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EchoResponse;
    })();

    return testapis;
})();

module.exports = $root;
