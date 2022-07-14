// pages/order/order.js
// import request from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: null,
    orderStatus: ['待付款', '待发货', '配送中', '待收货'],
    optionsId: null,
    description: '',
    show: null,
    buttonName: '立即支付'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('----------orderList---------')
    this.setData({
      orderList: [
        {id: 3207, product_name: '柠檬', status: '已支付' , payment_time: '2022-07-13 08:33:55', product_img: 'https://img13.360buyimg.com/n7/jfs/t3151/170/4272705390/141270/ef08418e/583e35eeN8e604caa.jpg.avif', current_unit_price: 3.30, quantity: 3.50, total_price: 11.55},
        {id: 3208, product_name: '香瓜', status: '已支付' ,payment_time: '2022-06-22 12:33:22',product_img: 'https://img11.360buyimg.com/n7/jfs/t1/122101/11/28322/377490/625e5b58Ef3cb9d49/d1ed62f578536a6c.jpg.avif', current_unit_price: 3.50, quantity: 4.00, total_price: 14.00},
        {id: 3209, product_name: '网纹瓜', status: '已支付' ,payment_time: '2022-06-02 12:16:15',product_img: 'https://img10.360buyimg.com/n7/jfs/t1/116376/12/7332/671193/5ec23daaEfbec835d/83f925e3fe019901.png.avif', current_unit_price: 20.50, quantity: 4.50, total_price: 92.25},
        {id: 3210, product_name: '橙子', status: '已支付' ,payment_time: '2022-05-11 09:10:55',product_img: 'https://img10.360buyimg.com/n7/jfs/t1/156741/19/23152/366899/6184ed1bE5c0abb34/845b34ad3fd930e2.jpg.avif', current_unit_price: 20.80, quantity: 5.50, total_price: 114.40},
        {id: 3211, product_name: '葡萄', status: '已支付', payment_time: '2022-04-22 12:40:55', product_img: 'https://img11.360buyimg.com/n7/jfs/t1/204413/6/24404/102338/62aeea50Ef65e37a3/6fe96b8a952ce947.jpg.avif', current_unit_price: 10.80, quantity: 2.50, total_price: 27.00},
      ]
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})