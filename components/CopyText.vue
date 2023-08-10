<template>
  <div>
    <p>Chào bạn</p>
    <v-text-field v-model="textInput" label="...nhập text ở đây"></v-text-field>
    <v-btn @click="copyText" color="black" dark>Copy</v-btn>
    <v-snackbar v-model="snackbar" :timeout="3000" top>{{ snackbarMessage }}</v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: '',
      snackbar: false,
      snackbarMessage: '',
    };
  },
  methods: {
    copyText() {
      if (this.textInput) {
        navigator.clipboard.writeText(this.textInput)
          .then(() => {
            this.snackbarMessage = 'Text copied to clipboard';
            this.snackbar = true;
          })
          .catch((error) => {
            console.error('Error copying text:', error);
          });
      }
    },
  },
};
</script>
