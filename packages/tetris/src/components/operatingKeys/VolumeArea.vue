<template>
  <section class="volumn-area">
    <div class="fluid"></div>
    <div class="fluid"></div>
    <div class="fluid"></div>
  </section>
</template>

<style lang="scss" scoped>
.volumn-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: -32px;
}
.fluid {
  position: relative;
  width: 60px;
  height: 6px;
  border-radius: 3px;
  box-shadow: 1px 1px 1px var(--shadow-color-light),
    -1px -1px 1px var(--shadow-color-dark)
  ;

  &:nth-child(2) {
    width: 80px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 1px;
    top: 1px;
    width: calc(100% - 2px);
    height: 4px;
    background-image:
      repeating-linear-gradient(-45deg, rgb(156, 156, 156, .1), rgb(156, 156, 156, .1) 1px, transparent 1px, transparent 2px)
    ;
  }
}
</style>
