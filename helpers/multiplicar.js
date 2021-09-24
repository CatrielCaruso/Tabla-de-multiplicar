const fs = require("fs");

const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida,
      consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`.random;
      consola += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("=============================".green);
      console.log("   Tabla del: ".green, colors.blue(base));
      console.log("=============================".green);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivo };
