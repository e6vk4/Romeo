// ep = expected profit
// ps = previous stake(s)
// cps = computed previous stake(s)
// ns = new stake
// no = new odd

const getNewStake = (ep, no, ps) => {
  let ns = 1;
  const cps = !Array.isArray(ps) ? ps : ps.reduce((x, y) => x + y, 0);

  for (let i = cps; i <= i + 1; i++) {
    const x = ep + (cps + ns);
    const y = no * ns;
    if (y > x) break;

    ns++;
  }

  // console.log({ cps, ns, total: cps + ns });

  return { cps, ns, total: cps + ns };
};

const ep = 500;
const no = 1.9;
const ps = 0;

getNewStake(ep, no, ps);

// 500
// 1 -> 556 -> Total -> (556)
// 2 -> 1174 -> Total -> (1730)
// 3 -> 2478 -> Total -> (4208)
// 4 -> 5232 -> Total -> (9440)
// 5 -> 11045 -> Total -> (20485)
// 6 -> 23317 -> Total -> (43802)
// 7 -> 49225 -> Total -> (93027)

export default getNewStake;
