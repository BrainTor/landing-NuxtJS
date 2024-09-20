import { a as buildAssetsURL } from '../routes/renderer.mjs';
import axios from 'axios';
import { s as setInterval } from './interval-gl53xdpR.mjs';
import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DRGY1ko4.mjs';

const _imports_0$1 = "" + buildAssetsURL("rocket.Daxyx0pz.png");
const _sfc_main$3 = {
  name: "Modal_ads",
  props: {
    isVisible_ads: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit("close_ads");
    },
    startTimer() {
      this.timer = setInterval();
    },
    formatTime(time) {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor(time % 3600 / 60);
      const seconds = time % 60;
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    },
    async send_ads() {
      if (this.$refs.number_input.value != "")
        axios.post(`http://${this.$config.public.NUXT_APP_BACK_IP}:${this.$config.public.NUXT_APP_BACK_PORT}/send_ads`, {
          number: this.$refs.number_input.value
        });
      else
        return this.is_number_bad = true;
      this.$emit("close_ads");
    }
  },
  data() {
    return {
      handleEscapeKey: null,
      timeRemaining: 3 * 3600 + 47 * 60,
      timer: null,
      is_number_bad: false
    };
  },
  mounted() {
    this.handleEscapeKey = (event) => {
      if (this.$refs.main_el != void 0) {
        if (event.key === "Escape")
          this.$emit("close_ads");
      }
    };
    (void 0).addEventListener("keydown", this.handleEscapeKey);
    this.startTimer();
  },
  beforeUnmount() {
    (void 0).removeEventListener("keydown", this.handleEscapeKey);
    clearInterval(this.timer);
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.isVisible_ads) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: "modal-container",
      ref: "main_el"
    }, _attrs))} data-v-b33b6709><div class="modal-overlay" data-v-b33b6709></div><div class="modal-content" data-v-b33b6709><button class="close-btn" data-v-b33b6709>\xD7</button><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "width": "100%" })}" data-v-b33b6709><img${ssrRenderAttr("src", _imports_0$1)} style="${ssrRenderStyle({ "width": "100px" })}" data-v-b33b6709></div>&gt; <h2 style="${ssrRenderStyle({ "text-align": "center", "margin-top": "1rem" })}" data-v-b33b6709>\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435, \u0443 \u043C\u0435\u043D\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435.</h2><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "width": "100%" })}" data-v-b33b6709>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "align-items": "center" })}" data-v-b33b6709>`);
    if ($data.is_number_bad) {
      _push(`<h3 style="${ssrRenderStyle({ "text-align": "center", "color": "red" })}" class="spawn" data-v-b33b6709>\u0412\u044B \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</h3>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<input type="text" class="input_two_row" placeholder="+7 909 000 00 00" style="${ssrRenderStyle({ "margin-top": "10px" })}" data-v-b33b6709><p style="${ssrRenderStyle({ "margin-bottom": "0", "margin-top": "15px" })}" data-v-b33b6709>\u0421\u043A\u0438\u0434\u043A\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 ${ssrInterpolate($options.formatTime($data.timeRemaining))}</p><button class="accept" data-v-b33b6709>\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button><p style="${ssrRenderStyle({ "text-decoration": "underline", "cursor": "pointer" })}" data-v-b33b6709>\u041D\u0435\u0442, \u0441\u043F\u0430\u0441\u0438\u0431\u043E, \u044F \u0445\u043E\u0447\u0443 \u043F\u043E\u043B\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C</p></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal_ads.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-b33b6709"]]);
const _sfc_main$2 = {
  name: "Modal_Connect",
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    send_question() {
      if (this.$refs.name_input.value == "" || this.$refs.third_name_input.value == "" || this.$refs.number_input.value == "" && this.$refs.social_input == "" || this.$refs.text_input.value == "")
        return this.is_something_bad = true;
      else
        axios.post(`http://${this.$config.public.NUXT_APP_BACK_IP}:${this.$config.public.NUXT_APP_BACK_PORT}/send_connect`, {
          name: this.$refs.name_input.value,
          third_name: this.$refs.third_name_input.value,
          addres: this.$refs.number_input.value == "" ? this.$refs.number_input.value : this.$refs.social_input.value,
          his_text: this.$refs.text_input.value
        });
      this.closeModal();
    }
  },
  data() {
    return {
      is_something_bad: false
    };
  },
  mounted() {
    this.$refs.main.parentElement.addEventListener("keydown", (event) => {
      try {
        if (event.key === "Escape" && (void 0).getComputedStyle(this.$refs.main).display == "flex") {
          this.closeModal();
        }
      } catch {
        console.log("hz");
      }
    });
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "main",
    class: "modal-container",
    style: $props.isVisible ? null : { display: "none" }
  }, _attrs))}><div class="modal-overlay"></div><div class="modal-content"><button class="close-btn">\xD7</button><h2 style="${ssrRenderStyle({ "margin-bottom": "0.5rem" })}">\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441\u043E \u043C\u043D\u043E\u0439</h2>`);
  if ($data.is_something_bad) {
    _push(`<h3 style="${ssrRenderStyle({ "color": "red" })}" class="spawn">\u041D\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E \u043E\u0434\u043D\u043E \u0438\u0437 \u043F\u043E\u043B\u0435\u0439</h3>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div style="${ssrRenderStyle({ "display": "flex" })}" class="for_mobile_connect"><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "width": "100%", "align-items": "center" })}"><p>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F</p><input placeholder="\u0418\u0432\u0430\u043D" class="input_one_row" type="text"></div><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "margin-left": "1rem", "width": "100%", "align-items": "center" })}" class="for_mobile_connect_third"><p>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0447\u0435\u0441\u0442\u0432\u043E</p><input type="text" class="input_one_row" placeholder="\u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447"></div></div><p style="${ssrRenderStyle({ "margin-top": "10px", "margin-bottom": "10px" })}">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</p><input type="text" placeholder="+7 900 000 00 00" class="input_two_row"><p style="${ssrRenderStyle({ "color": "gray", "margin-top": "0.5rem", "text-align": "center" })}">\u0438\u043B\u0438</p><p class="ustal_nazv">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u0441\u0435\u0442\u044C</p><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}" class="bottom_part_connect"><input placeholder="https://t.me/@name" type="text" class="input_two_row" style="${ssrRenderStyle({ "margin-top": "10px", "margin-bottom": "10px" })}"><textarea placeholder="\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043C\u043D\u0435 \u0447\u0442\u043E-\u0442\u043E" style="${ssrRenderStyle({ "margin-top": "10px", "margin-bottom": "10px", "height": "320px", "padding": "20px", "font-size": "16.2px" })}" class="text_area"></textarea></div><div class="footer_modal"><button class="button_modal_controll">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button><button class="button_modal_controll" style="${ssrRenderStyle({ "background-color": "rgb(30, 181, 30)" })}">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal_Connect.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_1$1 = "" + buildAssetsURL("logo.54i3PsLy.png");
