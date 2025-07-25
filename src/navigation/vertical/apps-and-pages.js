export default [
  {
    title: 'Apps',
    icon: { icon: 'tabler-layout-grid-add' },
    children: [
      {
        title: 'Ecommerce',
        icon: { icon: 'tabler-shopping-cart-plus' },
        children: [
          {
            title: 'Dashboard',
            to: 'second-page',
          },
          {
            title: 'Product',
            children: [
              { title: 'List',   to: 'second-page', },
              { title: 'Add',   to: 'second-page', },
              { title: 'Category',  to: 'second-page',},
            ],
          },
          {
            title: 'Order',
            children: [
              { title: 'List',  to: 'second-page',},
              { title: 'Details', to: { name: 'second-page', params: { id: '9042' } } },
            ],
          },
          {
            title: 'Customer',
            children: [
              { title: 'List', to: 'second-page' },
              { title: 'Details', to: { name: 'second-page', params: { id: 478426 } } },
            ],
          },
          {
            title: 'Manage Review',
            to: 'second-page',
          },
          {
            title: 'Referrals',
            to: 'second-page',
          },
          {
            title: 'Settings',
            to: 'second-page',
          },
        ],
      },
      {
        title: 'Academy',
        icon: { icon: 'tabler-book' },
        children: [
          { title: 'Dashboard', to: 'second-page' },
          { title: 'My Course', to: 'second-page' },
          { title: 'Course Details', to: 'second-page' },
        ],
      },
      {
        title: 'Logistics',
        icon: { icon: 'tabler-truck' },
        children: [
          { title: 'Dashboard', to: 'second-page' },
          { title: 'Fleet', to: 'second-page' },
        ],
      },
      {
        title: 'Email',
        icon: { icon: 'tabler-mail' },
        to: 'second-page',
      },
      {
        title: 'Chat',
        icon: { icon: 'tabler-message-circle' },
        to: 'second-page',
      },
      {
        title: 'Calendar',
        to: 'second-page',
        icon: { icon: 'tabler-calendar' },
      },
      {
        title: 'Kanban',
        icon: { icon: 'tabler-layout-kanban' },
        to: 'second-page',
      },
      {
        title: 'Invoice',
        icon: { icon: 'tabler-file-dollar' },
        children: [
          { title: 'List', to: 'second-page' },
          { title: 'Preview', to: { name: 'second-page', params: { id: '5036' } } },
          { title: 'Edit', to: { name: 'second-page', params: { id: '5036' } } },
          { title: 'Add', to: 'second-page' },
        ],
      },
      {
        title: 'User',
        icon: { icon: 'tabler-users' },
        children: [
          { title: 'List', to: 'second-page' },
          { title: 'View', to: { name: 'second-page', params: { id: 21 } } },
        ],
      },
      {
        title: 'Roles & Permissions',
        icon: { icon: 'tabler-settings' },
        children: [
          { title: 'Roles', to: 'second-page' },
          { title: 'Permissions', to: 'second-page' },
        ],
      },
    ],
  },
]
