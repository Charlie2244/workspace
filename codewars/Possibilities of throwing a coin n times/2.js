const coin = (n) => --n ? coin(n).reduce((a, e) => (a.push(...["H", "T"].map((v) => e + v)), a), []) : ["H", "T"];

