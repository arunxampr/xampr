import Api from './Api';
const create = ()=> {

const getXwallData = (success, error)=>{
    const api = Api.create();
    api.getXwall(0, 'Android', 45).then((res)=>{
      success(res.data);
     }).catch((err)=>{
       error(err);
     });
}

return {
  getXwallData
 }

}
export default  {
    create
}