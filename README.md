

# NestjsPlayground

1. run `npm run start`

2. in browser console run following code

```javascript
const ws = new WebSocket('ws://localhost:3301/ws/gateway');
ws.onopen = () => {
	ws.send(JSON.stringify({ event: 'query:logging', data: {} }));
	ws.send(JSON.stringify({ event: 'query:logging', data: {} }));
};


//ws.send(JSON.stringify({ event: 'query:logging', data: {} }));
```
 
