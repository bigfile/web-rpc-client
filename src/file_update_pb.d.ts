import * as jspb from "google-protobuf"

import * as file_pb from './file_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class FileUpdateRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getFileUid(): string;
  setFileUid(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getSecret(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSecret(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasSecret(): boolean;
  clearSecret(): void;

  getHidden(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHidden(value?: google_protobuf_wrappers_pb.BoolValue): void;
  hasHidden(): boolean;
  clearHidden(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileUpdateRequest): FileUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: FileUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileUpdateRequest;
  static deserializeBinaryFromReader(message: FileUpdateRequest, reader: jspb.BinaryReader): FileUpdateRequest;
}

export namespace FileUpdateRequest {
  export type AsObject = {
    token: string,
    fileUid: string,
    path: string,
    secret?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hidden?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class FileUpdateResponse extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): void;

  getFile(): file_pb.File | undefined;
  setFile(value?: file_pb.File): void;
  hasFile(): boolean;
  clearFile(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileUpdateResponse): FileUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: FileUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileUpdateResponse;
  static deserializeBinaryFromReader(message: FileUpdateResponse, reader: jspb.BinaryReader): FileUpdateResponse;
}

export namespace FileUpdateResponse {
  export type AsObject = {
    requestId: number,
    file?: file_pb.File.AsObject,
  }
}

