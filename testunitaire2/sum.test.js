const z = require("./sum");
const Hipo = require("./sum");
const hipppp = new Hipo(10,100,'zaa');
const hippp = {
  tusksSize: 10,
  weigth: 100,
  name: 'zaa'
}
const hipo = [{
  tusksSize: 10,
  weigth: 100,
  name: 'z'
},{
  tusksSize: 20,
  weigth: 200,
  name: 'zzszsz'
}
]
test('should ', () => { 
  expect(z.weigth(100)).toBe(100);
 })
test('should ', () => {
  expect(()=>z.eat('')).toThrow('Invalid eat');
})
test('should ', () => {
  expect(()=>z.swim('')).toThrow('Invalid swim');
})
test('should ', () => {
  expect(()=>z.weigth('')).toThrow('Invalid weigth');
})
const eeat = z.eat(hippp,10);
console.log("zzzz",eeat);
const sswim = z.swim(100,10);
console.log("errr",sswim);
const zr=z.findHipoWithLargestTusksSize(hipo);
console.log(zr);
const zrr=z.string(hipppp);
console.log('zzzzzzzzz',zrr);
/* ne fonctionne pas */
// const zrrr=z.cycledevie(hipppp);
// console.log('zzzzzzzzz',zrrr);



