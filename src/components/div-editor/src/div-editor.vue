<template>
  <pre
    :id="`divEditor_${id}`"
    :ref="`divEditor_${id}`"
    :placeholder="placeholder"
    class="cj-div-editor needsclick"
    @blur="focus"
    @focus="focus"
    @input="update"
    v-html="valueText"
    :contenteditable="!readonly"
  ></pre>
</template>
<script>
import { uuid } from "./div-editor.js";

export default {
  name: "CjDivEditor",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.valueText = this.value;
  },

  watch: {
    value(newVal) {
      if (!this.focusIn) {
        this.valueText = newVal;
      }
    },
  },
  data() {
    return {
      id: uuid(8, 2),
      focusIn: false,
      valueText: "",
    };
  },
  methods: {
    update(e) {
      if (!this.readonly) {
        this.$emit("change", e.target.innerHTML);
      }
    },
    focus() {
      this.focusIn = true;
    },
    blur() {
      this.focusIn = false;
    },
  },
};
</script>
