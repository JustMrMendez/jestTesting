// test the function sum from src\app.js

import sum from "../src/app.js";

test("adds 1 + 2 to equal 3", () => {
    expect(sum(2, 2)).toBe(4);
});
