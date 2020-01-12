import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({
    name: 'FacebookADDApp',
    // host: '192.168.90.161',
    // port: 9090,
  })
    .use(reactotronRedux())
    .connect();

  tron.clear();
  console.tron = tron;
}
