import getNewStake from "./getNewStake.js";

// ep = expected profit
// no = new odd
// ul = upper limit

const getNewStakeMultiples = (ep, no, ul) => {
  let ps = 0;

  for (let i = 1; i <= ul; i++) {
    const { ns, total } = getNewStake(ep, no, ps);
    ps = total;

    console.log(`${i} -> ${ns} -> Total -> (${total})`);
  }
};

const ep = 4000;
const no = 1.9;
const ul = 7;

getNewStakeMultiples(ep, no, ul);

// 500
// 1 -> 556 -> Total -> (556)
// 2 -> 1174 -> Total -> (1730)
// 3 -> 2478 -> Total -> (4208)
// 4 -> 5232 -> Total -> (9440)
// 5 -> 11045 -> Total -> (20485)
// 6 -> 23317 -> Total -> (43802)
// 7 -> 49225 -> Total -> (93027)

// 1000
// 1 -> 1112 -> Total -> (1112)
// 2 -> 2347 -> Total -> (3459)
// 3 -> 4955 -> Total -> (8414)
// 4 -> 10461 -> Total -> (18875)
// 5 -> 22084 -> Total -> (40959)
// 6 -> 46622 -> Total -> (87581)
// 7 -> 98424 -> Total -> (186005)

// 2000
// 1 -> 2223 -> Total -> (2223)
// 2 -> 4693 -> Total -> (6916)
// 3 -> 9907 -> Total -> (16823)
// 4 -> 20915 -> Total -> (37738)
// 5 -> 44154 -> Total -> (81892)
// 6 -> 93214 -> Total -> (175106)
// 7 -> 196785 -> Total -> (371891)

// 4000
// 1 -> 4445 -> Total -> (4445)
// 2 -> 9384 -> Total -> (13829)
// 3 -> 19811 -> Total -> (33640)
// 4 -> 41823 -> Total -> (75463)
// 5 -> 88293 -> Total -> (163756)
// 6 -> 186396 -> Total -> (350152)
// 7 -> 393503 -> Total -> (743655)

// 8000
// 1 -> 8889 -> Total -> (8889)
// 2 -> 18766 -> Total -> (27655)
// 3 -> 39617 -> Total -> (67272)
// 4 -> 83636 -> Total -> (150908)
// 5 -> 176565 -> Total -> (327473)
// 6 -> 372748 -> Total -> (700221)
// 7 -> 786913 -> Total -> (1487134)
