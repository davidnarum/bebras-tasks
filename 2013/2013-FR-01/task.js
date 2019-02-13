function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         neighbors: [
            [1, 2, 3, 4, 5, 6, 7, 8],
            [0, 2, 8, 9, 10],
            [0, 1, 3, 9],
            [0, 2, 4, 9, 10],
            [0, 3, 5, 10],
            [0, 4, 6, 10],
            [0, 5, 7, 8, 10],
            [0, 6, 8],
            [0, 1, 6, 7, 10],
            [1, 2, 3, 10],
            [1, 3, 4, 5, 6, 8, 9]
         ],
         textPos: [
            [569.07745, 628.28558],
            [371.13702, 355.97137],
            [527.38702, 427.84637],
            [486.76202, 591.12762],
            [402.38702, 666.12762],
            [310.98077, 671.59637],
            [245.35577, 591.90887],
            [175.82452, 493.47137],
            [270.35577, 428.62762],
            [448.48077, 466.90887],
            [365.66827, 503.62762]
         ],
         paths: [
            "M 358.04112,742.68406 C 279.30406,736.94434 209.37879,696.00267 165.48111,629.93901 99.513628,530.66148 112.58915,399.04306 196.87092,313.96869 c 37.94071,-38.29752 86.38318,-63.04066 140.95743,-71.99734 16.60334,-2.72492 58.92858,-2.72492 75.53192,0 91.80225,15.06651 167.24185,76.81435 198.91731,162.81522 10.24778,27.8234 14.83708,54.48184 14.86059,86.32265 0.0228,30.77979 -3.38669,52.06473 -12.93678,80.76418 -26.43326,79.4359 -94.2499,142.59008 -175.39079,163.33253 -24.92038,6.37052 -56.21576,9.26804 -80.76948,7.47813 l 0,0 z m 40.73341,-23.43556 c 43.20328,-4.66744 80.21441,-19.23623 115.40859,-45.42862 12.6844,-9.44005 33.81037,-30.26587 43.0657,-42.45385 43.76386,-57.63092 58.30736,-128.55173 40.70538,-198.49824 -19.27419,-76.59156 -81.93251,-141.16784 -157.99819,-162.83452 -82.06468,-23.37543 -166.9437,-1.37058 -227.2866,58.92396 -43.05075,43.01624 -66.86232,100.57374 -66.86232,161.62008 0,61.53374 23.68195,118.4742 67.49749,162.28974 37.81812,37.81813 84.68418,60.37265 137.82165,66.32734 11.67923,1.30881 35.78113,1.33617 47.6483,0.0541 l 0,-4e-5 z",
            "M 253.68945 23.208984 C 234.17604 23.176649 214.87936 25.624073 195.89453 30.548828 C 189.79147 32.131988 184.43744 33.784113 183.99609 34.220703 C 183.55473 34.657293 193.82777 80.779251 206.82617 136.71289 L 223.27344 207.48633 A 54.995193 54.995193 0 0 1 253.51562 198.39062 A 54.995193 54.995193 0 0 1 293.29102 215.44141 L 316.63672 139.16406 C 343.84543 50.260513 345.85384 43.114717 344.01953 41.773438 C 340.63451 39.298257 311.50644 30.133479 299.57031 27.787109 C 284.17398 24.760546 268.86655 23.234134 253.68945 23.208984 z",
            "m 381.28876,276.83542 92.08624,37.75056 c 24.89682,-94.91912 -4.08518,-212.4674 -127.01172,-272.464846 -0.50941,-0.226309 -1.02013,-0.449462 -1.53125,-0.671875 v -4e-5 c -0.80704,5.450242 -1.21567,9.227896 -28.29687,97.714841 56.9,28.17379 71.65894,79.6665 64.7536,137.67136 z",
            "M 308.06055 246.93164 A 54.995193 54.995193 0 0 1 308.50977 253.38477 A 54.995193 54.995193 0 0 1 272.68359 304.89453 L 318.03516 369.23633 C 348.15968 411.9748 373.15865 446.94903 373.58789 446.95703 C 374.86938 446.98086 389.3114 436.88977 397.23828 430.43164 C 405.25652 423.89908 426.39004 402.85186 433 394.81641 C 448.42582 376.06391 469.53748 335.34133 472.83203 317.98242 L 473.47656 314.58594 L 380.83789 276.69727 L 308.06055 246.93164 z",
            "m 236.21094,481.60157 c 12.62356,0.78594 31.49788,0.65452 41.58789,-0.43555 0.2015,-0.0218 -0.47857,-0.14577 -0.27735,-0.16797 60.23695,-9.77784 84.17267,-27.02611 96.25391,-34.04102 -14.4926,-20.32179 -25.42823,-34.98223 -55.55273,-77.7207 l -45.35157,-64.3418 c -6.13092,2.2936 -12.62207,3.47423 -19.16797,3.48633 z",
            "m 253.21484,308.38086 c -2.94697,-0.0218 -5.39915,-0.28045 -8.30468,-0.77344 -20.77345,24.64977 -113.25598,134.11191 -115.67774,136.90039 -0.1764,0.20312 -0.74622,0.11339 -1.52539,-0.17969 30.18095,20.11127 64.41569,32.50158 101.75195,36.68555 1.70165,0.19069 3.71969,0.34922 5.87305,0.49024 z",
            "M 198.55469 252.69922 C 196.75885 253.39778 194.7492 254.17529 194.31055 254.37109 C 193.06055 254.92906 156.68905 268.53436 113.48438 284.60352 C 70.279705 300.67268 34.226961 314.25626 33.369141 314.79102 C 32.095641 315.5849 32.518709 317.80328 35.667969 326.87695 C 43.303369 348.87613 55.947182 372.52907 69.794922 390.71875 C 83.310302 408.47186 106.70772 430.82266 123.81445 442.32031 C 126.29133 443.98506 128.64487 444.96843 129.04492 444.50781 C 131.46668 441.71933 223.94921 332.25719 244.72266 307.60742 A 54.995193 54.995193 0 0 1 198.51953 253.38477 A 54.995193 54.995193 0 0 1 198.55469 252.69922 z ",
            "M 90.449526,91.191664 C 54.716506,127.04267 24.138672,182.75639 24.138672,252.39648 c 0,21.82475 2.994892,43.06714 8.794922,63.35547 0.0888,-0.4687 0.301807,-0.76068 0.623047,-0.96093 0.85782,-0.53476 36.910534,-14.11834 80.115239,-30.1875 z",
            "m 114.15525,284.25825 c 43.20466,-16.06916 79.0928,-29.32919 80.3428,-29.88716 0.41884,-0.18695 2.32303,-0.92316 4.05273,-1.5957 0.2056,-18.33674 9.53735,-35.36462 24.88281,-45.4043 l -16.41992,-70.6582 C 194.01527,80.779253 186.28129,44.813543 184.18359,34.220703 166.21484,40.080083 125.0487,56.618174 91.001953,90.777344 Z",
            "m 316.14453,140.33594 -22.95508,75.10351 v 0.002 c 8.20028,8.62249 13.38275,19.67207 14.76953,31.49023 l 72.77735,29.76563 c 6.64063,-72.26563 -20.06054,-114.68169 -64.5918,-136.36137 z",
            "m 430.36534,491.56656 a 54.995193,54.995193 0 0 1 -54.99519,54.99519 54.995193,54.995193 0 0 1 -54.9952,-54.99519 54.995193,54.995193 0 0 1 54.9952,-54.99519 54.995193,54.995193 0 0 1 54.99519,54.99519 z"
         ]
      },
      medium: {
         neighbors: [
            [1, 2, 3, 4, 5, 6],
            [0, 2, 6, 7, 10],
            [0, 1, 3, 8, 10],
            [0, 2, 4, 8, 10],
            [0, 3, 5, 9, 10],
            [0, 4, 6, 9, 10],
            [0, 1, 5, 7, 10],
            [1, 6, 10],
            [2, 3, 10, 16, 17],
            [4, 5, 10],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18],
            [10, 14, 15],
            [10, 13, 18],
            [10, 12, 14, 18, 19],
            [10, 11, 13, 15, 19],
            [10, 11, 14, 16, 19],
            [8, 10, 15, 17, 19],
            [8, 10, 16, 18, 19],
            [10, 12, 13, 17, 19],
            [13, 14, 15, 16, 17, 18]
         ],
         textPos: [
            [569.07745, 628.28558],
            [384.39526, 304.04321],
            [534.01611, 410.1687],
            [513.27856, 628.69269],
            [397.96762, 692.6441],
            [198.28561, 594.25659],
            [197.84705, 404.08365],
            [302.88278, 339.89664],
            [505.68976, 534.69366],
            [275.01868, 656.94385],
            [236.76819, 570.07977],
            [324.76819, 400.07977],
            [309.30023, 603.37299],
            [291.07013, 550.33997],
            [281.67886, 464.71375],
            [388.84973, 417.75745],
            [446.85458, 455.32248],
            [430.28177, 563.04578],
            [373.38177, 599.50598],
            [365.66827, 503.62762]
         ],
         paths: [
            "M 358.04112,742.68406 C 279.30406,736.94434 209.37879,696.00267 165.48111,629.93901 99.513628,530.66148 112.58915,399.04306 196.87092,313.96869 c 37.94071,-38.29752 86.38318,-63.04066 140.95743,-71.99734 16.60334,-2.72492 58.92858,-2.72492 75.53192,0 91.80225,15.06651 167.24185,76.81435 198.91731,162.81522 10.24778,27.8234 14.83708,54.48184 14.86059,86.32265 0.0228,30.77979 -3.38669,52.06473 -12.93678,80.76418 -26.43326,79.4359 -94.2499,142.59008 -175.39079,163.33253 -24.92038,6.37052 -56.21576,9.26804 -80.76948,7.47813 l 0,0 z m 40.73341,-23.43556 c 43.20328,-4.66744 80.21441,-19.23623 115.40859,-45.42862 12.6844,-9.44005 33.81037,-30.26587 43.0657,-42.45385 43.76386,-57.63092 58.30736,-128.55173 40.70538,-198.49824 -19.27419,-76.59156 -81.93251,-141.16784 -157.99819,-162.83452 -82.06468,-23.37543 -166.9437,-1.37058 -227.2866,58.92396 -43.05075,43.01624 -66.86232,100.57374 -66.86232,161.62008 0,61.53374 23.68195,118.4742 67.49749,162.28974 37.81812,37.81813 84.68418,60.37265 137.82165,66.32734 11.67923,1.30881 35.78113,1.33617 47.6483,0.0541 l 0,-4e-5 z",
            "m 253.68945,23.208984 c -19.51341,-0.03233 -38.81009,2.415089 -57.79492,7.339844 -6.10306,1.58316 -11.45709,3.235285 -11.89844,3.671875 -0.23842,0.235852 2.86,14.657646 7.64844,36.029297 a 54.995193,54.995193 0 0 1 11.04688,-1.126953 54.995193,54.995193 0 0 1 46.72851,26.068359 c 10.57924,-0.1521 21.96275,0.247744 27.98633,1.236328 16.87841,2.770072 32.86608,8.065666 47.55469,15.501956 19.21262,-62.967137 20.68232,-68.968952 19.05859,-70.156252 -3.38502,-2.475181 -32.51309,-11.639959 -44.44922,-13.986329 -15.39633,-3.026563 -30.70376,-4.552975 -45.88086,-4.578125 z",
            "m 344.83203,41.449219 c -0.71194,4.807976 -1.1762,8.511895 -19.98633,70.419921 35.60572,17.9898 63.53619,48.63105 77.64649,86.94141 4.05564,11.01134 6.69955,21.73405 8.10742,33.16015 a 54.995193,54.995193 0 0 1 38.22656,52.35157 54.995193,54.995193 0 0 1 -3.39258,18.82226 l 27.94141,11.44141 c 24.89682,-94.91912 -4.08518,-212.4674 -127.01172,-272.464846 -0.50941,-0.226309 -1.02013,-0.449462 -1.53125,-0.671875 z",
            "m 445.44141,303.12109 a 54.995193,54.995193 0 0 1 -51.60938,36.19532 54.995193,54.995193 0 0 1 -6.98242,-0.5 c -13.64092,21.05617 -32.26801,38.81802 -53.93359,51.47265 22.90535,32.36425 40.3175,56.66137 40.67187,56.66797 1.28149,0.0238 15.72351,-10.06726 23.65039,-16.52539 8.01824,-6.53256 29.15176,-27.57978 35.76172,-35.61523 15.42582,-18.7525 36.53748,-59.47508 39.83203,-76.83399 l 0.64453,-3.39648 z",
            "m 333.07422,390.19922 c -12.3541,7.23488 -25.69082,12.81858 -39.66406,16.39062 -15.67084,4.00602 -35.35075,5.82869 -50.79102,4.70313 -5.45336,-0.39754 -10.8347,-1.07888 -16.13867,-2.00586 a 54.995193,54.995193 0 0 1 -49.20117,30.57227 54.995193,54.995193 0 0 1 -34.09375,-11.84961 c -3.65119,4.31463 -13.62157,16.11627 -13.95313,16.49804 -0.1764,0.20312 -0.74622,0.11339 -1.52539,-0.17969 30.18095,20.11127 64.41569,32.50158 101.75195,36.68555 1.70165,0.19069 3.71969,0.34922 6.3125,0.53906 13.06302,0.83477 31.93734,0.70336 42.02735,-0.38671 0.2015,-0.0218 -0.47857,-0.14577 -0.27735,-0.16797 60.23695,-9.77784 84.17267,-27.02611 96.25391,-34.04102 -11.7121,-16.42292 -21.63002,-29.92223 -40.70117,-56.75781 z",
            "m 99.494141,289.82031 c -36.499444,13.60903 -65.365148,24.49702 -66.125,24.97071 -1.2735,0.79388 -0.850432,3.01226 2.298828,12.08593 7.6354,21.99918 20.279213,45.65212 34.126953,63.8418 13.51538,17.75311 36.912798,40.10391 54.019528,51.60156 2.47688,1.66475 4.83042,2.64812 5.23047,2.1875 0.33329,-0.38375 10.34531,-12.23565 14.02539,-16.58398 a 54.995193,54.995193 0 0 1 -20.78515,-43.06055 54.995193,54.995193 0 0 1 9.42773,-30.76172 c 0.0324,0.0393 0.0652,0.078 0.0977,0.11719 -3.63414,-4.39095 -7.07285,-8.99575 -10.28125,-13.82422 -10.51266,-15.82098 -17.82671,-32.94837 -22.035159,-50.57422 z",
            "m 184.18359,34.220703 c -17.96875,5.85938 -59.13391,22.397471 -93.457028,56.763672 -36.009386,36.058035 -66.58789,91.772015 -66.58789,161.412105 0,21.82475 2.994892,43.06714 8.794922,63.35547 0.0888,-0.4687 0.301807,-0.76068 0.623047,-0.96093 0.747701,-0.46612 30.126431,-11.5383 65.941406,-24.95118 -12.406273,-51.93078 2.198373,-108.1934 41.771483,-148.13867 2.84462,-2.87137 5.79051,-5.61188 8.81836,-8.23828 -0.44479,0.38587 -0.89111,0.76896 -1.33203,1.16016 a 54.995193,54.995193 0 0 1 -1.05859,-10.50586 54.995193,54.995193 0 0 1 44.21484,-53.919924 c -3.95494,-17.887643 -6.66085,-30.585135 -7.72852,-35.976563 z",
            "m 202.69141,69.123047 a 54.995193,54.995193 0 0 0 -54.99414,54.994143 54.995193,54.995193 0 0 0 1.05859,10.50586 c 22.61288,-20.06244 50.32481,-33.13593 81.15234,-38.195316 4.41735,-0.724969 11.7538,-1.124804 19.51172,-1.236328 A 54.995193,54.995193 0 0 0 202.69141,69.123047 Z",
            "m 570.68184,522.50248 a 54.995193,54.995193 0 0 1 -54.99519,54.99519 54.995193,54.995193 0 0 1 -54.9952,-54.99519 54.995193,54.995193 0 0 1 54.9952,-54.99519 54.995193,54.995193 0 0 1 54.99519,54.99519 z",
            "m 131.71289,354.10156 a 54.995193,54.995193 0 0 0 -9.42773,30.76172 54.995193,54.995193 0 0 0 54.99414,54.9961 54.995193,54.995193 0 0 0 49.20117,-30.57227 c -37.30898,-6.51392 -70.57328,-25.88767 -94.76758,-55.18555 z",
            "M 253.65625 95.142578 C 244.39214 95.142578 235.1286 95.570969 229.9082 96.427734 C 195.58994 102.06001 165.12803 117.61831 141.26953 141.70117 C 88.270101 195.19902 80.046557 277.96522 121.5293 340.39453 C 149.13376 381.93775 193.10642 407.68363 242.61914 411.29297 C 258.05941 412.41853 277.73932 410.59586 293.41016 406.58984 C 331.81294 396.77275 365.46388 371.84516 386.85156 338.81836 A 54.995193 54.995193 0 0 1 361.85352 329.00781 C 360.71315 330.64831 359.54545 332.27719 358.32617 333.88281 C 352.99308 340.90575 340.81875 352.90618 333.50977 358.3457 C 313.23026 373.43822 291.90428 381.83202 267.00977 384.52148 C 260.17169 385.26021 246.28447 385.24439 239.55469 384.49023 C 208.93593 381.05903 181.93015 368.06297 160.13867 346.27148 C 134.89137 321.02418 121.24609 288.21466 121.24609 252.75781 C 121.24609 217.58182 134.96682 184.41564 159.77344 159.62891 C 194.5441 124.88612 243.45308 112.20643 290.74023 125.67578 C 334.57063 138.16051 370.67512 175.37047 381.78125 219.50391 C 382.68022 223.07621 383.42604 226.65311 384.03516 230.22852 A 54.995193 54.995193 0 0 1 393.83203 229.32617 A 54.995193 54.995193 0 0 1 410.59961 231.9707 C 409.19141 220.54472 406.54783 209.82189 402.49219 198.81055 C 382.57352 144.73008 335.13483 105.9021 277.40625 96.427734 C 272.18586 95.570969 262.92036 95.142578 253.65625 95.142578 z ",
            "m 255.2168,120.41211 c -35.09252,-0.48431 -68.89321,12.98208 -94.90039,38.69141 a 54.995193,54.995193 0 0 0 42.375,20.00976 54.995193,54.995193 0 0 0 54.99609,-54.99609 54.995193,54.995193 0 0 0 -0.12891,-3.63281 c -0.78057,-0.0245 -1.56242,-0.0615 -2.34179,-0.0723 z",
            "m 177.2793,329.86914 a 54.995193,54.995193 0 0 0 -26.04297,6.61133 c 2.78426,3.37505 5.75308,6.64175 8.90234,9.79101 20.03562,20.03563 44.48114,32.62799 72.08789,37.19532 A 54.995193,54.995193 0 0 0 177.2793,329.86914 Z",
            "m 198.55469,252.69922 c -1.79584,0.69856 -3.80549,1.47607 -4.24414,1.67187 -1.13116,0.50493 -32.46037,12.22102 -70.15039,26.25196 4.35472,20.44631 13.54421,39.42477 27.09179,55.84961 a 54.995193,54.995193 0 0 1 26.02735,-6.60352 54.995193,54.995193 0 0 1 36.71875,14.125 c 11.58241,-13.71416 25.79378,-30.5358 30.72461,-36.38672 a 54.995193,54.995193 0 0 1 -46.20313,-54.22265 54.995193,54.995193 0 0 1 0.0352,-0.68555 z",
            "m 180.86133,142.36133 c -7.46168,4.95291 -14.52802,10.71296 -21.08789,17.26758 -24.80662,24.78673 -38.52735,57.95291 -38.52735,93.1289 0,9.50792 0.98906,18.82298 2.91211,27.85547 38.02173,-14.19119 69.20394,-25.73515 70.33985,-26.24219 0.41884,-0.18695 2.32303,-0.92316 4.05273,-1.5957 0.2056,-18.33674 9.53735,-35.36462 24.88281,-45.4043 l -6.98828,-30.07421 a 54.995193,54.995193 0 0 1 -13.7539,1.8164 54.995193,54.995193 0 0 1 -42.375,-20.00976 c 6.40711,-6.33374 13.28899,-11.92011 20.54492,-16.74219 z",
            "m 257.55859,120.48438 a 54.995193,54.995193 0 0 1 0.12891,3.63281 54.995193,54.995193 0 0 1 -41.41992,53.22461 l 7.00586,30.14453 a 54.995193,54.995193 0 0 1 30.24218,-9.09571 54.995193,54.995193 0 0 1 39.7754,17.05079 l 23.3457,-76.27735 c 0.27438,-0.89652 0.46119,-1.5126 0.73047,-2.39258 -8.42251,-4.6903 -17.34811,-8.45269 -26.62696,-11.0957 -11.03952,-3.14452 -22.16584,-4.84517 -33.18164,-5.1914 z",
            "m 317.26562,136.7168 c -0.34091,1.11411 -0.57607,1.89123 -0.92578,3.0332 l -23.15039,75.68945 v 0.002 c 8.20028,8.62249 13.38275,19.67207 14.76953,31.49023 l 35.85938,14.64648 a 54.995193,54.995193 0 0 1 40.21875,-31.35156 c -0.60837,-3.57478 -1.35701,-7.1508 -2.25586,-10.72265 -8.76435,-34.82771 -33.10408,-65.3311 -64.51563,-82.78711 z",
            "m 308.06055,246.93164 a 54.995193,54.995193 0 0 1 0.44922,6.45313 54.995193,54.995193 0 0 1 -35.82618,51.50976 l 44.94532,63.76563 c 5.39065,-3.01 10.67113,-6.43725 15.88086,-10.31446 7.30898,-5.43952 19.48331,-17.43995 24.8164,-24.46289 1.21941,-1.60579 2.38513,-3.23622 3.52539,-4.87695 a 54.995193,54.995193 0 0 1 -23.01562,-44.68359 54.995193,54.995193 0 0 1 4.99218,-22.76172 z",
            "m 272.87109,304.89453 c -6.13092,2.2936 -12.62207,3.47423 -19.41211,3.48633 -3.19111,-0.0218 -5.64329,-0.28045 -8.54882,-0.77344 -4.94318,5.86557 -19.18481,22.72427 -30.80078,36.47852 a 54.995193,54.995193 0 0 1 18.11718,39.38086 c 2.41952,0.40051 4.86077,0.74694 7.32813,1.02343 6.72978,0.75416 20.617,0.77003 27.45508,0.0312 18.5525,-2.0043 35.12122,-7.18311 50.7539,-15.93554 z",
            "m 430.36534,491.56656 a 54.995193,54.995193 0 0 1 -54.99519,54.99519 54.995193,54.995193 0 0 1 -54.9952,-54.99519 54.995193,54.995193 0 0 1 54.9952,-54.99519 54.995193,54.995193 0 0 1 54.99519,54.99519 z"
         ]
      },
      hard: {
         neighbors: [
            [1, 16, 15, 3, 18, 2, 5, 4],
            [0, 16, 17, 13, 12, 3, 2, 9, 8, 4],
            [0, 5, 6, 10, 9, 1, 3, 18],
            [0, 18, 2, 1, 12, 11, 15],
            [0, 1, 8, 7, 5],
            [0, 4, 7, 6, 2],
            [5, 7, 10, 2],
            [4, 8, 10, 6, 5],
            [1, 9, 10, 7, 4],
            [1, 2, 10, 8],
            [2, 6, 7, 8, 9],
            [3, 12, 13, 14, 15],
            [1, 13, 11, 3],
            [1, 17, 14, 11, 12],
            [11, 13, 17, 16, 15],
            [0, 3, 11, 14, 16],
            [0, 15, 14, 17, 1],
            [1, 16, 14, 13],
            [0, 2, 3]
         ],
         textPos: [
            [569.07745, 628.28558],
            [369.51666, 378.62762],
            [270.4426, 571.22021],
            [469.51666, 577.70172],
            [243.59076, 343.44244],
            [170.44258, 472.14612],
            [220.44258, 502.70169],
            [236.18333, 431.4054],
            [298.22037, 398.07208],
            [317.66483, 469.36835],
            [275.99814, 484.1832],
            [504.70187, 512.8869],
            [439.88705, 489.73871],
            [435.25742, 451.77579],
            [499.1463, 438.81284],
            [567.66486, 471.22021],
            [505.62778, 352.70169],
            [452.85001, 385.1091],
            [367.66483, 648.99799]
         ],
         paths: [
            "M 358.04112,742.68406 C 279.30406,736.94434 209.37879,696.00267 165.48111,629.93901 99.513628,530.66148 112.58915,399.04306 196.87092,313.96869 c 37.94071,-38.29752 86.38318,-63.04066 140.95743,-71.99734 16.60334,-2.72492 58.92858,-2.72492 75.53192,0 91.80225,15.06651 167.24185,76.81435 198.91731,162.81522 10.24778,27.8234 14.83708,54.48184 14.86059,86.32265 0.0228,30.77979 -3.38669,52.06473 -12.93678,80.76418 -26.43326,79.4359 -94.2499,142.59008 -175.39079,163.33253 -24.92038,6.37052 -56.21576,9.26804 -80.76948,7.47813 l 0,0 z m 40.73341,-23.43556 c 43.20328,-4.66744 80.21441,-19.23623 115.40859,-45.42862 12.6844,-9.44005 33.81037,-30.26587 43.0657,-42.45385 43.76386,-57.63092 58.30736,-128.55173 40.70538,-198.49824 -19.27419,-76.59156 -81.93251,-141.16784 -157.99819,-162.83452 -82.06468,-23.37543 -166.9437,-1.37058 -227.2866,58.92396 -43.05075,43.01624 -66.86232,100.57374 -66.86232,161.62008 0,61.53374 23.68195,118.4742 67.49749,162.28974 37.81812,37.81813 84.68418,60.37265 137.82165,66.32734 11.67923,1.30881 35.78113,1.33617 47.6483,0.0541 l 0,-4e-5 z",
            "M 244.56136,245.24594 230.46053,239.33625 206.82707,137.63871 C 193.82867,81.705075 183.55473,35.583978 183.99609,35.14739 c 0.44135,-0.436586 5.79589,-2.089109 11.89895,-3.672274 33.75081,-8.755116 68.48463,-9.680744 103.67624,-2.762886 11.93613,2.346366 41.06356,11.512749 44.44858,13.987935 1.83431,1.34128 -0.17458,8.485932 -27.38329,97.389485 l -29.36283,95.94201 -13.01342,7.6182 c -7.15738,4.19001 -13.59498,7.59291 -14.30578,7.56199 -0.71079,-0.0309 -7.63772,-2.71558 -15.39318,-5.96591 l 0,0 z",
            "M 125.6656,441.39353 C 108.55887,429.89588 85.161969,407.54678 71.646586,389.79367 57.798849,371.60399 45.154534,347.95006 37.519131,325.95088 c -3.149257,-9.07367 -3.570765,-11.29105 -2.297263,-12.08493 0.857821,-0.53476 36.908958,-14.11978 80.113632,-30.18894 43.20468,-16.06916 79.57669,-29.67316 80.82669,-30.23113 1.25,-0.55796 9.0789,-3.56802 17.39755,-6.68903 l 15.12482,-5.67456 15.13178,6.32254 15.13177,6.32254 0.82122,18.12135 c 0.65498,14.45295 0.51102,18.51042 -0.71114,20.04337 -1.22157,1.53221 -125.47619,148.59844 -128.16182,151.69075 -0.40005,0.46062 -2.75389,-0.52456 -5.23077,-2.18931 l 0,0 z",
            "m 317.5267,368.98729 -54.77185,-77.70631 -0.78817,-18.6626 -0.78816,-18.6626 13.2563,-7.69784 13.25631,-7.69784 92.63833,37.88808 92.63836,37.88807 -0.64484,3.39762 c -3.29455,17.35891 -24.40504,58.08086 -39.83086,76.83336 -6.60996,8.03545 -27.74351,29.08203 -35.76175,35.61459 -7.92688,6.45813 -22.36988,16.55011 -23.65137,16.52628 -0.42924,-0.008 -25.42778,-34.98234 -55.5523,-77.72081 l 0,0 z",
            "m 79.259953,145.45326 c -9.92123,-6.74849 -18.294282,-12.52565 -18.606782,-12.83815 -1.736563,-1.73657 13.73719,-22.20679 28.608436,-37.846084 17.349303,-18.245339 37.170223,-33.155744 59.849513,-45.022137 14.68656,-7.684392 30.39108,-13.933656 31.58102,-12.566957 0.86668,0.995437 10.40905,41.795736 10.37405,44.356374 -0.0144,1.053934 -88.5396,73.275944 -92.562966,75.516154 -0.662568,0.36892 -9.322039,-4.85072 -19.243271,-11.5992 z",
            "m 31.995158,307.23398 c -8.469503,-29.9347 -8.445875,-76.01648 0.05635,-109.89993 4.687105,-18.67926 15.207845,-44.70422 23.303919,-57.64647 l 3.334507,-5.33049 17.585158,11.90679 c 9.671836,6.54873 18.019817,12.34145 18.551068,12.8727 0.733898,0.7339 -15.781967,135.53315 -16.659924,135.97503 -1.003918,0.5053 -44.10575,16.38373 -44.473434,16.38373 -0.27058,0 -1.034519,-1.91761 -1.697643,-4.26136 z",
            "m 81.284523,289.05216 c 0.364654,-2.34375 2.502933,-18.57955 4.751732,-36.07955 2.248799,-17.5 4.177378,-31.9121 4.285731,-32.02688 0.425281,-0.45053 50.679304,4.89628 51.234114,5.45109 0.81071,0.81072 -15.24057,48.99544 -16.83908,50.5496 -1.25668,1.22182 -41.271759,16.41811 -43.143348,16.3843 -0.523686,-0.009 -0.653804,-1.93481 -0.289149,-4.27856 z",
            "m 115.82869,221.26579 c -12.93342,-1.34476 -23.89254,-2.82225 -24.353597,-3.28331 -1.294421,-1.29442 6.128098,-56.73341 7.79762,-58.24064 5.281507,-4.76807 48.711617,-39.15559 49.452007,-39.15559 0.50532,0 3.99825,9.58807 7.76208,21.30682 l 6.84331,21.30681 -10.10161,30.39773 c -7.9826,24.02122 -10.49838,30.36789 -11.99305,30.25546 -1.04029,-0.0782 -12.47333,-1.24252 -25.40676,-2.58728 z",
            "m 164.22406,158.35988 c -11.10939,-34.03131 -12.94797,-40.64908 -11.57742,-41.67165 0.89611,-0.66859 9.77529,-7.72483 19.73151,-15.68053 9.95622,-7.955706 18.61359,-14.351979 19.23859,-14.213944 0.88335,0.195093 24.74544,98.738824 24.03536,99.259264 -0.0944,0.0692 -8.73289,2.96919 -19.19653,6.44437 l -19.02481,6.31853 -13.2067,-40.45604 z",
            "m 193.93873,249.96551 c -6.46557,-18.4851 -15.34823,-48.03583 -14.63387,-48.68379 1.82152,-1.65222 36.08333,-12.49147 36.83695,-11.65394 0.87025,0.96713 11.3067,45.41514 11.27139,48.00392 -0.0156,1.14281 -4.98163,3.53495 -15.06895,7.25871 -8.27513,3.05479 -15.68059,5.7925 -16.45657,6.08381 -0.77598,0.29131 -1.65301,-0.16261 -1.94895,-1.00871 l 0,0 z",
            "m 128.57936,275.40659 c 0.11652,-3.1895 36.2582,-107.3067 36.78021,-105.95671 2.8551,7.38363 26.63439,82.38794 26.24396,82.77836 -0.27546,0.27547 -12.65791,5.03433 -27.51654,10.57525 -14.85864,5.54093 -28.93332,10.83306 -31.27707,11.76029 -2.34375,0.92724 -4.2475,1.3065 -4.23056,0.84281 z",
            "m 393.90749,280.05575 c -26.29456,-10.79238 -47.95164,-19.76585 -48.12684,-19.94105 -0.43949,-0.43949 6.83469,-26.46232 7.39752,-26.46407 0.24927,-7.8e-4 18.68894,4.97061 40.97705,11.04753 22.28811,6.07692 40.65425,10.91853 40.81364,10.75914 0.22903,-0.22903 3.07284,16.62437 7.1372,42.29742 0.16975,1.07225 0.15138,1.94369 -0.0408,1.93653 -0.1922,-0.007 -21.86319,-8.84313 -48.15775,-19.6355 l 10e-6,0 z",
            "m 316.14238,248.19069 c -14.82224,-6.09518 -26.95206,-11.29283 -26.95514,-11.55034 -0.0165,-1.38053 5.75042,-19.05404 6.16873,-18.90486 0.26854,0.0958 12.87357,3.53973 28.01118,7.65323 15.13762,4.11351 27.61166,7.55441 27.72009,7.64646 0.38053,0.32303 -7.06218,26.30175 -7.52613,26.26988 -0.25805,-0.0177 -12.59648,-5.01919 -27.41873,-11.11437 z",
            "m 343.14562,229.27622 c -26.20899,-7.16498 -47.69504,-13.08582 -47.74677,-13.1574 -0.12219,-0.16911 16.57481,-54.48589 16.8263,-54.73738 0.10513,-0.10514 14.43423,14.30591 31.84244,32.02455 45.05164,45.85501 48.05932,48.96235 47.35893,48.92815 -0.34549,-0.0169 -22.0719,-5.89293 -48.2809,-13.05792 l 0,0 z",
            "M 414.92791,248.84787 395.47948,243.5116 365.3011,212.77766 c -16.59811,-16.90367 -30.17907,-30.94037 -30.1799,-31.19266 -0.002,-0.51304 49.3633,-51.14679 49.86517,-51.14679 0.17544,0 7.64436,6.52621 16.59759,14.5027 8.95324,7.97648 16.80002,14.94323 17.43731,15.48165 1.11759,0.94421 1.41617,2.58241 8.4137,46.16244 3.99024,24.85091 7.36504,45.75114 7.49955,46.44495 0.13451,0.69381 0.0639,1.23733 -0.15682,1.20783 -0.22075,-0.0295 -9.15316,-2.45496 -19.84979,-5.38991 z",
            "m 459.01094,306.56123 c -11.47481,-4.75067 -14.35017,-6.27896 -14.8762,-7.90687 -1.33511,-4.13179 -22.10492,-136.50235 -21.51127,-137.09601 0.92382,-0.92382 33.11931,-15.46022 33.4684,-15.11112 1.09611,1.0961 10.15275,21.54023 12.68624,28.63745 10.82279,30.31853 15.39566,64.81227 12.68567,95.68966 -1.43762,16.3801 -6.12033,41.92212 -7.65292,41.74307 -0.31668,-0.037 -6.97665,-2.71727 -14.79992,-5.95618 z",
            "m 378.0357,121.51393 c -23.23804,-20.69237 -42.11613,-37.858314 -41.9513,-38.146554 0.16482,-0.288241 2.90854,-9.058557 6.09715,-19.489592 3.18861,-10.431034 5.93095,-19.106039 6.09409,-19.277789 0.6765,-0.712193 21.42392,10.862771 31.42495,17.531951 23.22991,15.490841 44.61654,36.307881 60.81865,59.198874 8.07539,11.40924 14.51207,22.31532 13.6358,23.10401 -1.17229,1.05512 -31.65827,14.71483 -32.82519,14.70783 -0.57373,-0.003 -20.0561,-16.93637 -43.29415,-37.62873 l 0,0 z",
            "m 323.28179,169.58662 -10.29811,-10.38356 11.02509,-36.02471 c 6.0638,-19.81359 11.16628,-36.169759 11.33885,-36.347048 0.33802,-0.347271 47.65064,41.415928 47.7312,42.132688 0.0267,0.23707 -11.0997,11.81044 -24.72523,25.71861 l -24.77369,25.28757 -10.29811,-10.38355 z",
            "m 231.42473,480.14875 c -24.32096,-2.84999 -47.45731,-8.91203 -68.10345,-17.84402 -8.38739,-3.62857 -24.68552,-12.12742 -29.36663,-15.31356 l -2.0119,-1.36938 47.76756,-56.38924 c 26.27215,-31.01409 55.3474,-65.34654 64.61168,-76.29435 l 16.84412,-19.9051 1.92141,2.66372 c 1.05677,1.46505 25.73706,36.41372 54.84509,77.66372 l 52.92368,75 -3.98302,2.52016 c -6.28959,3.97957 -25.49854,12.92638 -35.87957,16.71136 -10.74761,3.91863 -30.30998,8.91678 -43.10345,11.01286 -8.25234,1.35205 -48.67146,2.45716 -56.46552,1.54383 z"
         ]
      }
   };
   var paper;
   var paths = [];
   var texts = [];
   var pieces = [];
   var textAttr = {
      "font-size": '30px',
      "font-style": 'normal',
      "font-weight": 'normal',
      "line-height": '125%',
      "letter-spacing": '0px',
      "word-spacing": '0px',
      fill: '#000000',
      "fill-opacity": '1',
      stroke: 'none',
      'stroke-width':'1',
      'stroke-opacity':'1',
      "font-family": 'Sans'
   };
   var pathAttr = {
      "fill-opacity": '1',
      stroke: '#000000',
      "stroke-width": '2.86',
      "stroke-miterlimit": '4',
      "stroke-opacity": '1',
      "stroke-dasharray": 'none'
   };
   var neighbors;
   var currentColor = 0;
   var colors = ["white", "yellow", "#FF6060", "#60FF60", "#6060FF"];
   var colorsLetters = ['', 'J', 'R', 'V', 'B'];
   var nbPiecesToColor;
   var nbPieces;

   subTask.loadLevel = function(curLevel) {
      level = curLevel;
      neighbors = data[level].neighbors;
      textPos = data[level].textPos;
      paths = data[level].paths;
      nbPieces = neighbors.length;
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
   };

   subTask.resetDisplay = function() {
      loadCircle();
      for (var iPatch = 0; iPatch < 5; iPatch++) {               
         setMouseDown(iPatch);
      }
      selectPatch(1);
      updateNbPiecesToColor();
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = Beav.Array.make(nbPieces,0);
      return defaultAnswer;
   };

   subTask.unloadLevel = function(callback) {
      callback();
   };

   function getResultAndMessage() {
      var result;
      var wrong = false;
      for (var iArea = 0; iArea < nbPieces; iArea++) {
         if (answer[iArea] == 0) {
            return { successRate: 0, message: taskStrings.whitePiece };
         }
      }
      if (checkNeighbors(answer)) {
         return { successRate: 1, message: taskStrings.success };
      }else{
         return { successRate: 0, message: taskStrings.sameColor };
      }
   };

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };

   function setMouseDown(selectedPatch) {
      $("#patch" + selectedPatch).css("background-color", colors[selectedPatch]);
      $("#patch" + selectedPatch).mousedown(function() { selectPatch(selectedPatch) });
   }

   function selectPatch(selectedPatch) {
      for (var iPatch = 0; iPatch < 5; iPatch++) {
         $("#patch" + iPatch).css("border", "solid #E0E0E0 4px");
      }
      $("#patch" + selectedPatch).css("border", "solid black 4px");
      currentColor = selectedPatch;
   }

   function checkNeighborsValid() {
      var matrix = [];
      for (var iArea = 0; iArea < nbPieces; iArea++) {
         matrix[iArea] = [];
         for (var iArea2 = 0; iArea2 < nbPieces; iArea2++) {
            matrix[iArea][iArea2] = 0;
         }
      }
      for (var iArea = 0; iArea < nbPieces; iArea++) {
         for (var iNeighbor = 0; iNeighbor < neighbors[iArea].length; iNeighbor++) {
            var neighbor = neighbors[iArea][iNeighbor];
            matrix[iArea][neighbor]++;
            matrix[neighbor][iArea]++;
         }
      }
      for (var iArea = 0; iArea < nbPieces; iArea++) {
         for (var iArea2 = 0; iArea2 < nbPieces; iArea2++) {
            var nb = matrix[iArea][iArea2];
            if ((nb != 2) && (nb != 0)) {
               alert("invalid matrix");
            }
         }
      }
   }

   function checkNeighbors() {
      for (var iArea = 0; iArea < nbPieces; iArea++) {
         var color1 = answer[iArea];
         for (var iNeighbor = 0; iNeighbor < neighbors[iArea].length; iNeighbor++) {
            var neighbor = neighbors[iArea][iNeighbor];
            var color2 = answer[neighbor];
            if ((color1 != 0) && (color2 != 0) && (color1 == color2))
               return false;
         }
      }
      return true;
   }

   function loadCircle() {
      paper = subTask.raphaelFactory.create("circle", "circle", 410, 410);

      var scale = "s0.8,0.8,0,0";
      var textTrans = "t10,-7";
      var textTrans2 = "t-121.85521,-238.18085";
      var params = [];
      for (var iParam = 0; iParam < nbPieces; iParam++) {
         params[iParam] = {color: colors[answer[iParam]], letter: colorsLetters[answer[iParam]]};
      }
      var layer1 = paper.set();
      var circle = paper.circle(254, 250, 240);
      circle.attr({fill: "black"});
      circle.transform(scale);

      for(var iPiece = 0; iPiece < nbPieces; iPiece++){
         paths[iPiece] = paper.path(paths[iPiece]).attr("fill", params[iPiece].color).attr(pathAttr)
         if(iPiece === 0 || (level === "easy" && iPiece === 10) || (level === "medium" && iPiece === 8) || (level === "medium" && iPiece === 19)){
            paths[iPiece].transform(scale + textTrans2);
         }else{
            paths[iPiece].transform(scale);
         }
         texts[iPiece] = paper.text(textPos[iPiece][0],textPos[iPiece][1],params[iPiece].letter).attr(textAttr);
         texts[iPiece].transform(textTrans + scale + textTrans2);
         pieces[iPiece] = paper.set(paths[iPiece],texts[iPiece]);
         setClickArea(iPiece);
      }

      // debug edges
      /*
      for (var iArea1 = 0; iArea1 < 19; iArea1++) {
         for (var iArea2 = 0; iArea2 < 19; iArea2++) {
            paper.path("M " + texts[iArea1].x +","+ texts[iArea1].y + "L " + texts[iArea2].x +","+ texts[iArea2].y)
               .attr({stroke:'black', "stroke-with":2});   
         }
      }
      */
   }

   function setClickArea(iArea) {
      pieces[iArea].mousedown(function() { clickArea(iArea) });
   }

   function clickArea(iArea, fakeClick) {
      var col = currentColor;
      if (answer[iArea] == col) 
        col = 0;
      answer[iArea] = col;
      paths[iArea].animate({fill: colors[col]}, 200);      
      texts[iArea].attr("text", colorsLetters[col]);   
      $("#success").html("");
      updateNbPiecesToColor();
      if (checkNeighbors(answer)) {
         $("#error").html("");
         if (nbPiecesToColor == 0) {
            if (!fakeClick) {
               $("#success").html(taskStrings.success);
               platform.validate("done", function(){});
            }
         }
         else if (nbPiecesToColor == 1 && answer[0] == 0) {
           $("#error").html(taskStrings.dontForget);
         }
      } else {
         $("#error").html(taskStrings.warning);
      }
   }

   function updateNbPiecesToColor() {
      nbPiecesToColor = 0;
      for(var iPiece = 0; iPiece < nbPieces; iPiece++){
         if(answer[iPiece] === 0)
            nbPiecesToColor++;
      }
      $("#nbPiecesToColor").html(nbPiecesToColor);
   }
}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();

