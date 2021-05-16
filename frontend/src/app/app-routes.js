import Vue from "vue";
import Router from "vue-router";

import { AppPageNotFound } from "./shared/components";

export default [
  {
    path: "/",
    redirect: "/todos",
  },
  {
    path: "*",
    name: "page-not-found",
    component: AppPageNotFound,
  },
];
