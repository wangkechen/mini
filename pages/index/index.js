// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const { t } = require('../../utils/i18n')

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    currentLang: 'zh',
    newsList: []
  },

  // 将 t 函数作为页面方法
  t: function(key) {
    return t(key, this.data.currentLang)
  },

  onLoad: function() {
    // 获取全局语言设置
    const savedLang = wx.getStorageSync('currentLang')
    this.setData({
      currentLang: savedLang || app.globalData.currentLang || 'zh'
    })
    this.setNavigationBarTitle()
    this.updateNewsList()
    // 标记 tabBar 已创建
    app.onTabBarCreated()
  },

  onShow: function() {
    // 每次页面显示时检查语言设置
    const currentLang = app.globalData.currentLang
    if (currentLang !== this.data.currentLang) {
      this.setData({
        currentLang: currentLang
      })
      this.setNavigationBarTitle()
      this.updateNewsList()
    }
  },

  // 设置导航栏标题
  setNavigationBarTitle: function() {
    const title = this.data.currentLang === 'zh' ? '首页' : 'Home'
    wx.setNavigationBarTitle({
      title: title
    })
  },

  // 语言切换方法
  switchLanguage: function() {
    app.switchLanguage()
  },

  // 更新新闻列表
  updateNewsList: function() {
    const lang = this.data.currentLang
    const newsList = [
      {
        id: 1,
        title: t('news.award', lang),
        description: t('news.awardDesc', lang),
        image: '/images/common/example.png',
        time: '2023-12-20'
      },
      {
        id: 2,
        title: t('news.launch', lang),
        description: t('news.launchDesc', lang),
        image: '/images/common/example.png',
        time: '2023-12-15'
      },
      {
        id: 3,
        title: t('news.cooperation', lang),
        description: t('news.cooperationDesc', lang),
        image: '/images/common/example.png',
        time: '2023-12-10'
      }
    ]
    this.setData({ newsList })
  },

  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  navigateToAA() {
    console.log('Navigating to AA page')
    wx.switchTab({
      url: '/pages/aa/aa',
      success: function() {
        console.log('Navigation to AA successful')
      },
      fail: function(error) {
        console.error('Navigation to AA failed:', error)
      }
    })
  },

  navigateToBB() {
    console.log('Navigating to BB page')
    wx.switchTab({
      url: '/pages/bb/bb',
      success: function() {
        console.log('Navigation to BB successful')
      },
      fail: function(error) {
        console.error('Navigation to BB failed:', error)
      }
    })
  },

  navigateToCC() {
    console.log('Navigating to CC page')
    wx.switchTab({
      url: '/pages/cc/cc',
      success: function() {
        console.log('Navigation to CC successful')
      },
      fail: function(error) {
        console.error('Navigation to CC failed:', error)
      }
    })
  },

  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },

  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
})
