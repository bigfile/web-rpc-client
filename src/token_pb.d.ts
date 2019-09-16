import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Token extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getIp(): google_protobuf_wrappers_pb.StringValue | undefined;
  setIp(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasIp(): boolean;
  clearIp(): void;

  getAvailableTimes(): number;
  setAvailableTimes(value: number): void;

  getSecret(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSecret(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasSecret(): boolean;
  clearSecret(): void;

  getReadOnly(): boolean;
  setReadOnly(value: boolean): void;

  getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasExpiredAt(): boolean;
  clearExpiredAt(): void;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDeletedAt(): boolean;
  clearDeletedAt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    token: string,
    path: string,
    ip?: google_protobuf_wrappers_pb.StringValue.AsObject,
    availableTimes: number,
    secret?: google_protobuf_wrappers_pb.StringValue.AsObject,
    readOnly: boolean,
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

