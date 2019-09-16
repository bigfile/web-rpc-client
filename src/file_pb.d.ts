import * as jspb from "google-protobuf"

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class File extends jspb.Message {
  getUid(): string;
  setUid(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getIsDir(): boolean;
  setIsDir(value: boolean): void;

  getHidden(): boolean;
  setHidden(value: boolean): void;

  getHash(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHash(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasHash(): boolean;
  clearHash(): void;

  getExt(): google_protobuf_wrappers_pb.StringValue | undefined;
  setExt(value?: google_protobuf_wrappers_pb.StringValue): void;
  hasExt(): boolean;
  clearExt(): void;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasDeletedAt(): boolean;
  clearDeletedAt(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): File.AsObject;
  static toObject(includeInstance: boolean, msg: File): File.AsObject;
  static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): File;
  static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
  export type AsObject = {
    uid: string,
    path: string,
    size: number,
    isDir: boolean,
    hidden: boolean,
    hash?: google_protobuf_wrappers_pb.StringValue.AsObject,
    ext?: google_protobuf_wrappers_pb.StringValue.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

