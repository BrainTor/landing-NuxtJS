import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_0, b as __nuxt_component_2, c as __nuxt_component_1 } from './Footer_Component-BtI7u5vb.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import axios from 'axios';
import { u as useHead } from './index-C2merokO.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './interval-gl53xdpR.mjs';
import './nuxt-link-DRGY1ko4.mjs';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-brands-svg-icons';

const logo_rg = "" + buildAssetsURL("logo_rg.BglWPEcd.png");
const logo_delphin = "" + buildAssetsURL("logo_delphin.C3P7HKzz.png");
const logo_dela = "" + buildAssetsURL("logo_dela.JBM1_hzD.png");
const logo = "" + buildAssetsURL("logo.Du2Y6MpG.png");
const _sfc_main$1 = {
  name: "Card_progs",
  data() {
    return {
      object: {
        text: [
          `
                    \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F <strong>\u0426\u0422\u0422 Robograde</strong>  \u2014 \u044D\u0442\u043E \u0432\u0435\u0434\u0443\u0449\u0430\u044F \u0448\u043A\u043E\u043B\u0430 \u0440\u043E\u0431\u043E\u0442\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0438, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0430\u044F\u0441\u044F \u043D\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u0443 \u0434\u0435\u0442\u0435\u0439 \u0438 \u043F\u043E\u0434\u0440\u043E\u0441\u0442\u043A\u043E\u0432. \u0414\u043B\u044F \u044D\u0442\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0437\u0430\u0449\u0438\u0449\u0451\u043D\u043D\u044B\u0439 \u0432\u0435\u0431-\u0431\u0440\u0430\u0443\u0437\u0435\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0443\u0447\u0435\u0431\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432.
                    <br>
                    \u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u2014 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043C\u0435\u0442\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432, \u0437\u0430\u0449\u0438\u0449\u0451\u043D\u043D\u044B\u0445 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u043C \u043F\u0440\u0430\u0432\u043E\u043C, \u0431\u0435\u0437 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0438\u0445 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u043B\u0438\u0446\u0430\u043C. \u042D\u0442\u043E \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0438 \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044C \u0432\u0430\u0436\u043D\u044B\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B.
                    <br>
                    \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0441\u043D\u043E\u0432\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u2014 <strong>JavaFX</strong>, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u043B\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u044B\u0441\u043E\u043A\u043E\u043D\u0430\u0434\u0451\u0436\u043D\u043E\u0435 \u0438 \u0433\u0438\u0431\u043A\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0441 \u0443\u0447\u0451\u0442\u043E\u043C \u0432\u0441\u0435\u0445 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438.              
                    `,
          `
                    \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F <strong>\u0422\u041A \u0414\u0435\u043B\u044C\u0444\u0438\u043D</strong> \u2014 \u044D\u0442\u043E \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u043D\u043E \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u0440\u043E\u0437\u043D\u0438\u0447\u043D\u043E\u0439 \u0438 \u043E\u043F\u0442\u043E\u0432\u043E\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0435\u0439. \u0414\u043B\u044F \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0431\u044B\u043B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u043A\u043B\u0430\u0434\u0441\u043A\u043E\u0433\u043E \u0443\u0447\u0435\u0442\u0430.
                    <br>
                    \u042D\u0442\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0441 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C 1\u0421, \u0447\u0442\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u0435\u0441\u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043E\u0431\u043C\u0435\u043D \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u043C\u0435\u0436\u0434\u0443 \u0441\u043A\u043B\u0430\u0434\u043E\u043C \u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u0443\u0447\u0435\u0442\u0430. \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435 \u2014 \u043E\u0442 \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043E \u0438\u0445 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438. \u042D\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u0440\u0438\u0441\u043A \u043E\u0448\u0438\u0431\u043E\u043A, \u0443\u0441\u043A\u043E\u0440\u044F\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u0435\u0442 \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0443\u0447\u0435\u0442\u0430.
                    <br>
                    \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 <strong>Java \u0434\u043B\u044F Android</strong>, \u0447\u0442\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445 \u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0432 \u043B\u044E\u0431\u043E\u043C \u043C\u0435\u0441\u0442\u0435 \u0441\u043A\u043B\u0430\u0434\u0430.
                    `,
          `
                    \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F <strong>\u0417\u0410\u041E \u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u041C\u0438\u0440</strong>  \u2014 \u044D\u0442\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0435\u0435\u0441\u044F \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435, \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0449\u0435\u0435\u0441\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435\u043C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u043D\u0442\u0430\u0436\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u043E\u0437\u043D\u0438\u0447\u043D\u043E\u0439 \u0438 \u043E\u043F\u0442\u043E\u0432\u043E\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0435\u0439. \u0414\u043B\u044F \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u0438 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0431\u044B\u043B \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442.
                    <br>
                    \u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430 \u0441\u0430\u0439\u0442\u0430 \u2014 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0443\u0434\u043E\u0431\u043D\u0443\u044E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E\u0431 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u043B\u044F \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432. \u0412\u0435\u0431-\u0441\u0430\u0439\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u0438\u043D\u0442\u0443\u0438\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u043C, \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C \u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E \u0440\u0430\u0431\u043E\u0442\u044B, \u0447\u0442\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u043A \u043D\u0430 \u0441\u0442\u0430\u0446\u0438\u043E\u043D\u0430\u0440\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430\u0445, \u0442\u0430\u043A \u0438 \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445.
                    <br>
                    \u0414\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u044D\u0442\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0431\u044B\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438:
                    <strong>HTML, CSS \u0438 JavaScript</strong>  \u2014 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430.
                    <br>
                    <strong>Express.js</strong> \u2014 \u0434\u043B\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432.
                    \u0414\u0430\u043D\u043D\u044B\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0441\u0442\u0430\u043B \u0432\u0430\u0436\u043D\u044B\u043C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u043C \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044E \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044E \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C\u0438.
                    `,
          `
                    \u041D\u0430\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u043A, \u0445\u043E\u0447\u0443 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u0430 \u0441\u0430\u0439\u0442, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0432\u044B \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435\u0441\u044C. \u042D\u0442\u043E\u0442 \u0432\u0435\u0431-\u0440\u0435\u0441\u0443\u0440\u0441 \u0431\u044B\u043B \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0441\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D \u043C\u043D\u043E\u0439, \u0441 \u043D\u0443\u043B\u044F, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443 \u0438 \u0432\u0441\u0435 \u044D\u0442\u0430\u043F\u044B \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438.
                    <br>
                    \u0414\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B:
                    <br>
                    <strong>Vue3JS</strong> \u2014 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E, \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u043D\u043E\u0433\u043E \u0438 \u043E\u0442\u0437\u044B\u0432\u0447\u0438\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430.
                    <br>
                    <strong>NestJS</strong> \u2014 \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0439 \u0438 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043C\u043E\u0439 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0439 \u0447\u0430\u0441\u0442\u0438, \u0447\u0442\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u0442 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u0438 \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0441\u0430\u0439\u0442\u0430.
                    \u042D\u0442\u043E\u0442 \u043F\u0440\u043E\u0435\u043A\u0442 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u043C\u043E\u0438 \u043D\u0430\u0432\u044B\u043A\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434 \u0438 \u0431\u044D\u043A\u0435\u043D\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u044E \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0435 \u0432\u0435\u0431-\u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043D\u0430 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u0432\u044B\u0441\u043E\u043A\u0438\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438.
                    `
        ],
        companys: [
          "RoboGrade",
          "\u0422\u041A \u0414\u0435\u043B\u044C\u0444\u0438\u043D",
          "\u0417\u0410\u041E \u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u041C\u0438\u0440",
          "Silver-tech"
        ],
        imgs: [
          logo_rg,
          logo_delphin,
          logo_dela,
          logo
        ]
      },
      text_default: "",
      company_default: "",
      img_default: "",
      current_number: 0,
      transitionName: "slide-right"
      // По умолчанию слайд вправо
    };
  },
  mounted() {
    this.text_default = this.object.text[0];
    this.company_default = this.object.companys[0];
    this.img_default = this.object.imgs[0];
  },
  methods: {
    next_or_before(place) {
      let next_number;
      if (place == "right") {
        next_number = this.current_number + 1 == this.object.text.length ? 0 : this.current_number + 1;
        this.transitionName = "slide-left";
      } else {
        next_number = this.current_number == 0 ? this.object.text.length - 1 : this.current_number - 1;
        this.transitionName = "slide-right";
      }
      this.text_default = this.object.text[next_number];
      this.company_default = this.object.companys[next_number];
      this.img_default = this.object.imgs[next_number];
      this.current_number = next_number;
    },
    toggle_con() {
      this.$emit("toggle");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_fa = resolveComponent("fa");
  const _component_center = resolveComponent("center");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "align-items": "center", "padding-left": "20px", "padding-right": "20px" })}"><button class="contoll_card">`);
  _push(ssrRenderComponent(_component_fa, { icon: "circle-left" }, null, _parent));
  _push(`</button><div class="central_continer"><img${ssrRenderAttr("src", $data.img_default)} class="img_card"><h3>${ssrInterpolate($data.company_default)}</h3><p>${(_a = $data.text_default) != null ? _a : ""}</p></div><button class="contoll_card">`);
  _push(ssrRenderComponent(_component_fa, { icon: "circle-right" }, null, _parent));
  _push(`</button></div>`);
  _push(ssrRenderComponent(_component_center, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="connect_with_me"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_fa, { icon: "link" }, null, _parent2, _scopeId));
        _push2(` \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441\u043E \u043C\u043D\u043E\u0439 </button>`);
      } else {
        return [
          createVNode("button", {
            class: "connect_with_me",
            onClick: $options.toggle_con
          }, [
            createVNode(_component_fa, { icon: "link" }),
            createTextVNode(" \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441\u043E \u043C\u043D\u043E\u0439 ")
          ], 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Card_progs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Card_progs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + buildAssetsURL("agile.DElGtrV_.png");
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "" + buildAssetsURL("effective.CqCufuQN.png");
const _sfc_main = {
  name: "CodePage",
  components: {
    Footer_Component: __nuxt_component_4,
    Nav_Component: __nuxt_component_0,
    Modal_ads: __nuxt_component_2,
    Card_progs,
    Modal_Connect: __nuxt_component_1
  },
  data() {
    return {
      is_Visible_ads: false,
      randomTime: Math.round(Math.random() * (12e3 - 7e3) + 7e3),
      startTime: 0,
      endTime: 0,
      local_ref: null,
      isVisible: false,
      img_src: ""
    };
  },
  created() {
    this.updateMetaTags();
  },
  methods: {
    hadle_ads() {
      this.is_Visible_ads = !this.is_Visible_ads;
    },
    togle_Modal() {
      this.isVisible = !this.isVisible;
    },
    handle_navbar(data) {
      let check_el = this.$refs["section" + data];
      if (check_el)
        check_el.scrollIntoView({ behavior: "smooth" });
    },
    async send_location(ref, time) {
      await axios.post(`http://${this.$config.public.NUXT_APP_BACK_IP}:${this.$config.public.NUXT_APP_BACK_PORT}/send_location`, {
        location: "code_page",
        referal: ref,
        time
      });
    },
    updateMetaTags() {
      const env_link = this.$config.public.NUXT_APP_LINK;
      useHead({
        title: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 Silver - Tech",
        meta: [
          {
            name: "description",
            content: "\u0412\u044B\u043F\u043E\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B. \u041A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0438 \u043E\u043F\u044B\u0442\u043D\u044B\u0439 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0432\u043E\u043F\u043B\u043E\u0442\u0438\u0442\u044C \u0432 \u0436\u0438\u0437\u043D\u044C, \u0432\u0430\u0448\u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u0438\u0434\u0435\u0438"
          },
          {
            name: "keywords",
            content: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439,\u041A\u0440\u043E\u0441\u0441\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F,\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438,\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434,\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F,\u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430,\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432,\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432,\u041E\u043F\u044B\u0442\u043D\u044B\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A"
          },
          {
            property: "og:title",
            content: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 Silver - Tech"
          },
          {
            property: "og:description",
            content: "\u0412\u044B\u043F\u043E\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B. \u041A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0438 \u043E\u043F\u044B\u0442\u043D\u044B\u0439 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0432\u043E\u043F\u043B\u043E\u0442\u0438\u0442\u044C \u0432 \u0436\u0438\u0437\u043D\u044C, \u0432\u0430\u0448\u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u0438\u0434\u0435\u0438"
          },
          {
            property: "og_url",
            content: `${env_link}code`
          }
        ]
      });
    }
  },
  mounted() {
    let el = this.$refs.nav;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (sessionStorage.getItem("ads") == null) {
      setTimeout(this.hadle_ads, this.randomTime);
      sessionStorage.setItem("ads", true);
    }
    if (localStorage.getItem("ref") != null)
      this.local_ref = localStorage.getItem("ref");
    this.startTime = /* @__PURE__ */ new Date();
  },
  async beforeUnmount() {
    this.endTime = /* @__PURE__ */ new Date();
    let totalTimeSpent = Math.floor((this.endTime - this.startTime) / 1e3);
    totalTimeSpent = Math.floor(totalTimeSpent / 60) != 0 ? `\u041C\u0438\u043D\u0443\u0442: ${Math.floor(totalTimeSpent / 60)}, \u0421\u0435\u043A\u0443\u043D\u0434: ${Math.floor(totalTimeSpent % 60)}` : `\u0421\u0435\u043A\u0443\u043D\u0434: ${Math.floor(totalTimeSpent % 60)}`;
    await this.send_location(this.local_ref, totalTimeSpent);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal_ads = __nuxt_component_2;
  const _component_Modal_Connect = __nuxt_component_1;
  const _component_Nav_Component = __nuxt_component_0;
  const _component_Card_progs = resolveComponent("Card_progs");
  const _component_Footer_Component = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main_code" }, _attrs))} data-v-c3d46139>`);
  _push(ssrRenderComponent(_component_Modal_ads, {
    onClose_ads: $options.hadle_ads,
    isVisible_ads: $data.is_Visible_ads
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "font-size": "16.5px", "margin-top": "10px", "margin-bottom": "10px" })}" data-v-c3d46139${_scopeId}>\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448, \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0441\u043A\u0438\u0434\u043A\u0443<br data-v-c3d46139${_scopeId}>\u043D\u0430 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 10% </div>`);
      } else {
        return [
          createVNode("div", { style: { "font-size": "16.5px", "margin-top": "10px", "margin-bottom": "10px" } }, [
            createTextVNode("\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448, \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0441\u043A\u0438\u0434\u043A\u0443"),
            createVNode("br"),
            createTextVNode("\u043D\u0430 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 10% ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Modal_Connect, {
    isVisible: $data.isVisible,
    onClose: $options.togle_Modal
  }, null, _parent));
  _push(`<div data-v-c3d46139></div>`);
  _push(ssrRenderComponent(_component_Nav_Component, {
    place: "code",
    onScroll_to: $options.handle_navbar,
    class: "testrr"
  }, null, _parent));
  _push(`<section class="main_section" data-v-c3d46139><h1 style="${ssrRenderStyle({ "text-align": "center", "margin-top": "1rem", "margin-bottom": "1rem" })}" class="testr" data-v-c3d46139>\u042F \u0441\u043E\u0437\u0434\u0430\u044E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043D\u0430 \u0440\u0430\u0437\u043D\u044B\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u0445 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439</h1><p style="${ssrRenderStyle({ "text-align": "center", "font-size": "18.3px" })}" data-v-c3d46139> \u042D\u0442\u043E \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u0432\u043E\u043F\u043B\u043E\u0442\u0438\u0442\u044C \u0432\u0430\u0448\u0438 \u0438\u0434\u0435\u0438 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C. </p><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-evenly", "flex-wrap": "wrap", "margin-top": "1rem", "margin-bottom": "1rem" })}" data-v-c3d46139><div style="${ssrRenderStyle({ "width": "250px", "flex-direction": "column", "align-items": "center", "display": "flex" })}" data-v-c3d46139><img${ssrRenderAttr("src", _imports_0)} class="img_progs" width="115px" alt="" data-v-c3d46139><h2 data-v-c3d46139>\u0413\u0438\u0431\u043A\u043E\u0441\u0442\u044C</h2><p style="${ssrRenderStyle({ "text-align": "center", "font-size": "18.3px" })}" data-v-c3d46139>\u042F \u0440\u0430\u0431\u043E\u0442\u0430\u044E \u0441 \u0437\u0430\u043A\u0430\u0437\u0430\u043C\u0438 \u0440\u0430\u0437\u043D\u043E\u0439 \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0438 \u0441\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u0438</p></div><div style="${ssrRenderStyle({ "width": "250px", "flex-direction": "column", "align-items": "center", "display": "flex" })}" data-v-c3d46139><img class="img_progs"${ssrRenderAttr("src", _imports_1)} width="115px" alt="" data-v-c3d46139><h2 data-v-c3d46139>\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B</h2><p style="${ssrRenderStyle({ "text-align": "center", "font-size": "18.3px" })}" data-v-c3d46139> \u0421\u043E\u0437\u0434\u0430\u044E \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F, \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u044B \u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430 \u2013 \u0432\u0441\u0451, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430. </p></div><div style="${ssrRenderStyle({ "width": "250px", "flex-direction": "column", "align-items": "center", "display": "flex" })}" data-v-c3d46139><img class="img_progs"${ssrRenderAttr("src", _imports_2)} width="115px" alt="" data-v-c3d46139><h2 data-v-c3d46139>\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C</h2><p style="${ssrRenderStyle({ "text-align": "center", "font-size": "18.3px" })}" data-v-c3d46139>\u041C\u043E\u044F \u0446\u0435\u043B\u044C \u2013 \u0431\u044B\u0441\u0442\u0440\u043E\u0435 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447, \u0447\u0442\u043E\u0431\u044B \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442 \u0431\u044B\u043B \u0433\u043E\u0442\u043E\u0432 \u0432 \u043A\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0438\u0435 \u0441\u0440\u043E\u043A\u0438.</p></div></div></section><section data-v-c3d46139><div style="${ssrRenderStyle({ "width": "100%", "height": "fit-content", "position": "relative" })}" data-v-c3d46139><img${ssrRenderAttr("src", $data.img_src)} style="${ssrRenderStyle({ "width": "100% !important", "filter": "blur(5px)" })}" class="mobile_progs" data-v-c3d46139><div class="for_cont_progs" style="${ssrRenderStyle({ "position": "absolute", "z-index": "2", "width": "100% !important", "top": "0%", "left": "0%", "height": "100%", "display": "flex", "justify-content": "center", "align-items": "center" })}" data-v-c3d46139><div class="block_about" data-v-c3d46139><h1 style="${ssrRenderStyle({ "color": "white" })}" data-v-c3d46139>\u0411\u043E\u043B\u0435\u0435 30</h1><h3 style="${ssrRenderStyle({ "color": "white" })}" data-v-c3d46139>\u0414\u043E\u0432\u043E\u043B\u044C\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432</h3></div><div class="block_about" data-v-c3d46139><h1 style="${ssrRenderStyle({ "color": "white" })}" data-v-c3d46139>\u0411\u043E\u043B\u0435\u0435 40</h1><h3 style="${ssrRenderStyle({ "color": "white" })}" data-v-c3d46139>\u0417\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0441 \u043C\u043E\u0438\u043C \u0443\u0447\u0430\u0441\u0442\u0438\u0435\u043C</h3></div><div class="block_about" data-v-c3d46139><h1 style="${ssrRenderStyle({ "color": "white" })}" data-v-c3d46139>\u0411\u043E\u043B\u0435\u0435 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u0430</h1><h3 style="${ssrRenderStyle({ "color": "white" })}" data-v-c3d46139>\u041D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u043E\u0447\u0435\u043A \u043A\u043E\u0434\u0430</h3></div></div></div></section><section style="${ssrRenderStyle({ "background-color": "#f0f0f0", "padding-bottom": "20px", "padding-top": "20px" })}" data-v-c3d46139><h1 style="${ssrRenderStyle({ "text-align": "center" })}" data-v-c3d46139> \u041D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0440\u043E\u0441\u0442\u043E </h1><div style="${ssrRenderStyle({ "width": "100%", "justify-content": "space-evenly", "align-items": "center", "display": "flex", "margin-top": "20px", "flex-wrap": "wrap" })}" data-v-c3d46139><div style="${ssrRenderStyle({ "width": "370px" })}" data-v-c3d46139><div class="circle_element" data-v-c3d46139><div class="number_inside_circle" data-v-c3d46139>1</div></div><h2 style="${ssrRenderStyle({ "text-align": "center" })}" data-v-c3d46139>\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434</h2><p style="${ssrRenderStyle({ "font-size": "18.3px", "text-align": "center" })}" data-v-c3d46139>\u0412\u0441\u0435 \u0432\u0430\u0448\u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0435\u043D\u0438\u044F \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u043F\u043E\u0434 \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442.</p></div><div style="${ssrRenderStyle({ "width": "370px" })}" data-v-c3d46139><div class="circle_element" data-v-c3d46139><div class="number_inside_circle" data-v-c3d46139>2</div></div><h2 style="${ssrRenderStyle({ "text-align": "center" })}" data-v-c3d46139>\u041F\u0435\u0440\u0432\u044B\u0439 \u044D\u0442\u0430\u043F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E</h2><p style="${ssrRenderStyle({ "font-size": "18.3px", "text-align": "center" })}" data-v-c3d46139>\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u0438 \u043E\u0446\u0435\u043D\u043A\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u041C\u044B \u043E\u0431\u0441\u0443\u0434\u0438\u043C \u0432\u0441\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0438 \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043B\u0430\u043D.</p></div><div style="${ssrRenderStyle({ "width": "370px" })}" data-v-c3d46139><div class="circle_element" data-v-c3d46139><div class="number_inside_circle" data-v-c3d46139>3</div></div><h2 style="${ssrRenderStyle({ "text-align": "center" })}" data-v-c3d46139>\u0414\u0435\u043C\u043E\u043A\u0440\u0430\u0442\u0438\u0447\u043D\u044B\u0435 \u0438 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0435 \u0446\u0435\u043D\u044B</h2><p style="${ssrRenderStyle({ "font-size": "18.3px", "text-align": "center" })}" data-v-c3d46139>\u0412\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0437\u043D\u0430\u0435\u0442\u0435, \u0437\u0430 \u0447\u0442\u043E \u043F\u043B\u0430\u0442\u0438\u0442\u0435. \u0423 \u043D\u0430\u0441 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0446\u0435\u043D\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0433\u0438\u0431\u043A\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043F\u0440\u0430\u0432\u043E\u043A \u0438 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043E\u043A \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0438\u0445 \u0437\u0430\u0442\u0440\u0430\u0442.</p></div></div></section><section style="${ssrRenderStyle({ "padding-top": "20px", "padding-bottom": "20px" })}" data-v-c3d46139><h1 style="${ssrRenderStyle({ "text-align": "center" })}" data-v-c3d46139> \u041F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u044B </h1>`);
  _push(ssrRenderComponent(_component_Card_progs, { onToggle: $options.togle_Modal }, null, _parent));
  _push(`</section><div data-v-c3d46139>`);
  _push(ssrRenderComponent(_component_Footer_Component, { onToggle: $options.togle_Modal }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/code.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const code = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c3d46139"]]);

export { code as default };
//# sourceMappingURL=code-C1vnERnU.mjs.map
