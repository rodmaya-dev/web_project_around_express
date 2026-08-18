import { readFile } from "node:fs/promises";
import path from "node:path";

// Ruta absoluta a la carpeta /data del proyecto, construida de forma segura
// para que funcione igual sin importar el sistema operativo o desde dónde
// se ejecute el proceso.
const DATA_DIR = path.join(import.meta.dirname, "..", "..", "data");

// Lee un archivo JSON de la carpeta /data y lo convierte en un objeto/array
export const readJsonFile = async <T>(fileName: string): Promise<T> => {
  const filePath = path.join(DATA_DIR, fileName);
  const fileContent = await readFile(filePath, "utf8");
  return JSON.parse(fileContent) as T;
};