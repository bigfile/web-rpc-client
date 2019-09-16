import * as grpcWeb from 'grpc-web';

import * as file_pb from './file_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';

import {
  DirectoryListRequest,
  DirectoryListResponse} from './directory_list_pb';

export class DirectoryListClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  directoryList(
    request: DirectoryListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: DirectoryListResponse) => void
  ): grpcWeb.ClientReadableStream<DirectoryListResponse>;

}

export class DirectoryListPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  directoryList(
    request: DirectoryListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<DirectoryListResponse>;

}

