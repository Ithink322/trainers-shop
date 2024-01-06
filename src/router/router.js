import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/pages/MainPage.vue";
import BrandPage from "../components/pages/BrandPage.vue";
import AboutCompanyPage from "../components/pages/AboutCompanyPage.vue";
import OurTeamPage from "../components/pages/OurTeamPage.vue";
import OurProjectsPage from "../components/pages/OurProjectsPage.vue";
import WhereToBuyPage from "../components/pages/WhereToBuyPage.vue";
import ProjectPage from "../components/pages/ProjectPage.vue";
import BlogPage from "../components/pages/BlogPage.vue";
import ContactsPage from "../components/pages/ContactsPage.vue";
import PrivacyPolicyPage from "../components/pages/PrivacyPolicyPage.vue";
import CatalogPage from "../components/pages/CatalogPage.vue";
import CurrentItem from "../components/pages/CurrentItem.vue";
import Cart from "../components/pages/Cart.vue";
import FavoritesPage from "../components/pages/FavoritesPage.vue";
import ComparisonPage from "../components/pages/ComparisonPage.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/BrandPage/:title/:imgSource",
    name: "BrandPage",
    component: BrandPage,
  },
  {
    path: "/AboutCompanyPage",
    component: AboutCompanyPage,
  },
  {
    path: "/OurTeamPage",
    component: OurTeamPage,
  },
  {
    path: "/OurProjectsPage",
    component: OurProjectsPage,
  },
  {
    path: "/WhereToBuyPage",
    component: WhereToBuyPage,
  },
  {
    path: "/ProjectPage/:projectNum/:title/:logoSrc/:heroSrc/:heroSrcFrom1024px",
    name: "ProjectPage",
    component: ProjectPage,
  },
  {
    path: "/BlogPage",
    component: BlogPage,
  },
  {
    path: "/ContactsPage",
    component: ContactsPage,
  },
  {
    path: "/PrivacyPolicyPage",
    component: PrivacyPolicyPage,
  },
  {
    path: "/CatalogPage",
    component: CatalogPage,
  },
  {
    path: "/CurrentItem",
    component: CurrentItem,
  },
  {
    path: "/Cart",
    component: Cart,
  },
  {
    path: "/FavoritesPage",
    component: FavoritesPage,
  },
  {
    path: "/ComparisonPage",
    component: ComparisonPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
