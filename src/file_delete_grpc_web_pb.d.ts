import * as grpcWeb from 'grpc-web';

import * as file_pb from './file_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

import {
  FileDeleteRequest,
  FileDeleteResponse} from './file_delete_pb';

export class FileDeleteClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  fileDelete(
    request: FileDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: FileDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<FileDeleteResponse>;

}

export class FileDeletePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  fileDelete(
    request: FileDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<FileDeleteResponse>;

}

