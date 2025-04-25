// app.js
const { i18n, t } = require('./utils/i18n')

App({
  globalData: {
    currentLang: 'zh'
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 获取存储的语言设置
    const savedLang = wx.getStorageSync('currentLang')
    if (savedLang) {
      this.globalData.currentLang = savedLang
    }
  },
  
  // 切换语言
  switchLanguage: function() {
    const newLang = this.globalData.currentLang === 'zh' ? 'en' : 'zh'
    this.globalData.currentLang = newLang
    // 保存语言设置
    wx.setStorageSync('currentLang', newLang)
    // 通知所有页面语言已更改
    const pages = getCurrentPages()
    pages.forEach(page => {
      if (page.setData) {
        page.setData({
          currentLang: newLang
        })
      }
    })
  }
})
