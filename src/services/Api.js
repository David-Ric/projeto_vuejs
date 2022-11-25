import axios from 'axios';



 export default () => axios.create({
  //'baseURL' do Back-End = comunicação com o banco de dados
  baseURL:'http://localhost:3000',
});