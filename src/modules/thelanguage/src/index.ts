import parse from "./parser";
import { readFileSync } from "fs";
import { printParserOutput } from "./util/parser";
import transpile from "./transpiler";

let src = readFileSync("فحص.اللغة", "utf8");

const parser = parse(src);

printParserOutput(parser, src);