const Employee = require("../lib/Engineer");

test("Can instantiate Employee instance", () => {
  const result = new Employee();
  expect(typeof(result)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Daniel"; 
  const result = new Employee(name);
  expect(result.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testVal = 20;
  const result = new Employee("Foo", testVal);
  expect(result.id).toBe(testVal);
});

test("Can set email via constructor argument", () => {
  const testVal = "daniel@email.com";
  const result = new Employee("Foo", 1, testVal);
  expect(result.email).toEqual(testVal);
});

test("Can get name via getName()", () => {
  const testVal = "Daniel";
  const result = new Employee(testVal);
  expect(result.getName()).toEqual(testVal);
});

test("Can get id via getId()", () => {
  const testVal = 100;
  const result = new Employee("Foo", testVal);
  expect(result.getId()).toEqual(testVal);
});

test("Can get email via getEmail()", () => {
  const testVal = "daniel@email.com";
  const result = new Employee("Foo", 1, testVal);
  expect(result.getEmail()).toEqual(testVal);
});

test("Can get github via getGithub()", () => {
    const testVal = "daniel@email.com";
    const result = new Employee("Foo", 1, testVal);
    expect(result.getEmail()).toEqual(testVal);
  });

test("Can get class via getRole()", () => {
  const testVal = "Engineer";
  const result = new Employee("Foo", 1, "daniel@email.com");
  expect(result.getRole()).toEqual(testVal);
});