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
/* import App from "../App.vue"; */

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
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
