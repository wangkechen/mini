const i18n = {
  zh: {
    latestNews: '最新动态',
    news: {
      award: '公司荣获2023年度最佳创新企业奖',
      awardDesc: '近日，我公司凭借在技术创新领域的突出贡献，荣获2023年度最佳创新企业奖...',
      launch: '新产品发布会圆满举行',
      launchDesc: '我公司最新研发的智能产品系列在发布会上获得广泛关注，展示了多项创新技术...',
      cooperation: '公司与某知名企业达成战略合作',
      cooperationDesc: '我公司近日与某知名企业签署战略合作协议，将在多个领域展开深度合作...'
    }
  },
  en: {
    latestNews: 'Latest News',
    news: {
      award: 'Company Wins 2023 Best Innovation Enterprise Award',
      awardDesc: 'Recently, our company won the 2023 Best Innovation Enterprise Award for its outstanding contributions in technological innovation...',
      launch: 'New Product Launch Event Successfully Held',
      launchDesc: 'Our latest intelligent product series received widespread attention at the launch event, showcasing multiple innovative technologies...',
      cooperation: 'Company Reaches Strategic Cooperation with Renowned Enterprise',
      cooperationDesc: 'Our company recently signed a strategic cooperation agreement with a renowned enterprise, planning to collaborate in multiple fields...'
    }
  }
}

module.exports = {
  i18n,
  t: function(key, lang = 'zh') {
    const keys = key.split('.')
    let value = i18n[lang]
    for (const k of keys) {
      if (!value || !value[k]) {
        console.warn(`Translation key "${key}" not found for language "${lang}"`)
        return key
      }
      value = value[k]
    }
    return value
  }
} 