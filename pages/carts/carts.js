// pages/carts/carts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [], // 购物车列表
    hasList: false, // 列表中是否有数据
    totalPrice: 0, // 总价格
    selectAllStatus: true, // 全选
    obj: {
      name: 'hello'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      hasList: true, // 含有数据
      carts: [
        {id: 1, title: '芒果', image: '/assets/img/fruits.png', num: 6.2, price: 7.2, selected: true, desc: '清热除烦、生津止渴、益脾止泻、助消化等', tag: '新鲜'},
        {id: 2, title: '香蕉', image: '/assets/img/fruits.png', num: 2.2, price: 2, selected: true, desc: '高鉀、低鈉，有益心血管健康等', tag: '正宗'},
      ]
    });
    this.getTotalPrice();
  },

  // 选中当前商品事件
  selectList(e) {
    const index = e.currentTarget.dataset.index; // 获取 data 传来的 index
    let carts = this.data.carts; // 获取购物车列表
    const selected = carts[index].selected; // 获取当前商品选中状态
    carts[index].selected = !selected; // 改变状态
    this.setData({
      carts: carts
    });
    this.getTotalPrice(); // 再次获取价格
  },

  // 删除购物车商品事件
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);                 // 删除购物车列表里这个商品
    this.setData({
      carts: carts
    });
    if (!carts.length) {                  // 如果购物车为空
      this.setData({
        hasList: false                  // 修改标识为false  显示购物车为空页面
      });
    } else {                              // 如果不为空 
      this.getTotalPrice();              // 重新计算总价格
    }

  },

  // 绑定加数量事件
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  // 绑定减数量事件
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    const obj = e.currentTarget.dataset.obj;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
        carts: carts
    });
    this.getTotalPrice();
  },

  // 计算总价
  getTotalPrice() {
    let carts = this.data.carts;  // 获取购物车列表
    let total = 0;      
    for (let i = 0; i < carts.length; i ++) {   // 循环列表得到每个数据
        if (carts[i].selected) {  // 判断选中才会计算价格
          total += carts[i].num * carts[i].price;   // 所有价格加起来
        }
    }
    this.setData({                          // 最后赋值到data 中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2) * 100
    });
  },

  // 提交订单跳转
  sumbitOrder() {
    
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(this.data.carts);
    console.log(this.data.carts[0].title);
    console.log(this.data.totalPrice)

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})