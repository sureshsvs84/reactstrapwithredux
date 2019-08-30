export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Base',
      url: '/referenceBase',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/referenceBase/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Cards',
          url: '/referenceBase/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Carousels',
          url: '/referenceBase/carousels',
          icon: 'icon-puzzle',
        },
        {
          name: 'Collapses',
          url: '/referenceBase/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Dropdowns',
          url: '/referenceBase/dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: 'Forms',
          url: '/referenceBase/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'Jumbotrons',
          url: '/referenceBase/jumbotrons',
          icon: 'icon-puzzle',
        },
        {
          name: 'List groups',
          url: '/referenceBase/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'Navs',
          url: '/referenceBase/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Paginations',
          url: '/referenceBase/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'Popovers',
          url: '/referenceBase/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'Progress Bar',
          url: '/referenceBase/progress-bar',
          icon: 'icon-puzzle',
        },
        {
          name: 'Switches',
          url: '/referenceBase/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tables',
          url: '/referenceBase/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tabs',
          url: '/referenceBase/tabs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tooltips',
          url: '/referenceBase/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'CRUD-App',
      url: '/CRUD',
      icon: 'icon-cursor',
      children: [
        {
          name: 'CRUD-DefaultForm',
          url: '/CRUD/DefaultForm',
          icon: 'icon-user',
        },
        {
          name: 'CRUD-FormikFrom',
          url: '/CRUD/FormikForm',
          icon: 'icon-user',
        }
       
      ],
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Blank Page',
          url: '/blankPage',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    
   
  ],
};
