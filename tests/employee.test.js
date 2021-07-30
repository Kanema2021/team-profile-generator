const employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const result = new employee();
  expect(typeof(result)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Jessie";
  const result = new employee(name);
  expect(result.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testVal = 20;
  const result = new employee("Foo", testVal);
  expect(result.id).toBe(testVal);
});

test("Can set email via constructor argument", () => {
  const testVal = "test@email.com";
  const result = new employee("Foo", 1, testVal);
  expect(result.email).toBe(testVal);
});

test("Can get name via getName()", () => {
  const testVal = "Jessie";
  const result = new employee(testVal);
  expect(result.getName()).toBe(testVal);
});

test("Can get id via getId()", () => {
  const testVal = 100;
  const result = new employee("Foo", testVal);
  expect(result.getId()).toBe(testVal);
});

test("Can get email via getEmail()", () => {
  const testVal = "jessie@email.com";
  const result = new employee("Foo", 1, testVal);
  expect(result.getEmail()).toBe(testVal);
});

test("getRole() should return \"Employee\"", () => {
  const testVal = "Employee";
  const result = new Employee("Jessie", 1, "jessie@email.com");
  expect(result.getRole()).toBe(testVal);
});