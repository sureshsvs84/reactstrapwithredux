import React from 'react';

const Breadcrumbs = React.lazy(() => import('./components/ReferenceBase/Breadcrumbs'));
const Cards = React.lazy(() => import('./components/ReferenceBase/Cards'));
const Carousels = React.lazy(() => import('./components/ReferenceBase/Carousels'));
const Collapses = React.lazy(() => import('./components/ReferenceBase/Collapses'));
const Dropdowns = React.lazy(() => import('./components/ReferenceBase/Dropdowns'));
const Forms = React.lazy(() => import('./components/ReferenceBase/Forms'));
const Jumbotrons = React.lazy(() => import('./components/ReferenceBase/Jumbotrons'));
const ListGroups = React.lazy(() => import('./components/ReferenceBase/ListGroups'));
const Navbars = React.lazy(() => import('./components/ReferenceBase/Navbars'));
const Navs = React.lazy(() => import('./components/ReferenceBase/Navs'));
const Paginations = React.lazy(() => import('./components/ReferenceBase/Paginations'));
const Popovers = React.lazy(() => import('./components/ReferenceBase/Popovers'));
const ProgressBar = React.lazy(() => import('./components/ReferenceBase/ProgressBar'));
const Switches = React.lazy(() => import('./components/ReferenceBase/Switches'));
const Tables = React.lazy(() => import('./components/ReferenceBase/Tables'));
const Tabs = React.lazy(() => import('./components/ReferenceBase/Tabs'));
const Tooltips = React.lazy(() => import('./components/ReferenceBase/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
//CRUD - APP 
const UserList = React.lazy(() => import('./views/CRUD-Form/userList'));
const PostList = React.lazy(() => import('./views/CRUD-Form/postList'));
const PostDetails = React.lazy(() => import('./views/CRUD-Form/postDetails'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
     { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/referenceBase', exact: true, name: 'Base', component: Cards },
  { path: '/referenceBase/cards', name: 'Cards', component: Cards },
  { path: '/referenceBase/forms', name: 'Forms', component: Forms },
  { path: '/referenceBase/switches', name: 'Switches', component: Switches },
  { path: '/referenceBase/tables', name: 'Tables', component: Tables },
  { path: '/referenceBase/tabs', name: 'Tabs', component: Tabs },
  { path: '/referenceBase/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/referenceBase/carousels', name: 'Carousel', component: Carousels },
  { path: '/referenceBase/collapses', name: 'Collapse', component: Collapses },
  { path: '/referenceBase/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/referenceBase/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/referenceBase/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/referenceBase/navbars', name: 'Navbars', component: Navbars },
  { path: '/referenceBase/navs', name: 'Navs', component: Navs },
  { path: '/referenceBase/paginations', name: 'Paginations', component: Paginations },
  { path: '/referenceBase/popovers', name: 'Popovers', component: Popovers },
  { path: '/referenceBase/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/referenceBase/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/CRUD/DefaultForm', exact: true,  name: 'UsersList', component: UserList },
  { path: '/CRUD/posts', exact: true,  name: 'PostList', component: PostList },
  { path: '/CRUD/posts/:id', exact: true,  name: 'PostDetails', component: PostDetails } 
];

export default routes;
