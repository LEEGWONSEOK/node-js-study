const WebSocket = require('ws');

module.exports = (server) => {
  const wss = new WebSocket.Server({ server }); // 클라이언트가 요청 보내면 -> 객체 인스턴스 생성

  wss.on('connection', (ws, req) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('New Client', ip);

    // 클라이언트로 받은 메세지
    ws.on('message', (message) => {
      console.log(message);
    });

    // 오류 처리
    ws.on('error', (err) => {
      console.error(err);
    });

    // 종료
    ws.on('close', () => {
      console.log('클라이언트 접속 해제', ip);
      clearInterval(ws.interval);
    });

    // 서버에서 메세지
    ws.interval = setInterval(() => {
      if (ws.readyState === ws.OPEN) {
        ws.send('Message From Server');
      }
    }, 3000);
  });
};