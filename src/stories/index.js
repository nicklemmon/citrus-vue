import Vue from "vue";

import { storiesOf } from "@storybook/vue";

import btn from "../components/btn.vue";

storiesOf("btn", module).add("story as a component", () => ({
  components: { btn },
  template: '<btn content="Click Me" type="primary"/>'
}));
