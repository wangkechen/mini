// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const { t: i18nT } = require('../../utils/i18n')

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
    return i18nT(key, this.data.currentLang)
  },

  // 语言切换方法
  switchLanguage: function() {
    const newLang = this.data.currentLang === 'zh' ? 'en' : 'zh'
    this.setData({
      currentLang: newLang
    })
    this.updateNewsList()
  },

  // 更新新闻列表
  updateNewsList: function() {
    const lang = this.data.currentLang
    this.setData({
      newsList: [
        {
          id: 1,
          title: i18nT('news.award', lang),
          description: i18nT('news.awardDesc', lang),
          image: '/images/common/example.png',
          time: '2023-12-20'
        },
        {
          id: 2,
          title: i18nT('news.launch', lang),
          description: i18nT('news.launchDesc', lang),
          image: '/images/common/example.png',
          time: '2023-12-15'
        },
        {
          id: 3,
          title: i18nT('news.cooperation', lang),
          description: i18nT('news.cooperationDesc', lang),
          image: '/images/common/example.png',
          time: '2023-12-10'
        }
      ]
    })
  },

  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
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

  onLoad: function() {
    this.updateNewsList()
  },

  onShow: function() {
    // 页面显示时的逻辑
  }
})
