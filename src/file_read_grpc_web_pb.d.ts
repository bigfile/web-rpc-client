import * as grpcWeb from 'grpc-web';

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

import {
  FileReadRequest,
  FileReadResponse} from './file_read_pb';

export class FileReadClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  fileRead(
    request: FileReadRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<FileReadResponse>;

}

export class FileReadPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  fileRead(
    request: FileReadRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<FileReadResponse>;

}

