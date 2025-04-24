Page({
  data: {
    // 页面的初始数据
    companyInfo: {
      phone: '400-123-4567',
      email: 'contact@company.com',
      address: '北京市朝阳区科技园区88号',
      wechat: 'CompanyOfficial'
    }
  },

  onLoad: function() {
    // 页面加载时执行
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

  // 复制文本（邮箱、微信号等）
  copyText: function(e) {
    const text = e.currentTarget.dataset.text
    wx.setClipboardData({
      data: text,
      success: function() {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },

  // 查看位置
  viewLocation: function() {
    // 这里可以添加导航或地图查看功能
    wx.showToast({
      title: '正在开发中',
      icon: 'none'
    })
  },

  // 预览二维码
  previewQRCode: function() {
    wx.previewImage({
      urls: ['/images/common/example.png']
    })
  }
}) 