/**
 * @fileoverview gRPC-Web generated client stub for bigfile.file_read
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.bigfile = {};
proto.bigfile.file_read = require('./file_read_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bigfile.file_read.FileReadClient =
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
proto.bigfile.file_read.FileReadPromiseClient =
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
 *   !proto.bigfile.file_read.FileReadRequest,
 *   !proto.bigfile.file_read.FileReadResponse>}
 */
const methodDescriptor_FileRead_fileRead = new grpc.web.MethodDescriptor(
  '/bigfile.file_read.FileRead/fileRead',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.bigfile.file_read.FileReadRequest,
  proto.bigfile.file_read.FileReadResponse,
  /** @param {!proto.bigfile.file_read.FileReadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.file_read.FileReadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bigfile.file_read.FileReadRequest,
 *   !proto.bigfile.file_read.FileReadResponse>}
 */
const methodInfo_FileRead_fileRead = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bigfile.file_read.FileReadResponse,
  /** @param {!proto.bigfile.file_read.FileReadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.file_read.FileReadResponse.deserializeBinary
);


/**
 * @param {!proto.bigfile.file_read.FileReadRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.bigfile.file_read.FileReadResponse>}
 *     The XHR Node Readable Stream
 */
proto.bigfile.file_read.FileReadClient.prototype.fileRead =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/bigfile.file_read.FileRead/fileRead',
      request,
      metadata || {},
      methodDescriptor_FileRead_fileRead);
};


/**
 * @param {!proto.bigfile.file_read.FileReadRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.bigfile.file_read.FileReadResponse>}
 *     The XHR Node Readable Stream
 */
proto.bigfile.file_read.FileReadPromiseClient.prototype.fileRead =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/bigfile.file_read.FileRead/fileRead',
      request,
      metadata || {},
      methodDescriptor_FileRead_fileRead);
};


module.exports = proto.bigfile.file_read;

