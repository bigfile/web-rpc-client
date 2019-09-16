import * as grpcWeb from 'grpc-web';

import * as file_pb from './file_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

import {
  FileUpdateRequest,
  FileUpdateResponse} from './file_update_pb';

export class FileUpdateClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  fileUpdate(
    request: FileUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: FileUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<FileUpdateResponse>;

}

export class FileUpdatePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  fileUpdate(
    request: FileUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<FileUpdateResponse>;

}

