#!node
import { log } from "node:console";
import fs from "node:fs/promises";

const fileName = process.argv[2];
const singleWord = process.argv[3];
const a = await fs.readFile(fileName, "utf8");
const wordsArr = a.split(/[\W]/).filter((w) => w);
const wordCount = {};
let singleWordCount = 0;
wordsArr.forEach((word) => {
  if (word in wordCount) {
    wordCount[word] = wordCount[word] + 1;
  } else if (word.toLowerCase() === (singleWord||'').toLowerCase()) {
    singleWordCount++;
  } 
  else {
    wordCount[word] = 1;
  }
});
if (singleWordCount>0) {
  log(singleWordCount);
}
if(!singleWord){
   log(wordCount)
}
