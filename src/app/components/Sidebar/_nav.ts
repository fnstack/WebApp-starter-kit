export default {
  items: [
    {
      name: 'Accueil',
      url: '/accueil',
      icon: 'icon-home',
      badge: {
        variant: 'info'
      }
    },
    {
      title: true,
      name: 'Paramétrage'
    },
    {
      name: 'Paramètres',
      url: '/',
      icon: 'icon-settings',
      children: [
        {
          name: 'Utilisateurs',
          url: '/users',
          icon: 'icon-user'
        }
      ]
    }
  ]
};
