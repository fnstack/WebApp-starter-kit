export default {
  items: [
    {
      name: 'Tableau de bord',
      url: '/dashboard',
      icon: 'dashboard',
      key: '1'
    },
    {
      name: 'Menu test',
      url: '/main',
      icon: 'appstore',
      key: '2',
      children: [
        {
          name: 'Menu child',
          url: '/main/child',
          icon: 'smile',
          key: '1'
        }
      ]
    }
  ]
};
