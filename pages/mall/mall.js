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
          mainImage: 'https://img10.360buyimg.com/n7/jfs/t1/212370/9/20229/208859/62ad321aEca2de5c4/666bba7878296a0c.jpg.avif'
        },
        {
          id: 10,
          description: '酸甜可口',
          title: '大红西红柿（番茄）400g',
          price: 4.00,
          mainImage: 'https://img10.360buyimg.com/n7/jfs/t1/65594/39/17981/68045/6281e341Ed359ca0a/1cedc15e862d8a34.jpg.avif'
        },
        {
          id: 11,
          description: '葱香四溢 微辣清脆',
          title: '红洋葱450g',
          price: 6.00,
          mainImage: 'https://img14.360buyimg.com/n7/jfs/t1/167796/32/7341/106425/603378e6Ef30ccb2d/a4ca10de872a8e9b.jpg.avif'
        },
        {
          id: 12,
          description: '新鲜生菜',
          title: '生菜300g',
          price: 6.00,
          mainImage: 'https://img11.360buyimg.com/n7/jfs/t1/84957/12/22315/317766/620e5826E5b044ebc/05f366fa8a10e62c.jpg.avif'
        },
        {
          id: 13,
          description: '生熟两吃 美味不可挡',
          title: '长白萝卜600g',
          price: 6.00,
          mainImage: 'https://img11.360buyimg.com/n7/jfs/t9925/239/365244464/170958/de5e5288/59ccdb30Nfe1f28d3.jpg.avif'
        },
        {
          id: 14,
          description: '新鲜大白菜 超好吃',
          title: '大白菜300g',
          price: 6.00,
          mainImage: 'https://img12.360buyimg.com/n7/jfs/t1/184865/28/15900/98124/60ffb9b3E14f2ae15/2d6bb368a1649152.jpg.avif'
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