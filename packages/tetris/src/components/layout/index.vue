<template>
  <div class="layout-container">
    <main class="main-wrapper">
      <div class="wrapper">
        <slot name="main" />
      </div>
    </main>
    <aside class="operating-area">
      <slot name="operating" />
      <slot name="functional" />
    </aside>
    <!-- <aside class="functional-area">
    </aside> -->
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  width: 360px;
  height: 640px;
  max-width: 100%;
  max-height: calc(100% - 20px);
  margin-top: 20px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);
  box-sizing: border-box;
  // clip-path: path('\
  //   M 0 0 \
  //   L 16 0 \
  //   L 16 -20 \
  //   L 344 -20 \
  //   L 344 0 \
  //   L 360 0 \
  //   L 360 320 \
  //   C 310 320, 310 380, 360 380 \
  //   L 360 640 \
  //   L 0 640 \
  //   L 0 380 \
  //   C 50 380, 50 310, 0 310 \
  //   Z \
  // ');

  .main-wrapper {
    // background-color: #abcdef;
    padding-bottom: 1px;
    box-shadow: 0px 2px 4px var(--shadow-color-light);
    border-bottom-left-radius: 50% 16px;
    border-bottom-right-radius: 50% 16px;

    .wrapper {
      display: flex;
      justify-content: center;
      margin: -20px 16px 8px;
      border: 1px solid var(--border-color);
      border-top-left-radius: 50% 16px;
      border-top-right-radius: 50% 16px;
      border-bottom-left-radius: 50% 16px;
      border-bottom-right-radius: 50% 16px;
      background-color: var(--bg-color);
      box-shadow: -8px -8px 8px var(--shadow-color-light),
        8px 8px 8px var(--shadow-color-dark);
    }
  }

  .operating-area {
    position: relative;
    height: 184px;
    padding: 32px;
    // border: 1px solid var(--border-color);
    // clip-path: path('M 0 0 C 16 32, 344 32, 360 0, L 360 152 C 344 184, 16 184, 0 152 Z');
    background-color: var(--bg-color);
    box-sizing: border-box;
    // box-shadow: -16px -16px 16px var(--shadow-color-light),
    //   8px 8px 8px var(--shadow-color-dark);
  }
}
</style>
