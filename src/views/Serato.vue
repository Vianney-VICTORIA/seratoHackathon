<template>
  <div id="serato">
    <h1>UX Tool to design Hardware</h1>
    <div class="wrapperLibrary">
      <SeratoLibrary />
    </div>
    <div class="wrapperCanvas">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SeratoLibrary from '@/components/SeratoLibrary.vue';

export default {
  name: 'Serato',
  components: {
    SeratoLibrary,
  },
};
</script>

<style lang="scss">

.wrapperLibrary{
  display: inline-block;
  background-color: aquamarine;
  height: 80vh;
  width:20vw;
  margin-right: 15px;
}
.wrapperCanvas{
  background-color: coral;
  display: inline-block;
  height: 80vh;
  width:50vw;
}

</style>
