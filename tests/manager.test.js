const Employee = require("../lib/Manager");

test("Can instantiate Employee instance", () => {
  const result = new Employee();
  expect(typeof(result)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Dave"; 
  const result = new Employee(name);
  expect(result.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testVal = 20;
  const result = new Employee("Foo", testVal);
  expect(result.id).toBe(testVal);
});

test("Can set email via constructor argument", () => {
  const testVal = "dave@email.com";
  const result = new Employee("Foo", 1, testVal);
  expect(result.email).toEqual(testVal);
});
test("Can set officeNumber via constructor argument", () => {
    const testVal = 100;
    const result = new Employee("Foo", 1, testVal);
    expect(result.email).toEqual(testVal);
  });

test("Can get name via getName()", () => {
  const testVal = "Dave";
  const result = new Employee(testVal);
  expect(result.getName()).toEqual(testVal);
});

test("Can get id via getId()", () => {
  const testVal = 100;
  const result = new Employee("Foo", testVal);
  expect(result.getId()).toEqual(testVal);
});

test("Can get email via getEmail()", () => {
  const testVal = "dave@email.com";
  const result = new Employee("Foo", 1, testVal);
  expect(result.getEmail()).toEqual(testVal);
});

test("Can get class via getRole()", () => {
  const testVal = "Manager";
  const result = new Employee("Dave", 1, "dave@email.com");
  expect(result.getRole()).toEqual(testVal);
});


  test("Can get class via getOfficeNumber()", () => {
    const testVal = "officeNumber";
    const result = new Employee("Dave", 1, "dave@email.com", testVal);
    expect(result.getOfficeNumber()).toEqual(testVal);
  });