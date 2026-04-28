router.beforeEach((to, from, next) => {
  // This code can run before each route change
  next();
});

const routes = [
  {
    path: '/weather',
    component: WeatherView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;