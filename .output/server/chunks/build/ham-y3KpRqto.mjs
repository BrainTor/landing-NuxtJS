import { _ as __nuxt_component_0 } from './nuxt-link-DRGY1ko4.mjs';
import { B as Back_Button } from './Back_Button-C93Qb7p-.mjs';
import axios from 'axios';
import { u as useHead } from './index-C2merokO.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { s as setInterval } from './interval-gl53xdpR.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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
  name: "ham",
  data() {
    return {
      money: 0,
      lvl: 1,
      money_per_h: 900,
      energy: 100,
      money_per_click: 1,
      one_time: true,
      img_src: require("@/assets/img/games/coin1.png"),
      sources: [
        require("@/assets/img/games/coin2.png"),
        require("@/assets/img/games/coin3.png"),
        require("@/assets/img/games/coin4.png"),
        require("@/assets/img/games/coin5.png"),
        require("@/assets/img/games/coin6.png"),
        require("@/assets/img/games/coin7.png")
      ],
      startTime: 0,
      endTime: 0,
      local_ref: null,
      is_mobile: false
    };
  },
  components: {
    Back_Button
  },
  methods: {
    async send_location(ref, time) {
      axios.post(`http://${this.$config.public.NUXT_APP_BACK_IP}:${this.$config.public.NUXT_APP_BACK_PORT}/send_location`, {
        location: "game_ham",
        referal: ref,
        time
      });
    },
    click_button() {
      if (this.energy <= 0)
        return;
      this.money += this.money_per_click;
      this.energy -= this.money_per_click;
      this.$refs.main_but.classList.add("animate");
      setTimeout(() => {
        this.$refs.main_but.classList.remove("animate");
      }, 301);
      localStorage.setItem("money", this.money);
      localStorage.setItem("energy", this.energy);
    },
    update_money() {
      setTimeout(() => {
        if (this.money > 1e3 && this.lvl == 1) {
          this.lvl++;
          this.energy = this.energy + 500;
          this.money_per_click += 10;
          this.img_src = this.sources[0];
          localStorage.setItem("lvl", this.lvl);
          localStorage.setItem("energy", this.energy);
          localStorage.setItem("money_per_click", this.money_per_click);
        }
        if (this.money > 1e4 && this.lvl == 2) {
          this.lvl++;
          this.energy = parseInt(this.energy) + 500;
          this.img_src = this.sources[1];
          this.money_per_click += 20;
          localStorage.setItem("lvl", this.lvl);
          localStorage.setItem("energy", this.energy);
          localStorage.setItem("money_per_click", this.money_per_click);
        }
        if (this.money > 1e5 && this.lvl == 3) {
          this.lvl++;
          this.energy = parseInt(this.energy) + 500;
          this.img_src = this.sources[2];
          this.money_per_click += 30;
          localStorage.setItem("lvl", this.lvl);
          localStorage.setItem("energy", this.energy);
          localStorage.setItem("money_per_click", this.money_per_click);
        }
        if (this.money > 1e6 && this.lvl == 4) {
          this.lvl++;
          this.energy = parseInt(this.energy) + 500;
          this.img_src = this.sources[3];
          this.money_per_click += 40;
          localStorage.setItem("lvl", this.lvl);
          localStorage.setItem("energy", this.energy);
          localStorage.setItem("money_per_click", this.money_per_click);
        }
        if (this.money > 1e7 && this.lvl == 5) {
          this.lvl++;
          this.energy = parseInt(this.energy) + 500;
          this.img_src = this.sources[4];
          this.money_per_click += 52;
          localStorage.setItem("lvl", this.lvl);
          localStorage.setItem("energy", this.energy);
          localStorage.setItem("money_per_click", this.money_per_click);
        }
        if (this.money > 1e8 && this.lvl == 6) {
          this.lvl++;
          this.energy = parseInt(this.energy) + 500;
          this.img_src = this.sources[5];
          this.money_per_click += 60;
          localStorage.setItem("lvl", this.lvl);
          localStorage.setItem("energys", this.energy);
          localStorage.setItem("money_per_click", this.money_per_click);
        }
        setTimeout(() => {
          this.money += this.money_per_h / 3600;
          localStorage.setItem("money", this.money);
          this.update_money();
        }, 400);
      }, 600);
    },
    updateMetaTags() {
      useHead({
        title: "\u041F\u043E\u0447\u0442\u0438 Hamster Combat",
        meta: [
          {
            name: "description",
            content: "\u0418\u0433\u0440\u0430 \u043F\u043E \u043C\u043E\u0442\u0438\u0432\u0430\u043C Hamster Combat \u0418 NotCoin \u0432 \u043D\u0435\u0439 \u0432\u044B \u043D\u0435 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442\u0435, \u043D\u043E \u0445\u043E\u0440\u043E\u0448\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u0442\u0435 \u0432\u0440\u0435\u043C\u044F!"
          },
          {
            name: "keywords",
            content: "Hammster Combat,Hammster Combat online, \u0445\u043E\u043C\u044F\u043A , \u0438\u0433\u0440\u0430 \u0445\u043E\u043C\u044F\u043A, \u0445\u043E\u043C\u044F\u043A \u0438\u0433\u0440\u0430\u0442\u044C"
          }
        ]
      });
    }
  },
  created() {
    this.updateMetaTags();
  },
  mounted() {
    if ((void 0).innerWidth < 900)
      this.is_mobile = true;
    this.startTime = /* @__PURE__ */ new Date();
    if (localStorage.getItem("ref") != null)
      this.local_ref = localStorage.getItem("ref");
    if (this.one_time) {
      this.one_time = false;
      setInterval();
    }
    if (localStorage.getItem("money") != null)
      this.money = parseFloat(localStorage.getItem("money"));
    if (localStorage.getItem("energy") != null)
      this.energy = parseFloat(localStorage.getItem("energy"));
    if (localStorage.getItem("lvl") != null)
      this.lvl = parseInt(localStorage.getItem("lvl"));
    if (localStorage.getItem("money_per_click") != null)
      this.money_per_click = parseInt(localStorage.getItem("money_per_click"));
    this.update_money();
    if (this.money > 1e3 && this.lvl == 2)
      this.img_src = this.sources[0];
    if (this.money > 1e4 && this.lvl == 3)
      this.img_src = this.sources[1];
    if (this.money > 1e5 && this.lvl == 4)
      this.img_src = this.sources[2];
    if (this.money > 1e6 && this.lvl == 5)
      this.img_src = this.sources[3];
    if (this.money > 1e7 && this.lvl == 6)
      this.img_src = this.sources[4];
    if (this.money > 1e8 && this.lvl == 7)
      this.img_src = this.sources[5];
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main_container_game ham_page_mobile" }, _attrs))} data-v-390b0fa6>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/study" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Back_Button, { style: { "position": "absolute", "top": "50px", "left": "4%" } }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Back_Button, { style: { "position": "absolute", "top": "50px", "left": "4%" } })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="row_ham" data-v-390b0fa6>`);
  if (!$data.is_mobile) {
    _push(`<div data-v-390b0fa6><h2 data-v-390b0fa6>\u0412\u0430\u0448 \u0443\u0440\u043E\u0432\u0435\u043D\u044C:</h2><p data-v-390b0fa6>${ssrInterpolate(this.lvl)}</p></div>`);
  } else {
    _push(`<div data-v-390b0fa6><h3 data-v-390b0fa6>\u0423\u0440\u043E\u0432\u0435\u043D\u044C:</h3><p data-v-390b0fa6>${ssrInterpolate(this.lvl)}</p></div>`);
  }
  if (!$data.is_mobile) {
    _push(`<div data-v-390b0fa6><h2 data-v-390b0fa6>\u0412\u0430\u0448\u0438 \u0434\u0435\u043D\u044C\u0433\u0438:</h2><p style="${ssrRenderStyle({ "color": "#00FF00" })}" data-v-390b0fa6>${ssrInterpolate(this.money)}$</p></div>`);
  } else {
    _push(`<div data-v-390b0fa6><h3 data-v-390b0fa6>\u0414\u0435\u043D\u044C\u0433\u0438:</h3><p style="${ssrRenderStyle({ "color": "#00FF00" })}" data-v-390b0fa6>${ssrInterpolate(this.money)}$</p></div>`);
  }
  _push(`</div><button style="${ssrRenderStyle({ "width": "fit-content", "background-color": "transparent", "border": "0px" })}" data-v-390b0fa6><img${ssrRenderAttr("src", $data.img_src)} class="ham_img_mobile" width="600px" style="${ssrRenderStyle({ "cursor": "pointer", "-webkit-tap-highlight-color": "transparent", "user-select": "none", "outline": "none" })}" data-v-390b0fa6></button><div class="row_ham" data-v-390b0fa6>`);
  if (!$data.is_mobile) {
    _push(`<div data-v-390b0fa6><h2 data-v-390b0fa6>\u0412\u0430\u0448\u0430 \u044D\u043D\u0435\u0440\u0433\u0438\u044F:</h2><p data-v-390b0fa6>${ssrInterpolate(this.energy)}</p></div>`);
  } else {
    _push(`<div data-v-390b0fa6><h3 data-v-390b0fa6>\u042D\u043D\u0435\u0440\u0433\u0438\u044F:</h3><p data-v-390b0fa6>${ssrInterpolate(this.energy)}</p></div>`);
  }
  if (!$data.is_mobile) {
    _push(`<div data-v-390b0fa6><h2 data-v-390b0fa6>\u0412\u0430\u0448\u0438 \u0434\u0435\u043D\u044C\u0433\u0438 \u0432 \u0447\u0430\u0441:</h2><p data-v-390b0fa6>${ssrInterpolate(this.money_per_h)}</p></div>`);
  } else {
    _push(`<div data-v-390b0fa6><h3 data-v-390b0fa6>\u0414\u0435\u043D\u044C\u0433\u0438 \u0432 \u0447\u0430\u0441:</h3><p data-v-390b0fa6>${ssrInterpolate(this.money_per_h)}</p></div>`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/games/ham.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ham = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-390b0fa6"]]);

export { ham as default };
//# sourceMappingURL=ham-y3KpRqto.mjs.map
