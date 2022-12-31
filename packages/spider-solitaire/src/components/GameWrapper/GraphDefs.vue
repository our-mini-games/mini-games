<template>
  <svg class="defs">
    <defs>
      <rect
        id="empty-solitaire"
        x="0"
        y="0"
        :width="solitaireSize.width"
        :height="solitaireSize.height"
        rx="4"
        ry="4"
        stroke="#0088ff"
        fill="none"
      />

      <rect
        id="drop-target"
        x="0"
        y="0"
        :width="solitaireSize.width"
        :height="solitaireSize.height"
        rx="4"
        ry="4"
        stroke="none"
        fill="rgba(200, 50, 50, .1)"
      />

      <!-- 未开启牌面 -->
      <g id="unopened-solitaire">
        <rect
          x="0"
          y="0"
          :width="solitaireSize.width"
          :height="solitaireSize.height"
          rx="4"
          ry="4"
          fill="#0088ff"
          stroke="#333"
        />
        <image
          :xlink:href="`${PATHNAME}spider.svg`"
          width="40"
          height="40"
          :x="(solitaireSize.width - 40) / 2"
          :y="(solitaireSize.height - 40) / 2"
        />
      </g>

      <!-- 已开启牌面 -->
      <rect
        id="opened-solitaire"
        x="0"
        y="0"
        :width="solitaireSize.width"
        :height="solitaireSize.height"
        rx="4"
        ry="4"
        fill="#fff"
        stroke="#333"
      />

      <!-- 花色 -->
      <svg id="suit-spade" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M109.787429 607.36c0 101.997714 78.848 181.284571 181.284571 181.284571 56.996571 0 115.291429-18.852571 140.562286-68.992h4.297143c0 56.996571-62.573714 104.137143-87.862858 130.706286-30.866286 32.146286-11.995429 76.708571 27.849143 76.708572h272.146286c39.424 0 58.294857-44.562286 27.428571-76.708572-25.289143-26.569143-87.844571-73.709714-87.844571-130.706286h4.699429c24.868571 50.139429 83.565714 68.992 140.16 68.992 102.418286 0 181.705143-79.286857 181.705142-181.284571 0-192-255.433143-273.005714-357.851428-479.579429-8.576-17.554286-21.869714-30.848-44.580572-30.848-22.710857 0-35.565714 13.275429-44.562285 30.848C364.781714 334.354286 109.787429 415.36 109.787429 607.36z" />
      </svg>
      <svg id="suit-heart" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
      </svg>
      <svg id="suit-club" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M753.56 407.204c-51.876 0-98.514 21.618-131.706 56.862-14.058 14.922-38.466 32.616-64.872 48.168 12.402-47.34 51.57-106.956 78.768-133.11 34.848-33.552 56.232-80.712 56.232-133.146 0-100.98-80.406-182.898-179.982-183.978-99.594 1.08-180 82.998-180 183.978 0 52.452 21.402 99.612 56.232 133.146 27.198 26.154 66.366 85.77 78.768 133.11-26.406-15.552-50.814-33.246-64.872-48.168-33.192-35.244-79.83-56.862-131.706-56.862-100.53 0-181.998 82.314-181.998 183.978 0 101.628 81.468 183.996 181.998 183.996 51.894 0 98.514-22.284 131.706-57.528 14.778-15.714 40.824-35.28 68.814-51.534-2.646 129.816-64.62 225.144-127.728 262.71l0 33.174 337.518 0 0-33.174c-63.09-37.566-125.082-132.912-127.728-262.71 27.99 16.254 54.036 35.838 68.814 51.534 33.192 35.244 79.812 57.528 131.706 57.528 100.53 0 181.998-82.35 181.998-183.996 0-101.664-81.468-183.978-181.998-183.978z" />
      </svg>
      <svg id="suit-diamond" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M512 62L230.75 512l281.25 450 281.25-450z" />
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
          <g name="suits">
            <!-- Ace -->
            <g v-if="number === SolitaireNumber.ace">
              <use
                :xlink:href="`#suit-${suit}`"
                width="32"
                height="32"
                :x="(solitaireSize.width - 32) / 2"
                :y="(solitaireSize.height - 32) / 2"
              />
            </g>
            <!-- 2 -->
            <g v-else-if="number === SolitaireNumber.two">
              <use
                v-for="n in 2"
                :key="n"
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="(solitaireSize.width - 16) / 2"
                :y="8"
                :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
              />
            </g>
            <!-- 3 -->
            <g v-else-if="number === SolitaireNumber.three">
              <use
                v-for="n in 2"
                :key="n"
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="(solitaireSize.width - 16) / 2"
                :y="8"
                :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
              />
              <use
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="(solitaireSize.width - 16) / 2"
                :y="(solitaireSize.height - 16) / 2"
              />
            </g>
            <!-- 4 -->
            <g v-else-if="number === SolitaireNumber.four">
              <template
                v-for="n in 2"
                :key="n"
              >
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="12"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="solitaireSize.width - 12 - 16"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
              </template>
            </g>
            <!-- 5 -->
            <g v-else-if="number === SolitaireNumber.five">
              <template
                v-for="n in 2"
                :key="n"
              >
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="12"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="solitaireSize.width - 12 - 16"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
              </template>
              <use
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="(solitaireSize.width - 16) / 2"
                :y="(solitaireSize.height - 16) / 2"
              />
            </g>
            <!-- 6 -->
            <g v-else-if="number === SolitaireNumber.six">
              <template
                v-for="n in 2"
                :key="n"
              >
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="12"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="solitaireSize.width - 12 - 16"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
              </template>
              <use
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="12"
                :y="(solitaireSize.height - 16) / 2"
              />
              <use
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="solitaireSize.width - 16 - 12"
                :y="(solitaireSize.height - 16) / 2"
              />
            </g>
            <!-- 7 -->
            <g v-else-if="number === SolitaireNumber.seven">
              <template
                v-for="n in 2"
                :key="n"
              >
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="12"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="solitaireSize.width - 12 - 16"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
              </template>
              <use
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="(solitaireSize.width - 16) / 2"
                :y="(solitaireSize.height - 16) / 2 - 14"
              />
              <use
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="12"
                :y="(solitaireSize.height - 16) / 2"
              />
              <use
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="solitaireSize.width - 16 - 12"
                :y="(solitaireSize.height - 16) / 2"
              />
            </g>
            <!-- 8 -->
            <g v-else-if="number === SolitaireNumber.eight">
              <template
                v-for="n in 2"
                :key="n"
              >
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="12"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="solitaireSize.width - 12 - 16"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
              </template>
              <use
                v-for="n in 2"
                :key="n"
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="(solitaireSize.width - 16) / 2"
                :y="(solitaireSize.height - 16) / 2 - 14"
                :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
              />
              <use
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="12"
                :y="(solitaireSize.height - 16) / 2"
              />
              <use
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="solitaireSize.width - 16 - 12"
                :y="(solitaireSize.height - 16) / 2"
              />
            </g>
            <!-- 9 -->
            <g v-else-if="number === SolitaireNumber.nine">
              <template
                v-for="n in 2"
                :key="n"
              >
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="12"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="solitaireSize.width - 12 - 16"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
              </template>
              <template
                v-for="n in 2"
                :key="n"
              >
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="12"
                  :y="26"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="solitaireSize.width - 12 - 16"
                  :y="26"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
              </template>
              <use
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="(solitaireSize.width - 16) / 2"
                :y="(solitaireSize.height - 16) / 2"
              />
            </g>
            <!-- 10 -->
            <g v-else-if="number === SolitaireNumber.ten">
              <template
                v-for="n in 2"
                :key="n"
              >
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="12"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="solitaireSize.width - 12 - 16"
                  :y="8"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
              </template>
              <template
                v-for="n in 2"
                :key="n"
              >
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="12"
                  :y="27"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
                <use
                  :xlink:href="`#suit-${suit}`"
                  width="16"
                  height="16"
                  :x="solitaireSize.width - 12 - 16"
                  :y="27"
                  :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
                />
              </template>
              <use
                v-for="n in 2"
                :key="n"
                :xlink:href="`#suit-${suit}`"
                width="16"
                height="16"
                :x="(solitaireSize.width - 16) / 2"
                :y="(solitaireSize.height - 16) / 2 - 18"
                :transform="`rotate(${n === 1 ? 0 : 180}, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
              />
            </g>
            <g v-else>
              <image
                :xlink:href="`${PATHNAME}${suit}-${number}.png`"
                x="11"
                y="8"
                width="41"
                height="72"
              />
            </g>
          </g>

          <g
            v-for="index in 2"
            :key="index"
            :transform="index !== 2 ? '' : `rotate(180, ${solitaireSize.width / 2}, ${solitaireSize.height / 2})`"
          >
            <text
              x="4"
              y="4"
              dominant-baseline="hanging"
              text-anchor="auto"
              :font-size="number === SolitaireNumber.ten ? 9 : 12"
              font-weight="bold"
              font-family="Card Characters, Gill Sans, serif"
            >
              {{ number }}
            </text>
            <use
              :xlink:href="`#suit-${suit}`"
              x="4"
              y="14"
              :width="suit === SolitaireSuits.diamond ? 10 : 8"
              :height="suit === SolitaireSuits.diamond ? 10 : 8"
            />
          </g>
        </g>
      </template>
    </defs>
  </svg>
</template>

<script setup lang="ts">
import { solitaireSize, SolitaireSuits, SolitaireNumber, fillColors } from '../../config'

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
