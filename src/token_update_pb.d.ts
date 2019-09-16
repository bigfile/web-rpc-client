import * as jspb from "google-protobuf"

import * as token_pb from './token_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class TokenUpdateRequest extends jspb.Message {
  getAppUid(): string;
  setAppUid(value: string): void;

  getAppSecret(): string;
  setAppSecret(value: string): void;

  getToken(): string;
  setToken(value: string): void;

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
  toObject(includeInstance?: boolean): TokenUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenUpdateRequest): TokenUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: TokenUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenUpdateRequest;
  static deserializeBinaryFromReader(message: TokenUpdateRequest, reader: jspb.BinaryReader): TokenUpdateRequest;
}

export namespace TokenUpdateRequest {
  export type AsObject = {
    appUid: string,
    appSecret: string,
    token: string,
    path?: google_protobuf_wrappers_pb.StringValue.AsObject,
    ip?: google_protobuf_wrappers_pb.StringValue.AsObject,
    secret?: google_protobuf_wrappers_pb.StringValue.AsObject,
    availableTimes?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    readOnly?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TokenUpdateResponse extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): void;

  getToken(): token_pb.Token | undefined;
  setToken(value?: token_pb.Token): void;
  hasToken(): boolean;
  clearToken(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenUpdateResponse): TokenUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: TokenUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenUpdateResponse;
  static deserializeBinaryFromReader(message: TokenUpdateResponse, reader: jspb.BinaryReader): TokenUpdateResponse;
}

export namespace TokenUpdateResponse {
  export type AsObject = {
    requestId: number,
    token?: token_pb.Token.AsObject,
  }
}

