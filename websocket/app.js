const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

const webSocket = require('./socket');

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('wsExample'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'wsExample',
  cookie: {
    httpOnly: true,
    secure: false
  }
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 해당 주소가 없습니다`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.send('error Occurred');
});

const server = app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 서버 실행 중..');
});

webSocket(server);