import * as jspb from "google-protobuf"

import * as file_pb from './file_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

export class DirectoryListRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getSecret(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSecret(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasSecret(): boolean;
  clearSecret(): void;

  getSubDir(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSubDir(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasSubDir(): boolean;
  clearSubDir(): void;

  getSort(): DirectoryListRequest.Sort;
  setSort(value: DirectoryListRequest.Sort): void;

  getLimit(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setLimit(value?: google_protobuf_wrappers_pb.UInt32Value): void;
  hasLimit(): boolean;
  clearLimit(): void;

  getOffset(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setOffset(value?: google_protobuf_wrappers_pb.UInt32Value): void;
  hasOffset(): boolean;
  clearOffset(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectoryListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DirectoryListRequest): DirectoryListRequest.AsObject;
  static serializeBinaryToWriter(message: DirectoryListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectoryListRequest;
  static deserializeBinaryFromReader(message: DirectoryListRequest, reader: jspb.BinaryReader): DirectoryListRequest;
}

export namespace DirectoryListRequest {
  export type AsObject = {
    token: string,
    secret?: google_protobuf_wrappers_pb.StringValue.AsObject,
    subDir?: google_protobuf_wrappers_pb.StringValue.AsObject,
    sort: DirectoryListRequest.Sort,
    limit?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    offset?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
  }

  export enum Sort { 
    DESCTYPE = 0,
    ASCTYPE = 1,
    DESCNAME = 2,
    ASCNAME = 3,
    DESCTIME = 4,
    ASCDESC = 5,
  }
}

export class DirectoryListResponse extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  getPages(): number;
  setPages(value: number): void;

  getFilesList(): Array<file_pb.File>;
  setFilesList(value: Array<file_pb.File>): void;
  clearFilesList(): void;
  addFiles(value?: file_pb.File, index?: number): file_pb.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectoryListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DirectoryListResponse): DirectoryListResponse.AsObject;
  static serializeBinaryToWriter(message: DirectoryListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectoryListResponse;
  static deserializeBinaryFromReader(message: DirectoryListResponse, reader: jspb.BinaryReader): DirectoryListResponse;
}

export namespace DirectoryListResponse {
  export type AsObject = {
    requestId: number,
    total: number,
    pages: number,
    filesList: Array<file_pb.File.AsObject>,
  }
}

