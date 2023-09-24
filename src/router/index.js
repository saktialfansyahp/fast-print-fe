import { createRouter, createWebHistory } from "vue-router";
import ProductView from "../views/ProductView.vue";
import AddProduct from "../views/AddProduct.vue";
import EditProduct from "../views/EditProduct.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: AboutView,
  },
  {
    path: "/product",
    name: "Product",
    component: ProductView,
  },
  {
    path: "/addproduct",
    name: "Add Product",
    component: AddProduct,
  },
  {
    path: "/editproduct/:id",
    name: "Edit Product",
    component: EditProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
