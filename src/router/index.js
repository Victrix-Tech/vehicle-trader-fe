// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Views
import HomeView from '@/views/HomeView.vue';
import WishlistView from '@/views/WishlistView.vue';
import VendorLogView from '@/views/Vendor/VendorLogView.vue';
import VendorSignInView from '@/views/Vendor/VendorSignInView.vue';
import VendorDashView from '@/views/Vendor/VendorDashView.vue';
import AdminLogView from '@/views/Admin/AdminLogView.vue';
import AdminSignInView from '@/views/Admin/AdminSignInView.vue';
import CustomerLogView from '@/views/Customer/CustomerLogView.vue';
import CustomerSignInView from '@/views/Customer/CustomerSignInView.vue';
import VehicleSalesSingle from '@/views/VehicleSalesSingle.vue';
import AdminDash from '@/views/Admin/AdminDashView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: WishlistView,
  },
  {
    path: '/vendorlog',
    name: 'vendorlog',
    component: VendorLogView,
    meta: { guestOnly: true }
  },
  {
    path: '/vendorSignIn',
    name: 'vendorSignIn',
    component: VendorSignInView,
    meta: { guestOnly: true }
  },
  {
    path: '/vendordash',
    name: 'vendordash',
    component: VendorDashView,
    meta: { requiresAuth: true, role: 'VENDOR' }

  },
  {
    path: '/AdminSignIn',
    name: 'AdminSignIn',
    component: AdminSignInView,
    meta: { guestOnly: true }
  },
  {
    path: '/vehiclesale',
    name: 'vehiclesale',
    component: VehicleSalesSingle,
  },
  {
    path: '/customerlog',
    name: 'customerlog',
    component: CustomerLogView,
  },
  {
    path: '/customersign',
    name: 'customersign',
    component: CustomerSignInView,
  },
  {
    path: '/AdminDash',
    name: 'AdminDash',
    component: AdminDash,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('_access_token');
  const person = JSON.parse(localStorage.getItem('_person') || '{}');

  const isAuthenticated = !!accessToken;
  const userRole = person?.userType;
  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: 'vendorSignIn' }); 
  }

  if (to.meta.guestOnly && isAuthenticated) {
    if (userRole === 'VENDOR') {
      return next({ name: 'vendordash' });
    } else if (userRole === 'ADMIN') {
      return next({ name: 'vendordash' }); 
    }
    return next({ name: '/' });
  }

  if (to.meta.role && to.meta.role !== userRole) {
    return next({ name: '/' });
  }

  return next();
});

export default router;
