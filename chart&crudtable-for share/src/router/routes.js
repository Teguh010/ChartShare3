
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/table/Home.vue') },
      { path: '/tableindex', component: () => import('pages/table/TableIndex.vue') },
      { path: '/homelead', component: () => import('pages/lead/HomeLead.vue') },
      { path: '/PageCharts', component: () => import('pages/MyChart/Chart.vue') },
      { path: '/pageauth', component: () => import('pages/pageAuth.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
