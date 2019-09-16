import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class FileReadRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getFileUid(): string;
  setFileUid(value: string): void;

  getSecret(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSecret(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasSecret(): boolean;
  clearSecret(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileReadRequest): FileReadRequest.AsObject;
  static serializeBinaryToWriter(message: FileReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileReadRequest;
  static deserializeBinaryFromReader(message: FileReadRequest, reader: jspb.BinaryReader): FileReadRequest;
}

export namespace FileReadRequest {
  export type AsObject = {
    token: string,
    fileUid: string,
    secret?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class FileReadResponse extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileReadResponse): FileReadResponse.AsObject;
  static serializeBinaryToWriter(message: FileReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileReadResponse;
  static deserializeBinaryFromReader(message: FileReadResponse, reader: jspb.BinaryReader): FileReadResponse;
}

export namespace FileReadResponse {
  export type AsObject = {
    content: Uint8Array | string,
  }
}

