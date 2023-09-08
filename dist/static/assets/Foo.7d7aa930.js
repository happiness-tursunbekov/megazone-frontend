import { x as defineComponent, a as createVNode, b as createTextVNode } from "./vendor.97c1b2ce.js";
var foo = ".jsx {\n  color: blue;\n}\n";
const Foo = defineComponent({
  name: "foo",
  setup() {
    return () => createVNode("div", {
      "class": "jsx"
    }, [createTextVNode("from JSX")]);
  }
});
export { Foo };
