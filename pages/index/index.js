// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

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
    newsList: [
      {
        id: 1,
        title: '公司荣获2023年度最佳创新企业奖',
        description: '近日，我公司凭借在技术创新领域的突出贡献，荣获2023年度最佳创新企业奖...',
        image: '/images/common/example.png',
        time: '2023-12-20'
      },
      {
        id: 2,
        title: '新产品发布会圆满举行',
        description: '我公司最新研发的智能产品系列在发布会上获得广泛关注，展示了多项创新技术...',
        image: '/images/common/example.png',
        time: '2023-12-15'
      },
      {
        id: 3,
        title: '公司与某知名企业达成战略合作',
        description: '我公司近日与某知名企业签署战略合作协议，将在多个领域展开深度合作...',
        image: '/images/common/example.png',
        time: '2023-12-10'
      }
    ]
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
    // 页面加载时的逻辑
  },
  onShow: function() {
    // 页面显示时的逻辑
  }
})
