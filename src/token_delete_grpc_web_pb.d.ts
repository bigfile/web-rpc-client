import * as grpcWeb from 'grpc-web';

import * as token_pb from './token_pb';

import {
  TokenDeleteRequest,
  TokenDeleteResponse} from './token_delete_pb';

export class TokenDeleteClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  tokenDelete(
    request: TokenDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: TokenDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<TokenDeleteResponse>;

}

export class TokenDeletePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  tokenDelete(
    request: TokenDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<TokenDeleteResponse>;

}

