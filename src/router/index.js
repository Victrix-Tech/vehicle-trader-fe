import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WishlistView from '@/views/WishlistView.vue'
import VendorLogView from '@/views/Vendor/VendorLogView.vue'
import VendorSignInView from '@/views/Vendor/VendorSignInView.vue'
import AdminLogView from '@/views/Admin/AdminLogView.vue'
import AdminSignInView from '@/views/Admin/AdminSignInView.vue'
import VendorDashView from '@/views/Vendor/VendorDashView.vue'
import CustomerLogView from '@/views/Customer/CustomerLogView.vue'
import CustomerSignInView from '@/views/Customer/CustomerSignInView.vue'
import VehicleSalesSingle from '@/views/VehicleSalesSingle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    },
    {
      path: '/vendorSignIn',
      name: 'vendorSignIn',
      component: VendorSignInView,
    },
    {
      path: '/AdminLog',
      name: 'AdminLog',
      component: AdminLogView,
    },
    {
      path: '/AdminSignIn',
      name: 'AdminSignIn',
      component: AdminSignInView
    },
    {
      path: '/vendordash',
      name: 'vendordash',
      component: VendorDashView,
    },
    {
      path: '/vehiclesale',
      name: 'vehiclesale',
      component: VehicleSalesSingle,
    }
  ],
})

export default router
