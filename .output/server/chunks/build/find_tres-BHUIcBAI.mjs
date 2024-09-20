import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import axios from 'axios';
import { u as useHead } from './index-C2merokO.mjs';
import { resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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
  name: "find_tres",
  data() {
    return {
      win_number: -5,
      chest_count: 3,
      chests: {},
      caps: {},
      is_clicked: false,
      is_win: false,
      chest: null,
      diamond: null,
      cap: null,
      startTime: 0,
      endTime: 0,
      local_ref: null,
      is_mobile: false
    };
  },
  mounted() {
    this.is_mobile = (void 0).innerWidth < 700;
    this.startTime = /* @__PURE__ */ new Date();
    if (localStorage.getItem("ref") != null)
      this.local_ref = localStorage.getItem("ref");
    this.generate_win_number();
    this.chests["chest1"] = this.$refs.chest1;
    this.chests["chest2"] = this.$refs.chest2;
    this.chests["chest3"] = this.$refs.chest3;
    this.caps["cap1"] = this.$refs.cap1;
    this.caps["cap2"] = this.$refs.cap2;
    this.caps["cap3"] = this.$refs.cap3;
  },
  methods: {
    generate_win_number() {
      this.win_number = Math.round(Math.random() * this.chest_count);
      this.win_number = this.win_number == 0 ? 1 : this.win_number;
    },
    click_button(id) {
      if (!this.is_clicked) {
        this.diamond = (void 0).createElement("img");
        this.diamond.setAttribute("id", "diamond");
        this.diamond.setAttribute("src", require("@/assets/img/diamond.png"));
        this.diamond.style = `
                width:30px;
                position:absolute;
                top:3%;
                left:42%;
                z-index:-1;
                `;
        this.chest = this.chests["chest" + this.win_number];
        this.chest.appendChild(this.diamond);
        this.cap = this.caps["cap" + id];
        this.cap.classList.add("rotated");
        this.is_clicked = true;
        if (this.win_number == id) {
          this.is_win = true;
          this.$refs.title.innerText = "\u0412\u0430\u043C \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u044B\u0441\u043A\u0430\u0442\u044C \u0432\u0435\u0440\u043D\u044B\u0439 \u0441\u0443\u043D\u0434\u0443\u043A, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 '\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C' \u0438 \u043F\u043E\u043F\u044B\u0442\u0430\u0439\u0442\u0435 \u0443\u0434\u0430\u0447\u0443 \u043D\u0430 \u0431\u043E\u043B\u0435\u0435 \u0441\u043B\u043E\u0436\u043D\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435";
        } else
          this.$refs.title.innerText = "\u0412\u044B \u0432\u044B\u0431\u0440\u0430\u043B\u0438, \u043D\u0435\u043F\u0440\u0430\u0432\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u0443\u043D\u0434\u0443\u043A, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443";
      }
    },
    new_lvl() {
      this.cap.classList.remove("rotated");
      this.chest.removeChild(this.diamond);
      this.chest = null;
      this.diamond = null;
      this.cap = null;
      this.is_win = false;
      this.is_clicked = false;
      this.chest_count++;
      this.$refs.title.innerText = "\u041F\u043E\u043F\u044B\u0442\u0430\u0439\u0442\u0435 \u0443\u0434\u0430\u0447\u0443 \u0441\u043D\u043E\u0432\u0430!";
      this.generate_win_number();
      let new_chest = (void 0).createElement("div");
      new_chest.className = "chest";
      let chest_ref_name = "chest" + this.chest_count;
      this.chests[chest_ref_name] = new_chest;
      let new_cap = (void 0).createElement("div");
      new_cap.className = "cap";
      let cap_ref_name = "cap" + this.chest_count;
      this.caps[cap_ref_name] = new_cap;
      let new_lock = (void 0).createElement("div");
      new_lock.className = "lock";
      this.caps[cap_ref_name].appendChild(new_lock);
      this.chests[chest_ref_name].appendChild(this.caps[cap_ref_name]);
      let new_base = (void 0).createElement("div");
      new_base.className = "base";
      this.chests[chest_ref_name].appendChild(new_base);
      this.chests[chest_ref_name].addEventListener("click", () => {
        this.click_button(this.chest_count - 1);
      });
      this.$refs.chest_row.appendChild(this.chests[chest_ref_name]);
    },
    async send_location(ref, time) {
      axios.post(`http://${this.$config.public.NUXT_APP_BACK_IP}:${this.$config.public.NUXT_APP_BACK_PORT}/send_location`, {
        location: "game_tres",
        referal: ref,
        time
      });
    },
    updateMetaTags() {
      useHead({
        title: "\u041F\u043E\u0438\u0441\u043A \u0441\u043E\u043A\u0440\u043E\u0432\u0438\u0449 Silver-tech",
        meta: [
          {
            name: "description",
            content: "\u0418\u0433\u0440\u0430 \u043F\u043E \u043C\u043E\u0442\u0438\u0432\u0430\u043C minecraft \u0441 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0430\u0437\u0430\u0440\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u0430\u043C\u0438!"
          },
          {
            name: "keywords",
            content: "minecraft, \u0441\u0443\u043D\u0434\u0443\u043A \u0438\u0437 \u043C\u0430\u0439\u043D\u043A\u0440\u0430\u0444\u0442\u0430, \u0438\u0433\u0440\u0430, \u0438\u0433\u0440\u0430 \u043E\u043D\u043B\u0430\u0439\u043D,\u043C\u0430\u0438\u043D\u043A\u0440\u0430\u0444\u0442,\u043C\u0430\u0439\u043D\u043A\u0440\u0430\u0444\u0442"
          }
        ]
      });
    }
  },
  created() {
    this.updateMetaTags();
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
  const _component_fa = resolveComponent("fa");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "main_container_game",
    style: { "justify-content": "space-around !important" }
  }, _attrs))} data-v-3420c4f0><h2 style="${ssrRenderStyle({ "color": "whitesmoke", "margin-bottom": "20px", "text-align": "center" })}" class="title_tres" data-v-3420c4f0>\u0412 \u043E\u0434\u043D\u043E\u043C \u0438\u0437 \u0441\u0443\u043D\u0434\u0443\u043A\u043E\u0432 \u0441\u043F\u0440\u044F\u0442\u0430\u043D \u0430\u043B\u043C\u0430\u0437, \u043F\u043E\u0441\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044C \u0435\u0433\u043E \u043D\u0430\u0439\u0442\u0438 :)</h2><div class="chest_rows" style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap", "width": "100%", "justify-content": "center" })}" data-v-3420c4f0><div class="chest" data-v-3420c4f0><div class="cap" data-v-3420c4f0><div class="lock" data-v-3420c4f0></div></div><div class="base" data-v-3420c4f0></div></div><div class="chest" data-v-3420c4f0><div class="cap" data-v-3420c4f0><div class="lock" data-v-3420c4f0></div></div><div class="base" data-v-3420c4f0></div></div><div class="chest" data-v-3420c4f0><div class="cap" data-v-3420c4f0><div class="lock" data-v-3420c4f0></div></div><div class="base" data-v-3420c4f0></div></div></div><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}" data-v-3420c4f0><div class="buttons" data-v-3420c4f0>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/study" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (!$data.is_mobile) {
          _push2(`<button class="controll_button" data-v-3420c4f0${_scopeId}>\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434</button>`);
        } else {
          _push2(`<button class="controll_button" data-v-3420c4f0${_scopeId}>`);
          _push2(ssrRenderComponent(_component_fa, { icon: "chevron-left" }, null, _parent2, _scopeId));
          _push2(`</button>`);
        }
      } else {
        return [
          !$data.is_mobile ? (openBlock(), createBlock("button", {
            key: 0,
            class: "controll_button"
          }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434")) : (openBlock(), createBlock("button", {
            key: 1,
            class: "controll_button"
          }, [
            createVNode(_component_fa, { icon: "chevron-left" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  if (!$data.is_mobile) {
    _push(`<button class="controll_button" onclick="window.location.reload()" data-v-3420c4f0>\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C</button>`);
  } else {
    _push(`<button class="controll_button" onclick="window.location.reload()" data-v-3420c4f0>`);
    _push(ssrRenderComponent(_component_fa, { icon: "rotate-right" }, null, _parent));
    _push(`</button>`);
  }
  if ($data.is_win && !$data.is_mobile) {
    _push(`<button class="controll_button" data-v-3420c4f0>\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C</button>`);
  } else if ($data.is_win) {
    _push(`<button class="controll_button" data-v-3420c4f0>`);
    _push(ssrRenderComponent(_component_fa, { icon: "chevron-right" }, null, _parent));
    _push(`</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/games/find_tres.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const find_tres = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3420c4f0"]]);

export { find_tres as default };
//# sourceMappingURL=find_tres-BHUIcBAI.mjs.map
