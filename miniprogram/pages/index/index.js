const { t, setLanguage, getCurrentLanguage } = require('../../i18n/index')

Page({
  data: {
    currentLang: getCurrentLanguage(),
    banners: [
      {
        id: 1,
        imageUrl: 'https://picsum.photos/750/400?random=1'
      },
      {
        id: 2,
        imageUrl: 'https://picsum.photos/750/400?random=2'
      },
      {
        id: 3,
        imageUrl: 'https://picsum.photos/750/400?random=3'
      }
    ],
    newsList: [
      {
        id: 1,
        title: '新闻标题1',
        description: '这是新闻描述1，可以写很多内容，这里只是示例。',
        imageUrl: 'https://picsum.photos/200/150?random=4',
        time: '2024-03-20'
      },
      {
        id: 2,
        title: '新闻标题2',
        description: '这是新闻描述2，可以写很多内容，这里只是示例。',
        imageUrl: 'https://picsum.photos/200/150?random=5',
        time: '2024-03-19'
      },
      {
        id: 3,
        title: '新闻标题3',
        description: '这是新闻描述3，可以写很多内容，这里只是示例。',
        imageUrl: 'https://picsum.photos/200/150?random=6',
        time: '2024-03-18'
      }
    ]
  },

  onLoad() {
    this.setData({
      currentLang: getCurrentLanguage()
    })
  },

  onLanguageChange(e) {
    const newLang = e.detail.value ? 'zh' : 'en'
    setLanguage(newLang)
    this.setData({
      currentLang: newLang
    })
  },

  onNewsTap(e) {
    const newsId = e.currentTarget.dataset.id
    // 这里可以添加新闻点击后的处理逻辑
    console.log('点击了新闻:', newsId)
  },

  t
}) 