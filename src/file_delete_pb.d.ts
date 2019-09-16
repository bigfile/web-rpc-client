import * as jspb from "google-protobuf"

import * as file_pb from './file_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class FileDeleteRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getFileUid(): string;
  setFileUid(value: string): void;

  getForceDeleteIfDir(): boolean;
  setForceDeleteIfDir(value: boolean): void;

  getSecret(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSecret(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasSecret(): boolean;
  clearSecret(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileDeleteRequest): FileDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: FileDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDeleteRequest;
  static deserializeBinaryFromReader(message: FileDeleteRequest, reader: jspb.BinaryReader): FileDeleteRequest;
}

export namespace FileDeleteRequest {
  export type AsObject = {
    token: string,
    fileUid: string,
    forceDeleteIfDir: boolean,
    secret?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class FileDeleteResponse extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): void;

  getFile(): file_pb.File | undefined;
  setFile(value?: file_pb.File): void;
  hasFile(): boolean;
  clearFile(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileDeleteResponse): FileDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: FileDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDeleteResponse;
  static deserializeBinaryFromReader(message: FileDeleteResponse, reader: jspb.BinaryReader): FileDeleteResponse;
}

export namespace FileDeleteResponse {
  export type AsObject = {
    requestId: number,
    file?: file_pb.File.AsObject,
  }
}

