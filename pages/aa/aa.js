// pages/aa/aa.js
const { i18n, t } = require('../../utils/i18n')

Page({
  data: {
    currentLang: 'zh'
  },

  onLoad: function() {
    const app = getApp()
    const savedLang = wx.getStorageSync('currentLang')
    this.setData({
      currentLang: savedLang || app.globalData.currentLang || 'zh'
    })
    this.setNavigationBarTitle()
  },

  onShow: function() {
    const app = getApp()
    const savedLang = wx.getStorageSync('currentLang')
    const currentLang = savedLang || app.globalData.currentLang || 'zh'
    if (currentLang !== this.data.currentLang) {
      this.setData({
        currentLang: currentLang
      })
      this.setNavigationBarTitle()
    }
  },

  setNavigationBarTitle: function() {
    const title = this.data.currentLang === 'zh' ? 'AA页面' : 'AA Page'
    wx.setNavigationBarTitle({
      title: title
    })
  }
}) 