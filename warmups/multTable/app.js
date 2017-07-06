let multTable = () => {
  let table = [];
  for (let i = 0; i < 10; i++) {
    table.push([]);
    for (let x = 0; x < 10; x++) {
      table[i].push((x + 1 ) * ( i + 1));
    }
  }
  return table;
};

module.exports = multTable;

multTable();
