const { i18n, t } = require('../../utils/i18n')

Page({
  data: {
    // 页面的初始数据
    currentLang: 'zh',
    companyInfo: {
      phone: '400-123-4567',
      email: 'contact@company.com',
      address: '北京市朝阳区科技园区88号',
      wechat: 'CompanyOfficial'
    }
  },

  onLoad: function() {
    // 页面加载时执行
    // 获取全局语言设置
    const app = getApp()
    const savedLang = wx.getStorageSync('currentLang')
    this.setData({
      currentLang: savedLang || app.globalData.currentLang || 'zh'
    })
    // 设置导航栏标题
    this.setNavigationBarTitle()
  },

  onShow: function() {
    // 每次页面显示时检查语言设置
    const app = getApp()
    const savedLang = wx.getStorageSync('currentLang')
    const currentLang = savedLang || app.globalData.currentLang || 'zh'
    if (currentLang !== this.data.currentLang) {
      this.setData({
        currentLang: currentLang
      })
      // 更新导航栏标题
      this.setNavigationBarTitle()
    }
  },

  // 设置导航栏标题
  setNavigationBarTitle: function() {
    const title = this.data.currentLang === 'zh' ? '关于我们' : 'About Us'
    wx.setNavigationBarTitle({
      title: title
    })
  },

  // 拨打电话
  makePhoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: this.data.companyInfo.phone,
      fail(err) {
        console.log('拨打电话失败：', err)
      }
    })
  },

  // 复制文本（邮箱、公司地址等）
  copyText: function(e) {
    const text = e.currentTarget.dataset.text
    wx.setClipboardData({
      data: text,
      success: () => {
        wx.showToast({
          title: this.data.currentLang === 'zh' ? '复制成功' : 'Copied',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },

  // 预览二维码
  previewQRCode: function() {
    wx.previewImage({
      urls: ['/images/common/example.png']
    })
  }
}) 