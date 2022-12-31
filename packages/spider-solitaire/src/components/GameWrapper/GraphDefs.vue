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
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          :x="(solitaireSize.width - 40) / 2"
          :y="(solitaireSize.height - 40) / 2"
        >
          <path fill="#fff" d="M879.919511 380.537072c-33.648195 63.523391-101.234972 101.877097-157.86267 119.222666-26.312831 8.044974-93.189998 21.846582-126.208337 28.482561 27.987674-20.445767 82.22683-60.494767 102.175665-78.192073 49.611353-44.071487 146.864737-132.570287 143.048794-223.60078-4.993855-119.549864-107.799376-224.942291-107.799376-224.942291s86.392466 133.926113 83.834188 227.748011c-2.13292 78.378167-91.208407 154.895396-135.238994 194.506769-23.167643 20.862944-90.367918 70.382273-111.53352 85.879174-0.936603-2.1002-1.924332-4.141096-2.948869-6.132912 5.075654-3.611445 12.993839-11.235151 9.813886-22.14515-4.772997-16.400785-22.909975-27.014261-33.484596-29.779082-13.6012-3.533735-25.803629 5.869109-30.71773 10.404887-0.343558-0.010225-0.683025-0.047035-1.028628-0.04908-0.290388 0.002045-0.578731 0.03272-0.867074 0.0409-2.779136-2.885475-16.697308-16.255591-32.507093-12.147215-10.574621 2.762776-28.699329 13.378296-33.486641 29.779082-3.62576 12.411018 7.10837 20.566421 11.693228 23.404861-1.116562 2.1411-2.184045 4.341505-3.194268 6.609394-21.188097-15.513261-88.365877-65.00805-111.523295-85.864859-44.030587-39.613418-133.091759-116.130647-135.253309-194.506769C204.284868 135.433267 290.650749 1.507154 290.650749 1.507154S187.869768 106.899582 182.863643 226.451491c-3.803673 91.030493 93.451756 179.529294 143.063109 223.60078 19.940655 17.699351 74.200261 57.752441 102.192025 78.198208-33.006069-6.635979-99.905731-20.441677-126.224697-28.488696-56.642014-17.345569-124.226746-55.699275-157.848356-119.222666-53.537725-101.083643-78.787164-236.678464-78.787164-236.678464s6.633934 135.212409 55.862874 244.283766c35.576616 78.815794 113.639855 123.243108 177.245045 142.228755 31.417115 9.390574 124.198116 27.488698 143.128549 31.145132-0.163599 2.840485-0.259713 5.711645-0.278118 8.611435-27.92428-6.257656-108.122483-22.447808-134.245131-8.462151-39.284175 21.036768-95.10615 85.913939-95.776905 155.688851-0.505111 51.157362 23.705474 125.294228 23.705474 125.294228s1.957051-87.568332 2.462163-126.373981c0.69734-53.52341 48.695199-103.860733 77.856695-121.836158 21.664578-13.341487 89.785097-2.717786 117.052936 2.251529-6.37831 4.31901-12.310814 9.186076-17.762746 14.570523-22.566417 9.024522-120.772765 50.521371-137.699112 95.670566-15.662545 41.734068-3.118603 167.780851 24.662527 202.633542 31.926317 39.993785 125.474187 114.433309 125.474187 114.433309s-85.478357-89.621498-108.922073-136.49666c-19.353745-38.736119-21.010183-134.077442-11.024518-166.838113 8.603255-28.228982 53.282102-48.967182 75.185944-57.607247-5.73414 16.139027-9.134951 34.059237-9.926361 53.464106-1.793452 44.030587 73.62971 173.181658 139.711377 179.036452 66.093938-5.854794 141.5171-135.005865 139.737962-179.036452-0.795499-19.404869-4.198356-37.327124-9.936585-53.464106 21.907932 8.640065 66.592914 29.380309 75.196169 57.607247 9.985665 32.760671 8.316957 128.099949-11.038833 166.838113-23.431446 46.877207-108.920028 136.49666-108.920028 136.49666s93.54787-74.439524 125.457827-114.433309c27.795446-34.852691 40.325073-160.899474 24.689112-202.633542-16.957021-45.163509-115.202224-86.672629-137.721606-95.678746-5.449887-5.382402-11.3783-10.245378-17.754566-14.562343 27.267839-4.969315 95.392448-15.593016 117.067251-2.251529 29.149226 17.973379 77.147085 68.310702 77.844425 121.836158 0.505111 38.805648 2.476478 126.373981 2.476478 126.373981s24.196271-74.136866 23.705474-125.294228c-0.670755-69.772867-56.519315-134.652083-95.805535-155.688851-26.116512-13.989747-106.335166 2.21063-134.245131 8.464196-0.02045-2.89979-0.114519-5.77095-0.278118-8.61348 18.895668-3.650299 111.717568-21.754558 143.155133-31.149222 63.578605-18.985647 141.654114-63.412961 177.21846-142.228755 49.228941-109.071357 55.889459-244.283766 55.889459-244.283766S933.428606 279.45343 879.919511 380.537072zM511.969325 478.475527c29.449839 0.451942 54.247335 42.746336 54.247335 92.821901 0 3.993857-0.192229 7.946814-0.490797 11.817972-16.073588-6.208577-34.100136-9.629838-53.756539-9.928406-19.642088 0.300613-37.656367 3.719829-53.742224 9.928406-0.314928-3.869113-0.492842-7.824115-0.492842-11.817972C457.732215 521.221863 482.531756 478.927469 511.969325 478.475527zM544.098095 459.860022c7.715731 3.337417 22.077666 10.901819 26.879292 23.102203 2.995904 7.646201-1.047033 15.018375-4.247435 19.255585-10.464192-19.695257-25.312833-33.660464-42.257584-38.443686C529.957019 460.013396 537.245348 456.884568 544.098095 459.860022zM451.343679 481.211718c4.787312-12.200385 19.149246-19.750472 26.850662-23.102203 7.82207-3.372181 16.192197 1.151327 21.817952 5.511236-17.222869 4.646207-32.312819 18.772969-42.893575 38.770884C453.993981 498.817 447.816079 490.213745 451.343679 481.211718zM635.157218 717.207157c0.889569 21.50098-27.533687 84.36793-68.623585 127.14085-19.629818 20.464172-38.793379 32.527542-54.564308 34.552078-15.75866-2.024536-34.907906-14.087906-54.576578-34.552078-41.048998-42.772921-69.474299-105.639871-68.61336-127.14085 3.188133-77.680826 50.296423-126.267641 123.189938-127.470093C584.873065 590.939515 631.99567 639.52633 635.157218 717.207157z" />
        </svg>
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
                :xlink:href="`/${suit}-${number}.png`"
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
