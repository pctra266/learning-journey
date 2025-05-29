function ajax(url, cb) {
  // fake ajax response:
  cb({
    foo: 2,
    baz: [6, 8, 10],
    bam: {
      qux: 12,
    },
  });
}

function check(data) {
  console.log(
    56 ===
      data.foo + // 2
        data.bar + //4
        data.baz[0] + //6
        data.baz[1] + //8
        data.baz[2] + //10
        data.bam.qux + //12
        data.bam.qam // 14
  );
}

var defaults = {
  foo: 0,
  bar: 4,
  bam: {
    qux: 0,
    qam: 14,
  },
};

// YOUR CODE HERE
function response(data) {
  let checkObject = {
    ...defaults,
    ...data,
    bam: {
      ...defaults.bam,
      ...data.bam,
    },
  };
  console.log(checkObject);
  check(checkObject); // true
}

// DO NOT MODIFY
ajax("http://fun.tld", response);
