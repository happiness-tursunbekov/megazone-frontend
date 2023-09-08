import { x as defineComponent, v as useRoute, o as openBlock, c as createElementBlock, t as toDisplayString } from "./vendor.97c1b2ce.js";
import { u as useAxios } from "./index.10bbb5f1.js";
const _sfc_main = defineComponent({
  name: "Show",
  async setup(props, context) {
    const { data } = await useAxios().get("http://127.0.0.1:8000/api/test", {
      params: { id: useRoute().params.id }
    });
    return { product: data };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, toDisplayString(_ctx.product.id), 1);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
