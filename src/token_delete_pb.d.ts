import * as jspb from "google-protobuf"

import * as token_pb from './token_pb';

export class TokenDeleteRequest extends jspb.Message {
  getAppUid(): string;
  setAppUid(value: string): void;

  getAppSecret(): string;
  setAppSecret(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenDeleteRequest): TokenDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: TokenDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenDeleteRequest;
  static deserializeBinaryFromReader(message: TokenDeleteRequest, reader: jspb.BinaryReader): TokenDeleteRequest;
}

export namespace TokenDeleteRequest {
  export type AsObject = {
    appUid: string,
    appSecret: string,
    token: string,
  }
}

export class TokenDeleteResponse extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): void;

  getToken(): token_pb.Token | undefined;
  setToken(value?: token_pb.Token): void;
  hasToken(): boolean;
  clearToken(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenDeleteResponse): TokenDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: TokenDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenDeleteResponse;
  static deserializeBinaryFromReader(message: TokenDeleteResponse, reader: jspb.BinaryReader): TokenDeleteResponse;
}

export namespace TokenDeleteResponse {
  export type AsObject = {
    requestId: number,
    token?: token_pb.Token.AsObject,
  }
}

