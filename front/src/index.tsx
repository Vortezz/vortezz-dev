import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Client from "./struct/Client";

const client = new Client();

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
