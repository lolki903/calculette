//
class Hipo {
    constructor(name, weigth, tusksSize) {
      this.name = name;
      this.weigth = weigth;
      this.tusksSize = tusksSize;
    }
  
// const u = new User('Doe', 25, 'John', 'rt@gmail.com');
static name(name) {
    if (name === '' || name === undefined|| name === null) {
        throw new Error('Invalid name');
    }
    return name;
}

static weigth(weigth) {
    if (weigth === "") {
        throw new Error('Invalid weigth');
    }
    return weigth;

}

static tusksSize(tusksSize) {
    if (tusksSize === '' || tusksSize === undefined|| tusksSize === null) {
        throw new Error('Invalid tusksSize');
    }
    return tusksSize;

}
static swim(weigth,swim) {
    if (swim === '' || swim === undefined|| swim === null) {
        throw new Error('Invalid swim');
    }
    return weigth - swim;
}
static eat(hipo,eat) {
    if (eat === '' || eat === undefined|| eat === null) {
        throw new Error('Invalid eat');
    }
    return hipo.weigth + eat;
}
static findHipoWithLargestTusksSize(hipos) {
    if (!hipos || !hipos.length) {
      throw new Error('Invalid hipos array');
    }
  
    let largestTusksSize = 0;
    let hipoWithLargestTusksSize = null;
  
    for (const hipo of hipos) {
      if (hipo.tusksSize > largestTusksSize) {
        largestTusksSize = hipo.tusksSize;
        hipoWithLargestTusksSize = hipo;
      }
    }
  
    return hipoWithLargestTusksSize;
  }
static string(hipo) {
    return `Hippo ${hipo.name} pese ${hipo.weigth} et a des defences ${hipo.tusksSize}`;
}
static cycledevie(hipo) {
    for (let i = 0; i <= 3; i++) {
      console.log('Journal entry #', i);
      for(let z = 0; z <= 15; z++) {
        Hipo.eat(hipo.weight, 1000);
        Hipo.eat(hipo.weight, 100);
        Hipo.swim(hipo.weight, 10);
        Hipo.swim(hipo.weight, 10);
        Hipo.swim(hipo.weight, 100);
      }
      if (i === 3) {
        return `Hippo ${hipo.name} weighs ${hipo.weight} and has tusks ${hipo.tusksSize} in size`;
      }
    }
  }
}
module.exports = Hipo;
