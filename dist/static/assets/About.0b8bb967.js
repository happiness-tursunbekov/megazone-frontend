import { q as useStore, v as useRoute, o as openBlock, c as createElementBlock, n as createBaseVNode, t as toDisplayString, F as Fragment } from "./vendor.97c1b2ce.js";
import { u as useAxios } from "./index.10bbb5f1.js";
var About_vue_vue_type_style_index_0_scoped_true_lang = "\nh1[data-v-02b305c2] {\n  color: red;\n}\n";
const _sfc_main = {
  async setup() {
    const store = useStore();
    const { data } = await useAxios().get("http://127.0.0.1:8000/api/test", {
      params: { id: useRoute().params.id }
    });
    return { product: data, store };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("h1", null, toDisplayString($setup.product.title), 1),
    createBaseVNode("h1", null, toDisplayString($setup.store.getters.user), 1)
  ], 64);
}
_sfc_main.render = _sfc_render;
_sfc_main.__scopeId = "data-v-02b305c2";
export { _sfc_main as default };
