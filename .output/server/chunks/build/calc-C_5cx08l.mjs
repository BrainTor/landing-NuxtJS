import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { B as Back_Button } from './Back_Button-C93Qb7p-.mjs';
import { u as useHead } from './index-C2merokO.mjs';
import axios from 'axios';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@unhead/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-brands-svg-icons';

const _sfc_main = {
  name: "calc",
  data() {
    return {
      answer: "",
      startTime: 0,
      endTime: 0,
      local_ref: null
    };
  },
  components: {
    Back_Button
  },
  methods: {
    calc_res(value) {
      switch (value) {
        case "+":
          this.answer = parseInt(this.$refs.numb1.value) + parseInt(this.$refs.numb2.value);
          break;
        case "-":
          this.answer = parseInt(this.$refs.numb1.value) - parseInt(this.$refs.numb2.value);
          break;
        case "*":
          this.answer = parseInt(this.$refs.numb1.value) * parseInt(this.$refs.numb2.value);
          break;
        case "/":
          this.answer = parseInt(this.$refs.numb1.value) / parseInt(this.$refs.numb2.value);
          break;
      }
    },
    async send_location(ref, time) {
      axios.post(`http://${this.$config.public.NUXT_APP_BACK_IP}:${this.$config.public.NUXT_APP_BACK_PORT}/send_location`, {
        location: "game_calc",
        referal: ref,
        time
      });
    },
    updateMetaTags() {
      useHead({
        title: "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 Silver-tech",
        meta: [
          {
            name: "description",
            content: "\u041F\u0440\u043E\u0441\u0442\u043E\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C, \u043F\u0440\u043E\u0439\u0434\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0443 \u043C\u0435\u043D\u044F"
          },
          {
            name: "keywords",
            content: "\u041F\u0440\u043E\u0441\u0442\u043E\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440, \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440, \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u043E\u0432, \u043F\u0440\u043E\u0441\u0442\u044B\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u044B, \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u043E\u043D\u043B\u0430\u0439\u043D"
          }
        ]
      });
    }
  },
  created() {
    this.updateMetaTags();
  },
  mounted() {
    this.startTime = /* @__PURE__ */ new Date();
    if (localStorage.getItem("ref") != null)
      this.local_ref = localStorage.getItem("ref");
  },
  async beforeUnmount() {
    this.endTime = /* @__PURE__ */ new Date();
    let totalTimeSpent = Math.floor((this.endTime - this.startTime) / 1e3);
    totalTimeSpent = Math.floor(totalTimeSpent / 60) != 0 ? `\u041C\u0438\u043D\u0443\u0442: ${Math.floor(totalTimeSpent / 60)}, \u0421\u0435\u043A\u0443\u043D\u0434: ${Math.floor(totalTimeSpent % 60)}` : `\u0421\u0435\u043A\u0443\u043D\u0434: ${Math.floor(totalTimeSpent % 60)}`;
    await this.send_location(this.local_ref, totalTimeSpent);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_Back_Button = resolveComponent("Back_Button");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main_container_game" }, _attrs))} data-v-dfde0412><div class="calcul" data-v-dfde0412>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/study" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Back_Button, { style: { "margin-left": "-15px" } }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Back_Button, { style: { "margin-left": "-15px" } })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 data-v-dfde0412>\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440</h3><div style="${ssrRenderStyle({ "display": "flex", "align-items": "center" })}" class="calc_mobile" data-v-dfde0412><input class="input_calc" type="number" data-v-dfde0412><div class="buttons_calc_mobile" data-v-dfde0412><div data-v-dfde0412><button class="button_chast" data-v-dfde0412>+</button><button class="button_chast" data-v-dfde0412>-</button></div><div data-v-dfde0412><button class="button_chast" data-v-dfde0412>*</button><button class="button_chast" data-v-dfde0412>/</button></div></div><input class="input_calc" type="number" data-v-dfde0412></div><p data-v-dfde0412>\u0412\u0430\u0448 \u043E\u0442\u0432\u0435\u0442: <strong data-v-dfde0412>${ssrInterpolate(this.answer)}</strong></p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/games/calc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const calc = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dfde0412"]]);

export { calc as default };
//# sourceMappingURL=calc-C_5cx08l.mjs.map
