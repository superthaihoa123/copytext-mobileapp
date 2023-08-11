<template>
  <div>
    <clipboard-input ref="clipboardInput"></clipboard-input>
    <v-btn @click="copyText">Copy</v-btn>

    <!-- Centered Snackbar -->
    <v-snackbar
      v-model="showSnackbar"
      :timeout="3000"
      top
      color="success"
      :style="{ left: '50%', transform: 'translateX(-50%)' }"
    >
      Text has been copied!
    </v-snackbar>
  </div>
</template>

<script>
import ClipboardInput from "@/components/ClipboardInput.vue";

export default {
  components: {
    ClipboardInput,
  },
  data() {
    return {
      copied: false,
      showSnackbar: false,
    };
  },
  methods: {
    copyText() {
      const inputComponent = this.$refs.clipboardInput;
      const text = inputComponent.text;

      if (text) {
        navigator.clipboard.writeText(text);
        this.showSnackbar = true;

        // Reset snackbar after 3 seconds
        setTimeout(() => {
          this.showSnackbar = false;
        }, 3000);
      }
    },
  },
};
</script>
