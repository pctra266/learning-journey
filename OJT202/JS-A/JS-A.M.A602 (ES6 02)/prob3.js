const people = [
    { id: 1, name: 'Dung', age: 20 },
    { id: 2, name: 'Diu', age: 20 },
    { id: 3, name: 'Ky', age: 20 },
    { id: 1, name: 'Hai', age: 22 }
  ];
  
  const seen = new Set();
  const uniqueById = people.filter(person => {
    if (seen.has(person.id)) {
        return false;
      } else {
        seen.add(person.id);
        return true;
      }
  });
  
  console.log(uniqueById);
  