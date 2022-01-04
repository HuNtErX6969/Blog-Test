<template>
  <div class="form-group">
    <textarea
      :placeholder="placeholder"
      :class="inputClasses"
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