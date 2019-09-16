/**
 * @fileoverview gRPC-Web generated client stub for bigfile.file_update
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var file_pb = require('./file_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.bigfile = {};
proto.bigfile.file_update = require('./file_update_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bigfile.file_update.FileUpdateClient =
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
proto.bigfile.file_update.FileUpdatePromiseClient =
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
 *   !proto.bigfile.file_update.FileUpdateRequest,
 *   !proto.bigfile.file_update.FileUpdateResponse>}
 */
const methodDescriptor_FileUpdate_fileUpdate = new grpc.web.MethodDescriptor(
  '/bigfile.file_update.FileUpdate/fileUpdate',
  grpc.web.MethodType.UNARY,
  proto.bigfile.file_update.FileUpdateRequest,
  proto.bigfile.file_update.FileUpdateResponse,
  /** @param {!proto.bigfile.file_update.FileUpdateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.file_update.FileUpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bigfile.file_update.FileUpdateRequest,
 *   !proto.bigfile.file_update.FileUpdateResponse>}
 */
const methodInfo_FileUpdate_fileUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bigfile.file_update.FileUpdateResponse,
  /** @param {!proto.bigfile.file_update.FileUpdateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.file_update.FileUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.bigfile.file_update.FileUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bigfile.file_update.FileUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bigfile.file_update.FileUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bigfile.file_update.FileUpdateClient.prototype.fileUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bigfile.file_update.FileUpdate/fileUpdate',
      request,
      metadata || {},
      methodDescriptor_FileUpdate_fileUpdate,
      callback);
};


/**
 * @param {!proto.bigfile.file_update.FileUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bigfile.file_update.FileUpdateResponse>}
 *     A native promise that resolves to the response
 */
proto.bigfile.file_update.FileUpdatePromiseClient.prototype.fileUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bigfile.file_update.FileUpdate/fileUpdate',
      request,
      metadata || {},
      methodDescriptor_FileUpdate_fileUpdate);
};


module.exports = proto.bigfile.file_update;

