const Base = require('./base.js');
let userList =[];

module.exports = class extends Base {
  openAction() {
    console.log('ws open');
    this.broadcast('open','open2');
    return this.success();
  }
  closeAction() {
   this.broadcast('close','连接关闭');
  }
  messageAction(){
    this.wsData.data.time = think.datatime(new Date(),'HH::mm::ss')
    this.broadcast('message',this.wsData.data);
  }
  onlineAction(){
    const id = this.wsData.data.id;
    userList.push(id);
    this.broadcast('online','游客$(id)上线');
  }
  offlineAction(){
    const id = this.wsData.data.id;
    userList=userList.filter(userId=>userId)
    this.broadcast('offline','游客${id}下线');
  }
};
