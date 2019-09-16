/**
 * @fileoverview gRPC-Web generated client stub for bigfile.file_delete
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
proto.bigfile.file_delete = require('./file_delete_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bigfile.file_delete.FileDeleteClient =
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
proto.bigfile.file_delete.FileDeletePromiseClient =
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
 *   !proto.bigfile.file_delete.FileDeleteRequest,
 *   !proto.bigfile.file_delete.FileDeleteResponse>}
 */
const methodDescriptor_FileDelete_fileDelete = new grpc.web.MethodDescriptor(
  '/bigfile.file_delete.FileDelete/fileDelete',
  grpc.web.MethodType.UNARY,
  proto.bigfile.file_delete.FileDeleteRequest,
  proto.bigfile.file_delete.FileDeleteResponse,
  /** @param {!proto.bigfile.file_delete.FileDeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.file_delete.FileDeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bigfile.file_delete.FileDeleteRequest,
 *   !proto.bigfile.file_delete.FileDeleteResponse>}
 */
const methodInfo_FileDelete_fileDelete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bigfile.file_delete.FileDeleteResponse,
  /** @param {!proto.bigfile.file_delete.FileDeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.file_delete.FileDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.bigfile.file_delete.FileDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bigfile.file_delete.FileDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bigfile.file_delete.FileDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bigfile.file_delete.FileDeleteClient.prototype.fileDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bigfile.file_delete.FileDelete/fileDelete',
      request,
      metadata || {},
      methodDescriptor_FileDelete_fileDelete,
      callback);
};


/**
 * @param {!proto.bigfile.file_delete.FileDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bigfile.file_delete.FileDeleteResponse>}
 *     A native promise that resolves to the response
 */
proto.bigfile.file_delete.FileDeletePromiseClient.prototype.fileDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bigfile.file_delete.FileDelete/fileDelete',
      request,
      metadata || {},
      methodDescriptor_FileDelete_fileDelete);
};


module.exports = proto.bigfile.file_delete;

