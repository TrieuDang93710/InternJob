/** Object destructuring */
interface Student {
  id: number;
  namef: string;
  gender: string;
  age: number;
}

const bob = {
  id: 1,
  namef: 'A',
  gender: 'male',
  age: 20
}

// Old way
// const id = bob.id;
// const namef = bob.namef;

// New way
// const { id, namef } = bob;

// Use rest destructuring

// Old way
const id2 = bob.id;
const rest = {
  name: bob.namef,
  age: bob.age,
  gebder: bob.gender
};

// New way
const { id, ...rest1 } = bob;