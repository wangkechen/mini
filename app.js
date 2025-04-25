// app.js
const { i18n, t } = require('./utils/i18n')

App({
  globalData: {
    currentLang: 'zh'
  },
  onLaunch: function() {
    // 获取存储的语言设置
    const savedLang = wx.getStorageSync('currentLang')
    if (savedLang) {
      this.globalData.currentLang = savedLang
    }
    // 设置 tabBar 文字
    this.setTabBarText()
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
    // 更新 tabBar 文字
    this.setTabBarText()
  },

  // 设置 tabBar 文字
  setTabBarText: function() {
    const lang = this.globalData.currentLang
    const tabBarText = {
      'pages/index/index': lang === 'zh' ? '首页' : 'Home',
      'pages/aa/aa': lang === 'zh' ? 'AA' : 'AA',
      'pages/bb/bb': lang === 'zh' ? 'BB' : 'BB',
      'pages/cc/cc': lang === 'zh' ? 'CC' : 'CC',
      'pages/about/about': lang === 'zh' ? '关于我们' : 'About'
    }
    
    Object.keys(tabBarText).forEach(pagePath => {
      wx.setTabBarItem({
        index: this.getTabBarIndex(pagePath),
        text: tabBarText[pagePath]
      })
    })
  },

  // 获取 tabBar 索引
  getTabBarIndex: function(pagePath) {
    const tabBarList = [
      'pages/index/index',
      'pages/aa/aa',
      'pages/bb/bb',
      'pages/cc/cc',
      'pages/about/about'
    ]
    return tabBarList.indexOf(pagePath)
  }
})
