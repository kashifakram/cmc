import firstLogger from "./modules/firstUse";
import secondLogger from "./modules/secondUse";
import final from "./modules/facade";

class StandardUser {
  age?: number;
  address?: Address;

  constructor(age: number | undefined, address: Address | undefined) {
    this.age = age;
    this.address = address;
  }
}

class Address {
  city: string;
  zip: number;
  constructor(city: string, zip: number) {
    this.city = city;
    this.zip = zip;
  }
}

class User {
  id: string;
  name: string;
  age?: number;
  phone: string;
  address?: Address;

  constructor(
    name: string,
    {
      age,
      phone = "1111111111",
      address,
    }: { age?: number; phone?: string; address?: Address } = {}
  ) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
  hasAccess() {
    return this.name == "Kashif";
  }
}

class NullUser {
  id: number;
  name: string;
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }
  hasAccess: () => false;
}

const users = [new User("Kashif")];

const getUser = (name: string) => users.find((user) => name === user.name);

const printUser = (name: string) => {
  const user = getUser(name);

  return user ? JSON.stringify(user) : JSON.stringify(new NullUser());
};

console.log(
  `%cBuilder: %c${printUser("Kashif")}`,
  "font-size: 1.5em; color: green;",
  "background: blue; margin: 5px;"
);

const test = { id: 9, name: "abcd" };

firstLogger();
firstLogger();
secondLogger();
secondLogger();
secondLogger();
secondLogger();
secondLogger();
secondLogger();

async function testAsync() {
  await final.then((r) => {
    if ("name" in test)
      console.log("%cname is in property", "font-size: 1.7em");
  });
}

testAsync();
