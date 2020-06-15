const { dbl } = require("./dbl");
test("dbl returns argmnt times 2: ", () => {
  return dbl(2).then((results) => {
    expect(results).toBe(4);
  });
});

test("dbl returns rejeced if the NaN passed", () => {
  return dbl("string.....").catch((err) => {
    expect(err).toBe("bad number! cannot double it");
  });
});
