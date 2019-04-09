# kong-utility-client

## Getting start

```shell
npm install --save kong-utility-client
```

## Connect to Kong

```javascript
import KongClient from 'kong-utility-client'

const kongClient = new KongClient({
  adminURL: 'http://localhost:8001',
  baseURL: 'http://localhost:8000',
  provisionKey: 'some-key'
})
```

## Consumer

### Retrieve Consumer

```javascript
kongClient.retrieveConsumer('gun').then(res => console.log(res.data))
```

### Create Consumer

```javascript
kongClient.createConsumer('test-kong-client').then(res => console.log(res))
```

### Delete Consumer

```javascript
kongClient.deleteConsumer('test-kong-client').then(res => console.log(res))
```

## Credentials

### Create Oauth Credentials

```javascript
kongClient
  .createOauthCredential('test-kong-client', 'test-oauth-credential', [
    'http://localhost:3000/test'
  ])
  .catch(err => console.log(err))
  .then(res => console.log(res))
```

### Get access token

```javascript
kongClient
  .getAccessToken({
    grantType: 'client_credentials',
    scope: ['USER_ACCESS', 'TMS_ACCESS'],
    authenticatedUserId: 'test-kong-client',
    clientId: 'clientId',
    clientSecret: 'clientSecret'
  })
  .then(res => console.log(res.data))
```
