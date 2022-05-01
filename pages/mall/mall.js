// pages/home/home.js
// import request from '../../utils/request'

Page({
  data: {
    background: [
      '/assets/img/banner-1.png', 
      '/assets/img/banner-2.png', 
      '/assets/img/banner-3.png'
    ],
    product: null
  },
//   async onClick(event) {
//     wx.navigateTo({
//       url: '/pages/product/detail/detail?id=' + event.currentTarget.id
//     })
//     await request.POST('/browse/save', {
//       productId: event.currentTarget.id,
//       userId: wx.getStorageSync('uid')
//     })
//   },
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
    // this.getTabBar().init();
    // let res = await request.GET('/product/list');
    // this.setData({
    //   product: res.data.data
    // })
    this.setData({
      product: [
        {
          id: 9,
          description: '新鲜菠菜',
          title: '菠菜300g',
          price: 6.00,
          mainImage: '/assets/productImg/IMG_1296.JPG'
        },
        {
          id: 10,
          description: '酸甜可口',
          title: '大红西红柿（番茄）400g',
          price: 4.00,
          mainImage: '/assets/productImg/IMG_1299.JPG'
        },
        {
          id: 11,
          description: '葱香四溢 微辣清脆',
          title: '红洋葱450g',
          price: 6.00,
          mainImage: '/assets/productImg/IMG_1301.JPG'
        },
        {
          id: 12,
          description: '新鲜菠菜',
          title: '生菜300g',
          price: 6.00,
          mainImage: '/assets/productImg/IMG_1303.JPG'
        },
        {
          id: 13,
          description: '生熟两吃 美味不可挡',
          title: '长白萝卜600g',
          price: 6.00,
          mainImage: '/assets/productImg/IMG_1305.JPG'
        },
        {
          id: 14,
          description: '新鲜大白菜 超好吃',
          title: '大白菜300g',
          price: 6.00,
          mainImage: '/assets/productImg/IMG_1307.JPG'
        },
      ]
    })

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})