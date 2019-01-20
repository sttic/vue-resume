import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Paper",
      component: loadView("Paper")
    },
    {
      path: "/plain",
      name: "Plain",
      component: loadView("Plain")
    },
    {
      path: "/pdf",
      name: "PDF",
      component: loadView("PDF")
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
