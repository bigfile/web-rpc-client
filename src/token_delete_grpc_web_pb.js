/**
 * @fileoverview gRPC-Web generated client stub for bigfile.token_delete
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var token_pb = require('./token_pb.js')
const proto = {};
proto.bigfile = {};
proto.bigfile.token_delete = require('./token_delete_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bigfile.token_delete.TokenDeleteClient =
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
proto.bigfile.token_delete.TokenDeletePromiseClient =
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
 *   !proto.bigfile.token_delete.TokenDeleteRequest,
 *   !proto.bigfile.token_delete.TokenDeleteResponse>}
 */
const methodDescriptor_TokenDelete_tokenDelete = new grpc.web.MethodDescriptor(
  '/bigfile.token_delete.TokenDelete/tokenDelete',
  grpc.web.MethodType.UNARY,
  proto.bigfile.token_delete.TokenDeleteRequest,
  proto.bigfile.token_delete.TokenDeleteResponse,
  /** @param {!proto.bigfile.token_delete.TokenDeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.token_delete.TokenDeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bigfile.token_delete.TokenDeleteRequest,
 *   !proto.bigfile.token_delete.TokenDeleteResponse>}
 */
const methodInfo_TokenDelete_tokenDelete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bigfile.token_delete.TokenDeleteResponse,
  /** @param {!proto.bigfile.token_delete.TokenDeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.token_delete.TokenDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.bigfile.token_delete.TokenDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bigfile.token_delete.TokenDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bigfile.token_delete.TokenDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bigfile.token_delete.TokenDeleteClient.prototype.tokenDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bigfile.token_delete.TokenDelete/tokenDelete',
      request,
      metadata || {},
      methodDescriptor_TokenDelete_tokenDelete,
      callback);
};


/**
 * @param {!proto.bigfile.token_delete.TokenDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bigfile.token_delete.TokenDeleteResponse>}
 *     A native promise that resolves to the response
 */
proto.bigfile.token_delete.TokenDeletePromiseClient.prototype.tokenDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bigfile.token_delete.TokenDelete/tokenDelete',
      request,
      metadata || {},
      methodDescriptor_TokenDelete_tokenDelete);
};


module.exports = proto.bigfile.token_delete;

