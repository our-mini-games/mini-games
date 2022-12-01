<template>
  <div class="layout-container">
    <main class="main-wrapper">
      <div class="wrapper">
        <slot name="main" />
      </div>
    </main>
    <aside class="operating-area">
      <div class="wrapper">
        <slot name="operating" />
        <slot name="functional" />
      </div>
    </aside>
    <footer class="footer">
      <div class="stickers">
        <img :src="tetrisPic" width="200" />
      </div>
      <div class="slogan">
        Hello world
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import tetrisPic from '../../assets/imgs/tetris.png'
</script>

<style lang="scss" scoped>
.layout-container {
  width: 360px;
  height: 640px;
  max-width: 100%;
  max-height: calc(100% - 20px);
  margin-top: 20px;
  border-radius: 16px;
  // border: 1px solid var(--border-color);
  // background-color: var(--bg-color);
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
  user-select: none;

  .main-wrapper {
    position: relative;
    width: 360px;
    height: 300px;
    padding-bottom: 1px;
    box-shadow: 0px 2px 4px var(--shadow-color-light);
    border-bottom-left-radius: 50% 16px;
    border-bottom-right-radius: 50% 16px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 360px;
      height: 284px;
      background-color: var(--bg-color);
      border-color: var(--border-color);
      border-style: solid;
      border-width: 3px 5px 0 3px;
      border-top-right-radius: 15px;
      clip-path: path('\
        M 0 16 \
        C 0 8, 8 0, 16 0 \
        L 344 0 \
        C 352 0, 360 8, 360 16 \
        L 360 100 \
        C 356 100, 356 116, 360 116 \
        C 356 116, 356 132, 360 132 \
        C 356 132, 356 148, 360 148 \
        C 356 148, 356 164, 360 164 \
        C 356 164, 356 180, 360 180 \
        C 356 180, 356 196, 360 196 \
        C 356 196, 356 212, 360 212 \
        L 360 284 \
        L 0 284 \
        L 0 212 \
        C 4 212, 4 196, 0 196 \
        C 4 196, 4 180, 0 180 \
        C 4 180, 4 164, 0 164 \
        C 4 164, 4 148, 0 148 \
        C 4 148, 4 132, 0 132 \
        C 4 132, 4 116, 0 116 \
        C 4 116, 4 100, 0 100 \
        Z \
      ');
    }

    .wrapper {
      display: flex;
      justify-content: center;
      position: absolute;
      left: 16px;
      top: -16px;
      width: 328px;
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
    // filter: drop-shadow(8px 8px 8px var(--shadow-color-dark));
    .wrapper {
      position: relative;
      z-index: 1;
      height: 184px;
      padding: 32px;
      margin-top: -24px;
      border-color: var(--bg-color);
      border-width: 3px 4px 3px 3px;
      clip-path: path('\
        M 0 0 \
        C 16 32, 344 32, 360 0 \
        L 360 10 \
        C 355 20, 355 54, 360 64 \
        L 360 152 \
        C 344 184, 16 184, 0 152 \
        L 0 64 \
        Z \
      ');
      background-color: var(--bg-color);
      // box-shadow: -16px -16px 16px var(--shadow-color-light),
      //   8px 8px 8px var(--shadow-color-dark);

      &::before {
        content: '';
        position: absolute;
        left: -16px;
        top: 10px;
        width: 20px;
        height: 52px;
        background-color: white;
        border-radius: 50%;
        border: 3px solid var(--border-color);
        border-left: none;
        border-top: none;
        border-bottom: none;
      }
      &::after {
        content: '';
        position: absolute;
        right: -16px;
        top: 10px;
        width: 19px;
        height: 52px;
        background-color: white;
        border-radius: 50%;
        border: 4px solid var(--border-color);
        border-right: none;
        border-top: none;
        border-bottom: none;
      }
    }
  }

  .footer {
    position: relative;
    margin-top: -36px;
    padding: 72px 36px 36px;
    background-color: var(--bg-color);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border: 3px solid var(--border-color);
    border-bottom-width: 5px;
    border-right-width: 4px;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 32px;
      border-radius: 16px;
      box-shadow: 0 -4px 8px var(--shadow-color-light) inset;
    }

    .stickers {
      display: flex;
      justify-content: center;
    }

    .slogan {
      text-align: center;
      color: rgb(216, 18, 18);
      text-shadow: 1px 1px 1px #000;
    }
  }
}
</style>
