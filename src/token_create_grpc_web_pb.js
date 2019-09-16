/**
 * @fileoverview gRPC-Web generated client stub for bigfile.token_create
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var token_pb = require('./token_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.bigfile = {};
proto.bigfile.token_create = require('./token_create_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bigfile.token_create.TokenCreateClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bigfile.token_create.TokenCreatePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bigfile.token_create.TokenCreateRequest,
 *   !proto.bigfile.token_create.TokenCreateResponse>}
 */
const methodDescriptor_TokenCreate_tokenCreate = new grpc.web.MethodDescriptor(
  '/bigfile.token_create.TokenCreate/tokenCreate',
  grpc.web.MethodType.UNARY,
  proto.bigfile.token_create.TokenCreateRequest,
  proto.bigfile.token_create.TokenCreateResponse,
  /** @param {!proto.bigfile.token_create.TokenCreateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.token_create.TokenCreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bigfile.token_create.TokenCreateRequest,
 *   !proto.bigfile.token_create.TokenCreateResponse>}
 */
const methodInfo_TokenCreate_tokenCreate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bigfile.token_create.TokenCreateResponse,
  /** @param {!proto.bigfile.token_create.TokenCreateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.token_create.TokenCreateResponse.deserializeBinary
);


/**
 * @param {!proto.bigfile.token_create.TokenCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bigfile.token_create.TokenCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bigfile.token_create.TokenCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bigfile.token_create.TokenCreateClient.prototype.tokenCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bigfile.token_create.TokenCreate/tokenCreate',
      request,
      metadata || {},
      methodDescriptor_TokenCreate_tokenCreate,
      callback);
};


/**
 * @param {!proto.bigfile.token_create.TokenCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bigfile.token_create.TokenCreateResponse>}
 *     A native promise that resolves to the response
 */
proto.bigfile.token_create.TokenCreatePromiseClient.prototype.tokenCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bigfile.token_create.TokenCreate/tokenCreate',
      request,
      metadata || {},
      methodDescriptor_TokenCreate_tokenCreate);
};


module.exports = proto.bigfile.token_create;

