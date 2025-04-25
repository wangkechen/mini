// app.js
const { i18n, t } = require('./utils/i18n')

App({
  globalData: {
    currentLang: 'zh',
    tabBarCreated: false
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
    
    // 更新 tabBar 文字
    this.setTabBarText()
    
    // 通知所有页面语言已更改
    const pages = getCurrentPages()
    pages.forEach(page => {
      if (page && page.setData) {
        page.setData({
          currentLang: newLang
        }, () => {
          // 如果页面有设置导航栏标题的方法，调用它
          if (typeof page.setNavigationBarTitle === 'function') {
            page.setNavigationBarTitle()
          }
          // 如果页面有更新新闻列表的方法，调用它
          if (typeof page.updateNewsList === 'function') {
            page.updateNewsList()
          }
        })
      }
    })
  },

  // 设置 tabBar 文字
  setTabBarText: function() {
    const lang = this.globalData.currentLang
    const tabBarText = {
      'pages/index/index': lang === 'zh' ? '首页' : 'Home',
      'pages/aa/aa': lang === 'zh' ? 'AA' : 'AA',
      'pages/bb/bb': lang === 'zh' ? 'BB' : 'BB',
      'pages/cc/cc': lang === 'zh' ? 'CC' : 'CC',
      'pages/about/about': lang === 'zh' ? '关于我们' : 'About us'
    }
    
    // 确保 tabBar 已经创建
    if (!this.globalData.tabBarCreated) {
      setTimeout(() => {
        this.setTabBarText()
      }, 100)
      return
    }

    // 设置 tabBar 文字
    try {
      Object.keys(tabBarText).forEach(pagePath => {
        const index = this.getTabBarIndex(pagePath)
        if (index !== -1) {
          wx.setTabBarItem({
            index: index,
            text: tabBarText[pagePath]
          })
        }
      })
    } catch (error) {
      console.error('设置 tabBar 文字失败：', error)
      // 如果设置失败，等待一段时间后重试
      setTimeout(() => {
        this.setTabBarText()
      }, 100)
    }
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
  },

  // 标记 tabBar 已创建
  onTabBarCreated: function() {
    this.globalData.tabBarCreated = true
    this.setTabBarText()
  }
})
