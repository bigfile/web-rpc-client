import * as jspb from "google-protobuf"

import * as file_pb from './file_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class FileCreateRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

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

  getOverwrite(): boolean;
  setOverwrite(value: boolean): void;

  getRename(): boolean;
  setRename(value: boolean): void;

  getAppend(): boolean;
  setAppend(value: boolean): void;

  getCreateDir(): boolean;
  setCreateDir(value: boolean): void;

  getNone(): boolean;
  setNone(value: boolean): void;

  getContent(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setContent(value?: google_protobuf_wrappers_pb.BytesValue): void;
  hasContent(): boolean;
  clearContent(): void;

  getOperationCase(): FileCreateRequest.OperationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileCreateRequest): FileCreateRequest.AsObject;
  static serializeBinaryToWriter(message: FileCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileCreateRequest;
  static deserializeBinaryFromReader(message: FileCreateRequest, reader: jspb.BinaryReader): FileCreateRequest;
}

export namespace FileCreateRequest {
  export type AsObject = {
    token: string,
    path: string,
    secret?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hidden?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    overwrite: boolean,
    rename: boolean,
    append: boolean,
    createDir: boolean,
    none: boolean,
    content?: google_protobuf_wrappers_pb.BytesValue.AsObject,
  }

  export enum OperationCase { 
    OPERATION_NOT_SET = 0,
    OVERWRITE = 7,
    RENAME = 8,
    APPEND = 9,
    CREATE_DIR = 10,
    NONE = 11,
  }
}

export class FileCreateResponse extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): void;

  getFile(): file_pb.File | undefined;
  setFile(value?: file_pb.File): void;
  hasFile(): boolean;
  clearFile(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileCreateResponse): FileCreateResponse.AsObject;
  static serializeBinaryToWriter(message: FileCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileCreateResponse;
  static deserializeBinaryFromReader(message: FileCreateResponse, reader: jspb.BinaryReader): FileCreateResponse;
}

export namespace FileCreateResponse {
  export type AsObject = {
    requestId: number,
    file?: file_pb.File.AsObject,
  }
}

