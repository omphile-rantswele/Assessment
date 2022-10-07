var a = "Jack";
var b = "Jill";

import { compareTwoStrings } from "string-similarity";
var similarityCoef = compareTwoStrings(a, b);

if (similarityCoef > 0.8) { console.log(true); }