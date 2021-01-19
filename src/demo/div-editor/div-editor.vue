<template>
  <div>
    <h1>多行文本框</h1>
    <h2>特性:</h2>
    <div class="feature">
      支持placeholder
      <br />
      支持与fastclick插件共存,如果不需要,可以去掉needsclick这个class
      <br />
      支持v-model
      <br />
      支持readonly
      <br />
      支持任意数量个实例
      <br />
      支持移动端换行
      <br />
    </div>
    <h2>示例:</h2>
    <div class="demo">
      html:
      <div>
        {{ html }}
      </div>
      <div class="flex-parent start">
        输入框:
        <div class="input-box">
          <cj-div-editor v-model="html" placeholder="请输入"></cj-div-editor>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      html: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.input-box {
  width: 300px;

  border: 1px solid #666;
}
</style>
