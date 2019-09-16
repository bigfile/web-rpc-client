import * as jspb from "google-protobuf"

import * as token_pb from './token_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class TokenCreateRequest extends jspb.Message {
  getAppUid(): string;
  setAppUid(value: string): void;

  getAppSecret(): string;
  setAppSecret(value: string): void;

  getPath(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPath(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasPath(): boolean;
  clearPath(): void;

  getIp(): google_protobuf_wrappers_pb.StringValue | undefined;
  setIp(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasIp(): boolean;
  clearIp(): void;

  getSecret(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSecret(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasSecret(): boolean;
  clearSecret(): void;

  getAvailableTimes(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setAvailableTimes(value?: google_protobuf_wrappers_pb.UInt32Value): void;
  hasAvailableTimes(): boolean;
  clearAvailableTimes(): void;

  getReadOnly(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setReadOnly(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasReadOnly(): boolean;
  clearReadOnly(): void;

  getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasExpiredAt(): boolean;
  clearExpiredAt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenCreateRequest): TokenCreateRequest.AsObject;
  static serializeBinaryToWriter(message: TokenCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenCreateRequest;
  static deserializeBinaryFromReader(message: TokenCreateRequest, reader: jspb.BinaryReader): TokenCreateRequest;
}

export namespace TokenCreateRequest {
  export type AsObject = {
    appUid: string,
    appSecret: string,
    path?: google_protobuf_wrappers_pb.StringValue.AsObject,
    ip?: google_protobuf_wrappers_pb.StringValue.AsObject,
    secret?: google_protobuf_wrappers_pb.StringValue.AsObject,
    availableTimes?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    readOnly?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TokenCreateResponse extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): void;

  getToken(): token_pb.Token | undefined;
  setToken(value?: token_pb.Token): void;
  hasToken(): boolean;
  clearToken(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenCreateResponse): TokenCreateResponse.AsObject;
  static serializeBinaryToWriter(message: TokenCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenCreateResponse;
  static deserializeBinaryFromReader(message: TokenCreateResponse, reader: jspb.BinaryReader): TokenCreateResponse;
}

export namespace TokenCreateResponse {
  export type AsObject = {
    requestId: number,
    token?: token_pb.Token.AsObject,
  }
}

