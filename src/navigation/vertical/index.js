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
                  to: null,
                },
                {
                  title: 'Product',
                  children: [
                    { title: 'List',   to: null, },
                    { title: 'Add',   to: null, },
                    { title: 'Category',  to: null,},
                  ],
                },
                {
                  title: 'Order',
                  children: [
                    { title: 'List',  to: null,},
                    { title: 'Details', to: { name: null, params: { id: '9042' } } },
                  ],
                },
                {
                  title: 'Customer',
                  children: [
                    { title: 'List', to: null },
                    { title: 'Details', to: { name: null, params: { id: 478426 } } },
                  ],
                },
                {
                  title: 'Manage Review',
                  to: null,
                },
                {
                  title: 'Referrals',
                  to: null,
                },
                {
                  title: 'Settings',
                  to: null,
                },
              ],
            },
            {
              title: 'Academy',
              icon: { icon: 'tabler-book' },
              children: [
                { title: 'Dashboard', to: null },
                { title: 'My Course', to: null },
                { title: 'Course Details', to: null },
              ],
            },
            {
              title: 'Logistics',
              icon: { icon: 'tabler-truck' },
              children: [
                { title: 'Dashboard', to: null },
                { title: 'Fleet', to: null },
              ],
            },
            {
              title: 'Email',
              icon: { icon: 'tabler-mail' },
              to: null,
            },
            {
              title: 'Chat',
              icon: { icon: 'tabler-message-circle' },
              to: null,
            },
            {
              title: 'Calendar',
              to: null,
              icon: { icon: 'tabler-calendar' },
            },
            {
              title: 'Kanban',
              icon: { icon: 'tabler-layout-kanban' },
              to: null,
            },
            {
              title: 'Invoice',
              icon: { icon: 'tabler-file-dollar' },
              children: [
                { title: 'List', to: null },
                { title: 'Preview', to: { name: null, params: { id: '5036' } } },
                { title: 'Edit', to: { name: null, params: { id: '5036' } } },
                { title: 'Add', to: null },
              ],
            },
            {
              title: 'User',
              icon: { icon: 'tabler-users' },
              children: [
                { title: 'List', to: null },
                { title: 'View', to: { name: null, params: { id: 21 } } },
              ],
            },
            {
              title: 'Roles & Permissions',
              icon: { icon: 'tabler-settings' },
              children: [
                { title: 'Roles', to: null },
                { title: 'Permissions', to: null },
              ],
            },
          ],
        },
      ]
      