const Employee = require("../lib/Intern");

test("Can instantiate Employee instance", () => {
  const result = new Employee();
  expect(typeof(result)).toEqual("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Morgan"; 
  const result = new Employee(name);
  expect(result.name).toEqual(name);
});

test("Can set id via constructor argument", () => {
  const testVal = 20;
  const result = new Employee("Foo", testVal);
  expect(result.id).toEqual(testVal);
});

test("Can set email via constructor argument", () => {
  const testVal = "morgan@email.com";
  const result = new Employee("Foo", 1, testVal);
  expect(result.email).toEqual(testVal);
});
test("Can set school via constructor argument", () => {
    const testVal = "Glasgow University";
    const result = new Employee("Foo", 1, "morgan@email.com", testVal);
    expect(result.school).toEqual(testVal);
  });



test("Can get name via getName()", () => {
  const testVal = "Morgan";
  const result = new Employee(testVal);
  expect(result.getName()).toEqual(testVal);
});

test("Can get id via getId()", () => {
  const testVal = 100;
  const result = new Employee("Foo", testVal);
  expect(result.getId()).toEqual(testVal);
});

test("Can get email via getEmail()", () => {
  const testVal = "morgan@email.com";
  const result = new Employee("Foo", 1, testVal);
  expect(result.getEmail()).toEqual(testVal);
});

test("Can get class via getRole()", () => {
  const testVal = "Intern";
  const result = new Employee("Morgan", 1, "morgan@email.com");
  expect(result.getRole()).toEqual(testVal);
});

test("Can get school via getSchool()", () => {
    const testVal = "Glasgow University";
    const result = new Employee("Morgan", 1, "morgan@email.com", testVal);
    expect(result.getSchool()).toEqual(testVal);
  });