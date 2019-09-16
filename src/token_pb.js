// source: token.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.bigfile.token.Token', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bigfile.token.Token = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bigfile.token.Token, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bigfile.token.Token.displayName = 'proto.bigfile.token.Token';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bigfile.token.Token.prototype.toObject = function(opt_includeInstance) {
  return proto.bigfile.token.Token.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bigfile.token.Token} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bigfile.token.Token.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ip: (f = msg.getIp()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    availableTimes: jspb.Message.getFieldWithDefault(msg, 4, 0),
    secret: (f = msg.getSecret()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    readOnly: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    expiredAt: (f = msg.getExpiredAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    deletedAt: (f = msg.getDeletedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bigfile.token.Token}
 */
proto.bigfile.token.Token.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bigfile.token.Token;
  return proto.bigfile.token.Token.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bigfile.token.Token} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bigfile.token.Token}
 */
proto.bigfile.token.Token.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setIp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAvailableTimes(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadOnly(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiredAt(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeletedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bigfile.token.Token.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bigfile.token.Token.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bigfile.token.Token} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bigfile.token.Token.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAvailableTimes();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getReadOnly();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getExpiredAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeletedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.bigfile.token.Token.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.bigfile.token.Token.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.bigfile.token.Token.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.bigfile.token.Token.prototype.setPath = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue ip = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.bigfile.token.Token.prototype.getIp = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.bigfile.token.Token.prototype.setIp = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.bigfile.token.Token.prototype.clearIp = function() {
  this.setIp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bigfile.token.Token.prototype.hasIp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 available_times = 4;
 * @return {number}
 */
proto.bigfile.token.Token.prototype.getAvailableTimes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.bigfile.token.Token.prototype.setAvailableTimes = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.StringValue secret = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.bigfile.token.Token.prototype.getSecret = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.bigfile.token.Token.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.bigfile.token.Token.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bigfile.token.Token.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool read_only = 6;
 * @return {boolean}
 */
proto.bigfile.token.Token.prototype.getReadOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.bigfile.token.Token.prototype.setReadOnly = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp expired_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bigfile.token.Token.prototype.getExpiredAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.bigfile.token.Token.prototype.setExpiredAt = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.bigfile.token.Token.prototype.clearExpiredAt = function() {
  this.setExpiredAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bigfile.token.Token.prototype.hasExpiredAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp deleted_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bigfile.token.Token.prototype.getDeletedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.bigfile.token.Token.prototype.setDeletedAt = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.bigfile.token.Token.prototype.clearDeletedAt = function() {
  this.setDeletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bigfile.token.Token.prototype.hasDeletedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto.bigfile.token);
