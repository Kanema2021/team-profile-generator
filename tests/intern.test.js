const Employee = require("../lib/Intern");

test("Instantiation of new employee", () => {
  const result = new Employee();
  expect(typeof(result)).toEqual("object");
});

test("Can set new intern name via constructor arguments", () => {
  const name = "Morgan"; 
  const result = new Employee(name);
  expect(result.name).toEqual(name);
});

test("Can set new intern id via constructor argument", () => {
  const testVal = 20;
  const result = new Employee("Foo", testVal);
  expect(result.id).toEqual(testVal);
});

test("Can set new intern email via constructor argument", () => {
  const testVal = "morgan@email.com";
  const result = new Employee("Foo", 1, testVal);
  expect(result.email).toEqual(testVal);
});
test("Can set new intern school via constructor argument", () => {
    const testVal = "Glasgow University";
    const result = new Employee("Foo", 1, "morgan@email.com", testVal);
    expect(result.school).toEqual(testVal);
  });



test("Can get new intern name via getName()", () => {
  const testVal = "Morgan";
  const result = new Employee(testVal);
  expect(result.getName()).toEqual(testVal);
});

test("Can get new intern id via getId()", () => {
  const testVal = 100;
  const result = new Employee("Foo", testVal);
  expect(result.getId()).toEqual(testVal);
});

test("Can get new intern email via getEmail()", () => {
  const testVal = "morgan@email.com";
  const result = new Employee("Foo", 1, testVal);
  expect(result.getEmail()).toEqual(testVal);
});

test("Can get new intern class via getRole()", () => {
  const testVal = "Intern";
  const result = new Employee("Morgan", 1, "morgan@email.com");
  expect(result.getRole()).toEqual(testVal);
});

test("Can get new intern school via getSchool()", () => {
    const testVal = "Glasgow University";
    const result = new Employee("Morgan", 1, "morgan@email.com", testVal);
    expect(result.getSchool()).toEqual(testVal);
  });