import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { B as Back_Button } from './Back_Button-C93Qb7p-.mjs';
import axios from 'axios';
import { u as useHead } from './index-C2merokO.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  name: "cross",
  methods: {
    button_click(ref) {
      if (this.$refs[ref].innerText == "-" && !this.is_win) {
        this.$refs[ref].innerText = this.cross_or_null;
        this.cross_or_null = this.cross_or_null == "x" ? "0" : "x";
      }
      this.check_winner();
      setTimeout(() => {
        if (this.is_win)
          alert("\u0415\u0441\u0442\u044C \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C!");
      }, 100);
    },
    check_winner() {
      if (this.$refs.button1.innerText == this.$refs.button2.innerText && this.$refs.button1.innerText != "-" && this.$refs.button2.innerText == this.$refs.button3.innerText)
        return this.is_win = true;
      else if (this.$refs.button4.innerText == this.$refs.button5.innerText && this.$refs.button4.innerText != "-" && this.$refs.button5.innerText == this.$refs.button6.innerText)
        return this.is_win = true;
      else if (this.$refs.button7.innerText == this.$refs.button8.innerText && this.$refs.button7.innerText != "-" && this.$refs.button8.innerText == this.$refs.button9.innerText)
        return this.is_win = true;
      else if (this.$refs.button1.innerText == this.$refs.button4.innerText && this.$refs.button1.innerText != "-" && this.$refs.button4.innerText == this.$refs.button7.innerText)
        return this.is_win = true;
      else if (this.$refs.button2.innerText == this.$refs.button5.innerText && this.$refs.button2.innerText != "-" && this.$refs.button5.innerText == this.$refs.button8.innerText)
        return this.is_win = true;
      else if (this.$refs.button3.innerText == this.$refs.button6.innerText && this.$refs.button3.innerText != "-" && this.$refs.button6.innerText == this.$refs.button9.innerText)
        return this.is_win = true;
      else if (this.$refs.button1.innerText == this.$refs.button5.innerText && this.$refs.button1.innerText != "-" && this.$refs.button5.innerText == this.$refs.button9.innerText)
        return this.is_win = true;
      else if (this.$refs.button3.innerText == this.$refs.button5.innerText && this.$refs.button3.innerText != "-" && this.$refs.button5.innerText == this.$refs.button7.innerText)
        return this.is_win = true;
    },
    async send_location(ref, time) {
      axios.post(`http://${this.$config.public.NUXT_APP_BACK_IP}:${this.$config.public.NUXT_APP_BACK_PORT}/send_location`, {
        location: "game_cross",
        referal: ref,
        time
      });
    },
    updateMetaTags() {
      useHead({
        title: "\u041A\u0440\u0435\u0441\u0442\u0438\u043A\u0438-\u043D\u043E\u043B\u0438\u043A\u0438 Silver-tech",
        meta: [
          {
            name: "description",
            content: "\u0421\u0430\u043C\u0430\u044F \u0437\u043D\u0430\u043C\u0435\u043D\u0438\u0442\u0430\u044F \u0438\u0433\u0440\u0430, \u043C\u043E\u0436\u043D\u043E \u0441\u044B\u0433\u0440\u0430\u0442\u044C \u0441 \u0434\u0440\u0443\u0433\u043E\u043C \u043D\u0430 \u043E\u0434\u043D\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435"
          },
          {
            name: "keywords",
            content: "\u043A\u0440\u0435\u0441\u0442\u0438\u043A\u0438 \u043D\u043E\u043B\u0438\u043A\u0438, \u043A\u0440\u0435\u0441\u0442\u0438\u043A\u0438-\u043D\u043E\u043B\u0438\u043A\u0438, cross or null, \u043A\u0440\u0435\u0441\u0442\u0438\u043A\u0438-\u043D\u043E\u043B\u0438\u043A\u0438 \u0438\u0433\u0440\u0430\u0442\u044C, \u0438\u0433\u0440\u0430\u0442\u044C, \u0438\u0433\u0440\u0430"
          }
        ]
      });
    }
  },
  created() {
    this.updateMetaTags();
  },
  data() {
    return {
      cross_or_null: "x",
      is_win: false,
      startTime: 0,
      endTime: 0,
      local_ref: null
    };
  },
  components: {
    Back_Button
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main_container_game" }, _attrs))} data-v-71df8f1f>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/study" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Back_Button, { style: { "margin-left": "-125px", "margin-bottom": "20px", "color": "white !important" } }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Back_Button, { style: { "margin-left": "-125px", "margin-bottom": "20px", "color": "white !important" } })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div data-v-71df8f1f><div class="row_button" data-v-71df8f1f><button class="button" data-v-71df8f1f>-</button><button class="button" data-v-71df8f1f>-</button><button class="button" data-v-71df8f1f>-</button></div><div class="row_button" data-v-71df8f1f><button class="button" data-v-71df8f1f>-</button><button class="button" data-v-71df8f1f>-</button><button class="button" data-v-71df8f1f>-</button></div><div class="row_button" data-v-71df8f1f><button class="button" data-v-71df8f1f>-</button><button class="button" data-v-71df8f1f>-</button><button class="button" data-v-71df8f1f>-</button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/games/cross.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cross = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-71df8f1f"]]);

export { cross as default };
//# sourceMappingURL=cross-CLxFrDg-.mjs.map
