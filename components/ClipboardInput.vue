<template>
<p>Chào bạn</p>
  <v-text-field v-model="text" label="...nhập text ở đây"></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>
