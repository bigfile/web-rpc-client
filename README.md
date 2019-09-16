### web-rpc-client
Bigfile RPC client for web front

### example

1. install `wb-rpc-client`

> npm i web-rpc-client

2. start rpc server

> bigfile  rpc:start --ca-cert ca.pem --server-cert server.pem --server-key server.key --auth-client 3

3. start proxy

> grpcwebproxy --backend_addr=127.0.0.1:10986 --backend_tls_noverify --run_tls_server=false --allow_all_origins --server_http_debug_port=8989 --backend_tls

4. Vue example:

```
<script>
import HelloWorld from './components/HelloWorld'
import {TokenCreateClient} from 'web-rpc-client/src/token_create_grpc_web_pb'
import {TokenCreateRequest} from 'web-rpc-client/src/token_create_pb'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created: function() {
    console.log("hello world")
    const tokenCreateSrv = new TokenCreateClient('http://localhost:8989')
    const request = new TokenCreateRequest();
    request.setAppUid('ea5bbca1ea3faf093894294e5a175ac8')
    request.setAppSecret('123456')
    const response = tokenCreateSrv.tokenCreate(request, undefined, function(err, resp){
      console.log(err, resp.toObject())
    })
  },
}
</script>
```