/**
 * @fileoverview gRPC-Web generated client stub for bigfile.token_update
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
proto.bigfile.token_update = require('./token_update_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bigfile.token_update.TokenUpdateClient =
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
proto.bigfile.token_update.TokenUpdatePromiseClient =
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
 *   !proto.bigfile.token_update.TokenUpdateRequest,
 *   !proto.bigfile.token_update.TokenUpdateResponse>}
 */
const methodDescriptor_TokenUpdate_tokenUpdate = new grpc.web.MethodDescriptor(
  '/bigfile.token_update.TokenUpdate/tokenUpdate',
  grpc.web.MethodType.UNARY,
  proto.bigfile.token_update.TokenUpdateRequest,
  proto.bigfile.token_update.TokenUpdateResponse,
  /** @param {!proto.bigfile.token_update.TokenUpdateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.token_update.TokenUpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bigfile.token_update.TokenUpdateRequest,
 *   !proto.bigfile.token_update.TokenUpdateResponse>}
 */
const methodInfo_TokenUpdate_tokenUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bigfile.token_update.TokenUpdateResponse,
  /** @param {!proto.bigfile.token_update.TokenUpdateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.token_update.TokenUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.bigfile.token_update.TokenUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bigfile.token_update.TokenUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bigfile.token_update.TokenUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bigfile.token_update.TokenUpdateClient.prototype.tokenUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bigfile.token_update.TokenUpdate/tokenUpdate',
      request,
      metadata || {},
      methodDescriptor_TokenUpdate_tokenUpdate,
      callback);
};


/**
 * @param {!proto.bigfile.token_update.TokenUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bigfile.token_update.TokenUpdateResponse>}
 *     A native promise that resolves to the response
 */
proto.bigfile.token_update.TokenUpdatePromiseClient.prototype.tokenUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bigfile.token_update.TokenUpdate/tokenUpdate',
      request,
      metadata || {},
      methodDescriptor_TokenUpdate_tokenUpdate);
};


module.exports = proto.bigfile.token_update;