const _sfc_main$1 = {
  name: "Nav_Component",
  methods: {
    handle_change(name) {
      this.$emit("scroll_to", name);
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  },
  props: {
    place: String
  },
  beforeMount() {
    if (this.place != "main")
      this.what_display = false;
  },
  data() {
    return {
      what_display: true,
      isDropdownOpen: false
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_fa = resolveComponent("fa");
  const _component_nuxt_link = __nuxt_component_0$1;
  if ($data.what_display) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "nav_bar" }, _attrs))} data-v-45491cbf><div class="logo" data-v-45491cbf><img${ssrRenderAttr("src", _imports_1$1)} style="${ssrRenderStyle({ "width": "40px" })}" alt="" data-v-45491cbf><p class="logo_text" data-v-45491cbf>Silver-tech</p></div><div class="info" data-v-45491cbf><button class="button_info" data-v-45491cbf>`);
    _push(ssrRenderComponent(_component_fa, {
      icon: "circle-info",
      style: { "margin-right": "1px" }
    }, null, _parent));
    _push(` \u041E\u0431\u043E \u043C\u043D\u0435</button><button class="button_info" data-v-45491cbf>`);
    _push(ssrRenderComponent(_component_fa, { icon: "book" }, null, _parent));
    _push(` \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435</button><button class="button_info" data-v-45491cbf>`);
    _push(ssrRenderComponent(_component_fa, { icon: "code" }, null, _parent));
    _push(` \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430</button><button class="button_info button_contact" data-v-45491cbf>`);
    _push(ssrRenderComponent(_component_fa, { icon: "address-book" }, null, _parent));
    _push(` \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</button></div><div class="mobile_nav" data-v-45491cbf><h3 style="${ssrRenderStyle({ "color": "white", "font-size": "22px" })}" data-v-45491cbf>`);
    _push(ssrRenderComponent(_component_fa, { icon: "compass" }, null, _parent));
    _push(`</h3>`);
    if ($data.isDropdownOpen) {
      _push(`<ul class="dropdown-menu" data-v-45491cbf><li data-v-45491cbf><a href="#" data-v-45491cbf>`);
      _push(ssrRenderComponent(_component_fa, {
        icon: "circle-info",
        style: { "margin-right": "1px" }
      }, null, _parent));
      _push(` \u041E\u0431\u043E \u043C\u043D\u0435</a></li><li data-v-45491cbf><a href="#" data-v-45491cbf>`);
      _push(ssrRenderComponent(_component_fa, { icon: "book" }, null, _parent));
      _push(` \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435</a></li><li data-v-45491cbf><a href="#" data-v-45491cbf>`);
      _push(ssrRenderComponent(_component_fa, { icon: "code" }, null, _parent));
      _push(` \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430</a></li><li data-v-45491cbf><a href="#" data-v-45491cbf>`);
      _push(ssrRenderComponent(_component_fa, { icon: "address-book" }, null, _parent));
      _push(` \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></li></ul>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "nav_bar" }, _attrs))} data-v-45491cbf><div class="logo" data-v-45491cbf><img${ssrRenderAttr("src", _imports_1$1)} style="${ssrRenderStyle({ "width": "40px" })}" alt="" data-v-45491cbf><p class="logo_text" data-v-45491cbf>Silver-tech</p></div><div class="info" data-v-45491cbf>`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<button class="button_info" data-v-45491cbf${_scopeId}>`);
          _push2(ssrRenderComponent(_component_fa, {
            icon: "house",
            style: { "margin-right": "3px", "margin-top": "-20px" }
          }, null, _parent2, _scopeId));
          _push2(`\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</button>`);
        } else {
          return [
            createVNode("button", { class: "button_info" }, [
              createVNode(_component_fa, {
                icon: "house",
                style: { "margin-right": "3px", "margin-top": "-20px" }
              }),
              createTextVNode("\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/study" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<button class="button_info" data-v-45491cbf${_scopeId}>`);
          _push2(ssrRenderComponent(_component_fa, { icon: "book" }, null, _parent2, _scopeId));
          _push2(` \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435</button>`);
        } else {
          return [
            createVNode("button", { class: "button_info" }, [
              createVNode(_component_fa, { icon: "book" }),
              createTextVNode(" \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435")
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/code" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<button class="button_info" data-v-45491cbf${_scopeId}>`);
          _push2(ssrRenderComponent(_component_fa, { icon: "code" }, null, _parent2, _scopeId));
          _push2(` \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430</button>`);
        } else {
          return [
            createVNode("button", { class: "button_info" }, [
              createVNode(_component_fa, { icon: "code" }),
              createTextVNode(" \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430")
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<button class="button_info button_contact" data-v-45491cbf>`);
    _push(ssrRenderComponent(_component_fa, { icon: "address-book" }, null, _parent));
    _push(` \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</button></div><div class="mobile_nav" data-v-45491cbf><h3 style="${ssrRenderStyle({ "color": "white", "font-size": "22px" })}" data-v-45491cbf>`);
    _push(ssrRenderComponent(_component_fa, { icon: "compass" }, null, _parent));
    _push(`</h3>`);
    if ($data.isDropdownOpen) {
      _push(`<ul class="dropdown-menu" data-v-45491cbf>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li data-v-45491cbf${_scopeId}><a href="#" data-v-45491cbf${_scopeId}>`);
            _push2(ssrRenderComponent(_component_fa, { icon: ["fas", "house"] }, null, _parent2, _scopeId));
            _push2(` \u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</a></li>`);
          } else {
            return [
              createVNode("li", null, [
                createVNode("a", { href: "#" }, [
                  createVNode(_component_fa, { icon: ["fas", "house"] }),
                  createTextVNode(" \u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/study" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li data-v-45491cbf${_scopeId}><a href="#" data-v-45491cbf${_scopeId}>`);
            _push2(ssrRenderComponent(_component_fa, { icon: "book" }, null, _parent2, _scopeId));
            _push2(` \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435</a></li>`);
          } else {
            return [
              createVNode("li", null, [
                createVNode("a", { href: "#" }, [
                  createVNode(_component_fa, { icon: "book" }),
                  createTextVNode(" \u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/code" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li data-v-45491cbf${_scopeId}><a href="#" data-v-45491cbf${_scopeId}>`);
            _push2(ssrRenderComponent(_component_fa, { icon: "code" }, null, _parent2, _scopeId));
            _push2(` \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430</a></li>`);
          } else {
            return [
              createVNode("li", null, [
                createVNode("a", { href: "#" }, [
                  createVNode(_component_fa, { icon: "code" }),
                  createTextVNode(" \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<li data-v-45491cbf><a href="#" data-v-45491cbf>`);
      _push(ssrRenderComponent(_component_fa, { icon: "address-book" }, null, _parent));
      _push(` \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></li></ul>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav_Component.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-45491cbf"]]);
const _imports_0 = "data:image/png;base64,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";
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "" + buildAssetsURL("instagram.CwJJ6Y2J.png");
const _sfc_main = {
  name: "Footer_Component",
  methods: {
    open_m() {
      this.$emit("toggle");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_fa = resolveComponent("fa");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer_container" }, _attrs))} data-v-41cd555a><h1 style="${ssrRenderStyle({ "padding-top": "20px", "padding-bottom": "20px", "text-align": "center" })}" data-v-41cd555a>\u042F \u0432\u0441\u0435\u0433\u0434\u0430 \u0433\u043E\u0442\u043E\u0432 \u043A \u043E\u0431\u0449\u0435\u043D\u0438\u044E! \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441\u043E \u043C\u043D\u043E\u0439</h1><div class="main_row" data-v-41cd555a><p class="email_phone" data-v-41cd555a>+7-960-459-34-45 </p><p class="email_phone" data-v-41cd555a>+7-906-565-30-09</p><p class="email_phone" data-v-41cd555a>m.yacenko@gmail.com</p><div class="social_row" data-v-41cd555a><button class="social_button" data-v-41cd555a><a href="https://vk.com/maxim295" data-v-41cd555a><img class="social_img"${ssrRenderAttr("src", _imports_0)} data-v-41cd555a></a></button><button class="social_button" data-v-41cd555a><a href="https://t.me/@BrainTorOff" data-v-41cd555a><img class="social_img"${ssrRenderAttr("src", _imports_1)} data-v-41cd555a></a></button><button class="social_button" title="\u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043D\u0430\u044F \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0420\u0424 \u0441\u043E\u0446. \u0441\u0435\u0442\u044C  :)" data-v-41cd555a><a href="https://www.instagram.com/prophet_off?igsh=MTBnZW9zdjZkbmhyNw==" data-v-41cd555a><img class="social_img"${ssrRenderAttr("src", _imports_2)} data-v-41cd555a></a></button></div></div><div class="have_a_question" data-v-41cd555a><p style="${ssrRenderStyle({ "font-size": "20px", "font-weight": "580" })}" data-v-41cd555a>\u041E\u0441\u0442\u0430\u043B\u044C\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B?</p><button class="connect_button" data-v-41cd555a>`);
  _push(ssrRenderComponent(_component_fa, { icon: "link" }, null, _parent));
  _push(` \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441\u043E \u043C\u043D\u043E\u0439 </button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer_Component.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-41cd555a"]]);

export { __nuxt_component_4 as _, __nuxt_component_0 as a, __nuxt_component_2 as b, __nuxt_component_1 as c };
//# sourceMappingURL=Footer_Component-BtI7u5vb.mjs.map
