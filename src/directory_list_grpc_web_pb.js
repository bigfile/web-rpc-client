/**
 * @fileoverview gRPC-Web generated client stub for bigfile.directory_list
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
proto.bigfile.directory_list = require('./directory_list_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bigfile.directory_list.DirectoryListClient =
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
proto.bigfile.directory_list.DirectoryListPromiseClient =
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
 *   !proto.bigfile.directory_list.DirectoryListRequest,
 *   !proto.bigfile.directory_list.DirectoryListResponse>}
 */
const methodDescriptor_DirectoryList_directoryList = new grpc.web.MethodDescriptor(
  '/bigfile.directory_list.DirectoryList/directoryList',
  grpc.web.MethodType.UNARY,
  proto.bigfile.directory_list.DirectoryListRequest,
  proto.bigfile.directory_list.DirectoryListResponse,
  /** @param {!proto.bigfile.directory_list.DirectoryListRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.directory_list.DirectoryListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bigfile.directory_list.DirectoryListRequest,
 *   !proto.bigfile.directory_list.DirectoryListResponse>}
 */
const methodInfo_DirectoryList_directoryList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bigfile.directory_list.DirectoryListResponse,
  /** @param {!proto.bigfile.directory_list.DirectoryListRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.bigfile.directory_list.DirectoryListResponse.deserializeBinary
);


/**
 * @param {!proto.bigfile.directory_list.DirectoryListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bigfile.directory_list.DirectoryListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bigfile.directory_list.DirectoryListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bigfile.directory_list.DirectoryListClient.prototype.directoryList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bigfile.directory_list.DirectoryList/directoryList',
      request,
      metadata || {},
      methodDescriptor_DirectoryList_directoryList,
      callback);
};


/**
 * @param {!proto.bigfile.directory_list.DirectoryListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bigfile.directory_list.DirectoryListResponse>}
 *     A native promise that resolves to the response
 */
proto.bigfile.directory_list.DirectoryListPromiseClient.prototype.directoryList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bigfile.directory_list.DirectoryList/directoryList',
      request,
      metadata || {},
      methodDescriptor_DirectoryList_directoryList);
};


module.exports = proto.bigfile.directory_list;

