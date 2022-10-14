import axios from "axios";

const AxiosHeader = () => {
  

  axios.defaults.headers.post['Content-Type'] = 'application/json';
  // axios.defaults.headers.common['app_role'] = 'sa';

  // set access control allow origin
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common["Access-Control-Allow-Headers", "X-Requested-With"] = '*';
};

export default AxiosHeader;