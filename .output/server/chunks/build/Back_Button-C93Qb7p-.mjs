import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "Back_Button"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_fa = resolveComponent("fa");
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "width": "fit-content" } }, _attrs))}><button class="back">`);
  _push(ssrRenderComponent(_component_fa, { icon: "arrow-left" }, null, _parent));
  _push(`</button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Back_Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Back_Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Back_Button as B };
//# sourceMappingURL=Back_Button-C93Qb7p-.mjs.map
