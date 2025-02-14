<template>
  <svg class="defs">
    <defs>
      <!-- 渐变 -->
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:rgb(255,0,255);stop-opacity:1" /> <!-- 紫色 -->
        <stop offset="25%" style="stop-color:rgb(0,255,255);stop-opacity:1" /> <!-- 青色 -->
        <stop offset="50%" style="stop-color:rgb(255,165,0);stop-opacity:1" /> <!-- 橙色 -->
        <stop offset="75%" style="stop-color:rgb(255,0,0);stop-opacity:1" /> <!-- 红色 -->
        <stop offset="100%" style="stop-color:rgb(255,20,147);stop-opacity:1" /> <!-- 深粉色 -->
      </linearGradient>

      <!-- 外部裁剪 -->
      <clipPath id="clip-path-solitaire">
        <rect
          :x="0"
          :y="0"
          :width="solitaireSize.width"
          :height="solitaireSize.height"
          :rx="solitaireSize.radius"
          :ry="solitaireSize.radius"
        />
      </clipPath>

      <!-- 内部裁剪 -->
      <clipPath id="inner-clip-path-solitaire">
        <rect
          :x="solitaireSize.radius / 2"
          :y="solitaireSize.radius / 2"
          :width="solitaireSize.width - solitaireSize.radius"
          :height="solitaireSize.height - solitaireSize.radius"
          :rx="solitaireSize.radius"
          :ry="solitaireSize.radius"
        />
      </clipPath>

      <!-- 空牌面 -->
      <rect
        id="empty-solitaire"
        x="0"
        y="0"
        :width="solitaireSize.width"
        :height="solitaireSize.height"
        :rx="solitaireSize.radius"
        :ry="solitaireSize.radius"
        :stroke="colors.border"
        :fill="colors.background"
      />

      <!-- 可放置区域 -->
      <rect
        id="drop-target"
        x="0"
        y="0"
        :width="solitaireSize.width"
        :height="solitaireSize.height"
        :rx="solitaireSize.radius"
        :ry="solitaireSize.radius"
        stroke-dasharray="20 5"
        stroke="url(#grad1)"
        fill="none"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="25"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </rect>

      <!-- 未开启牌面 -->
      <g id="unopened-solitaire">
        <rect
          :x="0"
          :y="0"
          :width="solitaireSize.width"
          :height="solitaireSize.height"
          :rx="solitaireSize.radius"
          :ry="solitaireSize.radius"
          :stroke="colors.border"
          :fill="colors.background"
        />
        <g clip-path="url(#inner-clip-path-solitaire)">
          <rect
            :x="0"
            :y="0"
            :width="solitaireSize.width"
            :height="solitaireSize.height"
            :rx="solitaireSize.radius"
            :ry="solitaireSize.radius"
            :fill="colors.primary"
            :stroke="colors.border"
          />
          <g v-for="i of Math.floor((solitaireSize.width + solitaireSize.height) / solitaireSize.radius)" :key="i">
            <line
              :x1="i * solitaireSize.radius < solitaireSize.width ? i * solitaireSize.radius : solitaireSize.width"
              :y1="i * solitaireSize.radius < solitaireSize.width ? 0 : (i * solitaireSize.radius - solitaireSize.width)"
              :x2="i * solitaireSize.radius < solitaireSize.height ? 0 : (i * solitaireSize.radius - solitaireSize.height)"
              :y2="i * solitaireSize.radius < solitaireSize.height ? i * solitaireSize.radius : solitaireSize.height"
              :stroke="'#fff'"
            />
          </g>
          <g
            v-for="j of Math.floor((solitaireSize.width + solitaireSize.height) / solitaireSize.radius)"
            :key="j"
          >
            <line
              :x1="j * solitaireSize.radius < solitaireSize.height ? 0 : (j * solitaireSize.radius - solitaireSize.height)"
              :y1="j * solitaireSize.radius < solitaireSize.height ? (solitaireSize.height - j * solitaireSize.radius) : 0"
              :x2="j * solitaireSize.radius < solitaireSize.width ? j * solitaireSize.radius : solitaireSize.width"
              :y2="j * solitaireSize.radius < solitaireSize.width ? solitaireSize.height : (solitaireSize.height - (j * solitaireSize.radius - solitaireSize.width))"
              :stroke="'#fff'"
            />
          </g>
          <!-- <g
            v-for="m of 2"
            :key="m"
            :transform="`rotate(${180 * (m - 1)}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
          >
            <g v-for="n of Math.floor((solitaireSize.width + solitaireSize.height) / solitaireSize.radius)" :key="j">
              <line
                :x1="0"
                :y1="n * solitaireSize.radius"
                :x2="n * solitaireSize.radius"
                :y2="solitaireSize.height"
                :stroke="'#fff'"
              />
            </g>
          </g> -->
        </g>
        <circle
          :cx="solitaireSize.width / 2"
          :cy="solitaireSize.height / 2"
          :r="solitaireSize.width * 0.3"
          :fill="colors.primary"
        />
        <circle
          :cx="solitaireSize.width / 2"
          :cy="solitaireSize.height / 2"
          :r="solitaireSize.width * 0.25"
          fill="none"
          stroke="#fff"
          stroke-width="2"
        />
        <image
          :xlink:href="`${PATHNAME}spider.svg`"
          :width="solitaireSize.width * 0.36"
          :height="solitaireSize.height * 0.36"
          :x="(solitaireSize.width - solitaireSize.width * 0.36) / 2"
          :y="(solitaireSize.height - solitaireSize.height * 0.36) / 2"
        />
      </g>

      <!-- 已开启牌面 -->
      <rect
        id="opened-solitaire"
        x="0"
        y="0"
        :width="solitaireSize.width"
        :height="solitaireSize.height"
        :rx="solitaireSize.radius"
        :ry="solitaireSize.radius"
        :fill="colors.background"
        :stroke="colors.border"
      />

      <!-- 花色 -->
      <svg id="suit-spade" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M540.672 73.728c-16.384-15.701333-41.642667-15.701333-58.026667 0-84.650667 80.554667-326.314667 313.344-364.544 355.669333-34.133333 37.546667-55.978667 86.698667-55.978666 141.312 0 123.562667 96.256 221.866667 217.088 222.549334 64.170667 0 122.197333-27.306667 162.474666-71.68 0 64.170667-1.365333 92.16-92.16 132.437333-24.576 10.922667-38.912 38.229333-32.768 64.170667 5.461333 25.258667 28.672 43.690667 54.613334 43.690666h279.893333c27.306667 0 51.2-19.114667 56.661333-45.738666 4.778667-25.941333-8.192-51.2-32.085333-62.122667-90.794667-40.277333-92.842667-66.901333-92.842667-133.12 40.96 45.056 101.034667 73.728 167.253334 71.68 118.784-2.730667 212.309333-98.986667 212.309333-217.770667 0-56.661333-21.162667-107.861333-55.978667-146.090666-38.912-41.642667-281.258667-274.432-365.909333-354.986667z"></path>
      </svg>
      <svg id="suit-heart" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M735.232 104.448C641.706667 104.448 554.325333 177.493333 512 219.136 469.674667 177.493333 382.293333 104.448 288.768 104.448 129.706667 104.448 34.133333 197.290667 34.133333 352.938667 34.133333 480.597333 151.552 587.093333 155.648 590.506667L484.010667 907.946667c15.701333 15.018667 40.277333 15.018667 55.296 0l327.68-316.757334c4.778667-4.778667 122.197333-111.274667 122.197333-238.933333 0.682667-154.965333-94.890667-247.808-253.952-247.808z"></path>
      </svg>
      <svg id="suit-club" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M714.752 359.082667C770.730667 217.770667 666.282667 62.122667 512 62.122667S253.952 217.770667 309.248 359.082667C177.493333 342.016 62.122667 443.733333 62.122667 575.488c0 120.149333 97.621333 217.770667 217.770666 217.770667 64.170667 0 121.514667-27.989333 161.792-71.68 0 64.170667-1.365333 92.16-92.842666 133.12-24.576 10.922667-37.546667 36.864-32.085334 62.805333 5.461333 25.941333 28.672 44.373333 55.296 44.373333h281.258667c26.624 0 49.834667-18.432 55.296-44.373333 5.461333-25.941333-8.192-51.882667-32.085333-62.805333-90.794667-40.277333-92.842667-66.901333-92.842667-133.12 39.594667 44.373333 97.621333 71.68 161.792 71.68 120.149333 0 217.770667-97.621333 217.770667-217.770667-1.365333-131.754667-117.418667-233.472-248.490667-216.405333z"></path>
      </svg>
      <svg id="suit-diamond" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M544.085333 77.141333c-17.066667-19.797333-47.104-19.797333-64.170666 0L128.341333 484.693333c-13.653333 15.701333-13.653333 38.912 0 55.296l351.573334 407.552c17.066667 19.797333 47.104 19.797333 64.170666 0L895.658667 539.306667c13.653333-15.701333 13.653333-38.912 0-55.296L544.085333 77.141333z"></path>
      </svg>

      <!-- 牌型 -->
      <template
        v-for="suit of suits"
        :key="suit"
      >
        <g
          v-for="number of numbers"
          :key="number"
          :id="`${suit}-${number}`"
          :width="solitaireSize.width"
          :height="solitaireSize.height"
          :fill="fillColors[suit]"
        >
          <use
            xlink:href="#opened-solitaire"
          />
          <!-- 图案 -->
          <g name="suits">
            <!-- Ace -->
            <g v-if="number === SolitaireNumber.ace">
              <use
                :xlink:href="`#suit-${suit}`"
                :x="solitaireSize.patternArea.center.x - solitaireSize.patternSize.xxl / 2"
                :y="solitaireSize.patternArea.center.y - solitaireSize.patternSize.xxl / 2"
                :width="solitaireSize.patternSize.xxl"
                :height="solitaireSize.patternSize.xxl"
              />
            </g>
            <!-- 2, 3 -->
            <g v-else-if="[SolitaireNumber.two, SolitaireNumber.three].includes(number)">
              <use
                v-for="n in 2"
                :key="n"
                :xlink:href="`#suit-${suit}`"
                :x="solitaireSize.patternArea.center.x - solitaireSize.patternSize.xl / 2"
                :y="solitaireSize.padding.top"
                :width="solitaireSize.patternSize.xl"
                :height="solitaireSize.patternSize.xl"
                :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.patternArea.center.x}, ${solitaireSize.patternArea.center.y})`"
              />
              <use
                v-if="number === SolitaireNumber.three"
                :xlink:href="`#suit-${suit}`"
                :x="solitaireSize.patternArea.center.x - solitaireSize.patternSize.xl / 2"
                :y="solitaireSize.patternArea.center.y -  solitaireSize.patternSize.xl / 2"
                :width="solitaireSize.patternSize.xl"
                :height="solitaireSize.patternSize.xl"
                />
            </g>
            <!-- 4, 5 -->
            <g v-else-if="[SolitaireNumber.four, SolitaireNumber.five].includes(number)">
              <g
                v-for="n in 2"
                :key="n"
                :transform="`rotate(${180 * (n - 1)}, ${solitaireSize.patternArea.center.x}, ${solitaireSize.patternArea.center.y})`"
              >
                <g v-for="j in 2" :key="j">
                  <use
                    :xlink:href="`#suit-${suit}`"
                    :x="solitaireSize.padding.left + (j - 1) * (solitaireSize.patternGaps.lg2x + solitaireSize.patternSize.lg)"
                    :y="solitaireSize.padding.top"
                    :width="solitaireSize.patternSize.lg"
                    :height="solitaireSize.patternSize.lg"
                  />
                </g>
              </g>
              <use
                v-if="number === SolitaireNumber.five"
                :xlink:href="`#suit-${suit}`"
                :x="solitaireSize.patternArea.center.x - solitaireSize.patternSize.lg / 2"
                :y="solitaireSize.patternArea.center.y -  solitaireSize.patternSize.lg / 2"
                :width="solitaireSize.patternSize.lg"
                :height="solitaireSize.patternSize.lg"
              />
            </g>

            <!-- 6, 7, 8 -->
            <g v-else-if="[SolitaireNumber.six, SolitaireNumber.seven, SolitaireNumber.eight].includes(number)">
              <!-- 上2/下2 -->
              <g
                v-for="i in 2" :key="i"
                :transform="`rotate(${180 * (i - 1)}, ${solitaireSize.patternArea.center.x}, ${solitaireSize.patternArea.center.y})`"
              >
                <g v-for="j in 2" :key="j">
                  <use
                    :xlink:href="`#suit-${suit}`"
                    :x="solitaireSize.padding.left + (j - 1) * (solitaireSize.patternGaps.lg2x + solitaireSize.patternSize.lg)"
                    :y="solitaireSize.padding.top"
                    :width="solitaireSize.patternSize.lg"
                    :height="solitaireSize.patternSize.lg"
                  />
                </g>
              </g>

              <!-- x中2 -->
              <g v-for="k in 2" :key="k">
                <use
                  :xlink:href="`#suit-${suit}`"
                  :x="solitaireSize.padding.left + (k - 1) * (solitaireSize.patternGaps.lg2x + solitaireSize.patternSize.lg)"
                  :y="solitaireSize.patternArea.center.y -  solitaireSize.patternSize.lg / 2"
                  :width="solitaireSize.patternSize.lg"
                  :height="solitaireSize.patternSize.lg"
                />
              </g>

              <!-- y中2 -->
              <g v-for="i in (number === SolitaireNumber.seven ? 1 : number === SolitaireNumber.eight ? 2 : 0)" :key="i">
                <use
                  :xlink:href="`#suit-${suit}`"
                  :x="solitaireSize.patternArea.center.x - solitaireSize.patternSize.lg / 2"
                  :y="solitaireSize.padding.top + ((solitaireSize.patternArea.height - 2 * solitaireSize.patternSize.lg) / 3)"
                  :width="solitaireSize.patternSize.lg"
                  :height="solitaireSize.patternSize.lg"
                  :transform="`rotate(${180 * (i - 1)}, ${solitaireSize.patternArea.center.x}, ${solitaireSize.patternArea.center.y})`"
                />
              </g>
            </g>

            <!-- 9, 10 -->
            <g v-else-if="[SolitaireNumber.nine, SolitaireNumber.ten].includes(number)">
              <!-- 上四/下四 -->
              <g
                v-for="i in 2"
                :key="i"
                :transform="`rotate(${180 * (i - 1)}, ${solitaireSize.patternArea.center.x}, ${solitaireSize.patternArea.center.y})`"
              >
                <g v-for="j in 4" :key="j">
                  <use
                    :xlink:href="`#suit-${suit}`"
                    :x="solitaireSize.padding.left + (solitaireSize.patternSize.md + solitaireSize.patternGaps.md2x) * (j % 2 === 0 ? 1 : 0)"
                    :y="solitaireSize.padding.top + (solitaireSize.patternGaps.md4y + solitaireSize.patternSize.md) * (j / 2 > 1 ? 1 : 0)"
                    :width="solitaireSize.patternSize.md"
                    :height="solitaireSize.patternSize.md"
                  />
                </g>
              </g>

              <!-- 9 中一 -->
              <use
                v-if="number === SolitaireNumber.nine"
                :xlink:href="`#suit-${suit}`"
                :x="solitaireSize.patternArea.center.x - solitaireSize.patternSize.md / 2"
                :y="solitaireSize.patternArea.center.y -  solitaireSize.patternSize.md / 2"
                :width="solitaireSize.patternSize.md"
                :height="solitaireSize.patternSize.md"
              />

              <!-- 10 中二 -->
              <g
                v-else
                v-for="i in 2"
                :key="i"
              >
                <use
                  :xlink:href="`#suit-${suit}`"
                  :x="solitaireSize.patternArea.center.x - solitaireSize.patternSize.md / 2"
                  :y="solitaireSize.padding.top + (solitaireSize.patternGaps.md4y + solitaireSize.patternSize.md * 2) / 2 - solitaireSize.patternSize.md / 2"
                  :width="solitaireSize.patternSize.md"
                  :height="solitaireSize.patternSize.md"
                  :transform="`rotate(${180 * (i - 1)}, ${solitaireSize.patternArea.center.x}, ${solitaireSize.patternArea.center.y})`"
                />
              </g>
            </g>

            <!-- Jack, Queen, King -->
            <g v-else>
              <image
                :xlink:href="`${PATHNAME}${suit}-${number}.png`"
                :x="solitaireSize.padding.left"
                :y="solitaireSize.padding.top"
                :width="solitaireSize.patternArea.width"
                :height="solitaireSize.patternArea.height"
              />
            </g>
          </g>

          <!-- 数字和花色 -->
          <g
            v-for="index in 2"
            :key="index"
            :transform="index !== 2 ? '' : `rotate(180, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
          >
            <text
              :x="solitaireSize.fontMargin.left"
              :y="solitaireSize.fontMargin.top"
              lengthAdjust="spacingAndGlyphs"
              :textLength="solitaireSize.font.textLength"
              :font-size="solitaireSize.font.size"
              dominant-baseline="hanging"
              text-anchor="start"
              font-weight="bold"
              font-family="Card Characters, Gill Sans, serif"
            >
              {{ number }}
            </text>
            <use
              :xlink:href="`#suit-${suit}`"
              :x="solitaireSize.fontMargin.left"
              :y="solitaireSize.fontMargin.top + solitaireSize.font.size + solitaireSize.fontMargin.bottom"
              :width="solitaireSize.font.textLength"
              :height="solitaireSize.font.textLength"
            />
          </g>
        </g>
      </template>
    </defs>
  </svg>
</template>

<script setup lang="ts">
import { solitaireSize, SolitaireSuits, SolitaireNumber, fillColors, colors } from '../../config'

const PATHNAME = import.meta.env.VITE_APP_PATHNAME

const suits = [SolitaireSuits.spade, SolitaireSuits.heart, SolitaireSuits.club, SolitaireSuits.diamond]
const numbers = [
  SolitaireNumber.ace,
  SolitaireNumber.two,
  SolitaireNumber.three,
  SolitaireNumber.four,
  SolitaireNumber.five,
  SolitaireNumber.six,
  SolitaireNumber.seven,
  SolitaireNumber.eight,
  SolitaireNumber.nine,
  SolitaireNumber.ten,
  SolitaireNumber.jack,
  SolitaireNumber.queen,
  SolitaireNumber.king
]
</script>

<style lang="scss" scoped>
.defs {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
