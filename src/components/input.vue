<template>
  <div class="form-group">
    <input
      :placeholder="placeholder"
      :class="inputClasses"
      :type="type"
      :value="value"
      :disabled="disabled"
      class="form-control"
      v-model="model"
    />
    <label class="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text,email",
    },
    placeholder: {
      type: String,
      default: "",
    },
    inputClasses: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    value: {
      type: [String, Number],
      default: "",
      required: false,
    },
  },

  name: "CustomInput",

  computed: {
    name() {
      return this.label.toLowerCase();
    },
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>