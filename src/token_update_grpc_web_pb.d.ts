import * as grpcWeb from 'grpc-web';

import * as token_pb from './token_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  TokenUpdateRequest,
  TokenUpdateResponse} from './token_update_pb';

export class TokenUpdateClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  tokenUpdate(
    request: TokenUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: TokenUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<TokenUpdateResponse>;

}

export class TokenUpdatePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  tokenUpdate(
    request: TokenUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TokenUpdateResponse>;

}

