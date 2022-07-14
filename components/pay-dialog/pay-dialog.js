// components/pay-dialog/pay-dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showPay: false,
    qr_code_url: '',
    timer: null,
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPay: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    test() {
      console.log('-----------pay-dialog test message-----------')
    },
    /**
     * 弹窗显示支付
     */
    getPayConfig() {
      console.log('获取支付信息')
      this.setData({
        showPay: true,
        // qr_code_url: payConfig.qr_code_url
      })
    }
  }
})
