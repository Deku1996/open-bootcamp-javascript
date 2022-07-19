import chalk from "chalk";
import { multiplica, suma } from "./controllers.js"; 

const sumar = suma(5, 10);

const multiplicar = multiplica(5, 7)

console.log(chalk.green(sumar))