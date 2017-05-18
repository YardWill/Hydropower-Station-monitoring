const a = new Promise((resolve, reject) => {
    if (true) {
        resolve('1');
    } else {
        reject('2');
    }
});

a.then((r) => {
    console.log(r)
})

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

[1,2,3,4].remove(2);