const Employee = require("../lib/Manager");

test("Instantiation of new employee", () => {
  const result = new Employee();
  expect(typeof(result)).toBe("object");
});

test("Can set new manager name via constructor arguments", () => {
  const name = "Dave"; 
  const result = new Employee(name);
  expect(result.name).toBe(name);
});

test("Can set new manager id via constructor argument", () => {
  const testVal = 20;
  const result = new Employee("Foo", testVal);
  expect(result.id).toBe(testVal);
});

test("Can set new manager email via constructor argument", () => {
  const testVal = "dave@email.com";
  const result = new Employee("Foo", 1, testVal);
  expect(result.email).toEqual(testVal);
});

test("Can set new manager officeNumber via constructor argument", () => {
    const testVal = 100;
    const result = new Employee("Foo", 1, testVal);
    expect(result.email).toEqual(testVal);
  });

test("Can get new manager name via getName()", () => {
  const testVal = "Dave";
  const result = new Employee(testVal);
  expect(result.getName()).toEqual(testVal);
});

test("Can get new manager id via getId()", () => {
  const testVal = 100;
  const result = new Employee("Foo", testVal);
  expect(result.getId()).toEqual(testVal);
});

test("Can get new manager email via getEmail()", () => {
  const testVal = "dave@email.com";
  const result = new Employee("Foo", 1, testVal);
  expect(result.getEmail()).toEqual(testVal);
});

test("Can get new manager class via getRole()", () => {
  const testVal = "Manager";
  const result = new Employee("Dave", 1, "dave@email.com");
  expect(result.getRole()).toEqual(testVal);
});

  test("Can get new manager class via getOfficeNumber()", () => {
    const testVal = "officeNumber";
    const result = new Employee("Dave", 1, "dave@email.com", testVal);
    expect(result.getOfficeNumber()).toEqual(testVal);
  });