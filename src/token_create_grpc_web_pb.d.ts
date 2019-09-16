import * as grpcWeb from 'grpc-web';

import * as token_pb from './token_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  TokenCreateRequest,
  TokenCreateResponse} from './token_create_pb';

export class TokenCreateClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  tokenCreate(
    request: TokenCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: TokenCreateResponse) => void
  ): grpcWeb.ClientReadableStream<TokenCreateResponse>;

}

export class TokenCreatePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  tokenCreate(
    request: TokenCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TokenCreateResponse>;

}

