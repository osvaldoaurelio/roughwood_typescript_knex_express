import app from './app';

app.set('port', process.env.SERVER_PORT || 3001);

app.listen(app.get('port'), () => {
  console.log(`Server is runing at port ${app.get('port')}`);
});
