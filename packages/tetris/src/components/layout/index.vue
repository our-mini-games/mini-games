<template>
  <div class="layout-container">
    <main class="main-wrapper">
      <slot name="main" />
    </main>
    <section class="operating-area">
      <slot name="operating" />
    </section>
    <aside class="functional-area">
      <slot name="functional" />
    </aside>
  </div>
</template>

<style lang="scss" scoped>
$border-color: #f1f1f1;
.layout-container {
  width: 360px;
  height: 700px;
  max-width: 100%;
  max-height: 100%;
  padding: 5%;
  border-radius: 16px;
  border: 1px solid $border-color;
  box-sizing: border-box;

  .main-wrapper {
    display: flex;
    justify-content: center;
  }

  .operating-area {
    margin-top: 32px;
  }

  .functional-area {
    margin-top: 16px;
  }
}
</style>
