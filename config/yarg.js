const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de las tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Este es número hasta donde quieres la tabla",
  })
  .check((argv, option) => {
    if (isNaN(argv.base)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
