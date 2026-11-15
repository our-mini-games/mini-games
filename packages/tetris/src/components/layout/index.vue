<template>
  <div class="layout-container arcade-panel" @contextmenu.prevent>
    <h1 class="arcade-title">俄罗斯方块</h1>
    <main class="main-wrapper arcade-table">
      <slot name="main" />
    </main>
    <aside class="operating-area">
      <slot name="operating" />
      <slot name="functional" />
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  --tetris-field-width: clamp(112px, 34vw, min(210px, 24svh));
  width: min(680px, 100%);
  padding: 20px clamp(12px, 5vw, 24px);
  border-top: 2px solid var(--arcade-gold);
  user-select: none;
  text-align: center;
}

.arcade-title {
  grid-area: title;
  margin-bottom: 16px;
  font-size: 28px;
}

.main-wrapper {
  grid-area: field;
  display: grid;
  justify-items: center;
  padding: 12px;

}

.operating-area {
  grid-area: keys;
  display: grid;
  align-content: end;
  gap: 12px;
  padding-top: 16px;
}
@media (min-width: 700px) {
  .layout-container {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(225px, .8fr);
    grid-template-areas: "title title" "field keys";
    align-items: stretch;
    gap: 16px;
  }

  .arcade-title { margin-bottom: 0; }
  .operating-area { padding: 0; }
}

@media (max-width: 699px) {
  .layout-container { width: min(440px, 100%); }
}
</style>
