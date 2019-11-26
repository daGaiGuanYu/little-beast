const txt = {
  init: '召唤小怪兽',
  started: '不要松开！',
  ended: '再来一次~~'
}
let go = false;

Page({
  data: {
    txt: txt.init
  },

  onLoad: function() {

  },

  start(){
    this.setData({
      txt: txt.started
    });
    go = true;
  },
  end(){
    this.setData({
      txt: txt.ended
    });
    go = false;
  },
  onShow(){
    setInterval( () => {
      if(go)
        wx.vibrateLong();
    }, 420);
  }
})
