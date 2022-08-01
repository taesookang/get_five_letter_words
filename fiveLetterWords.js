const wordnet = require("wordnet");
// data source: wordnet by Princeton Univercity

const init = async () => {
  await wordnet.init();
};

init();

const getwords = () => {
  let list = wordnet.list();
  const words_with_5_length = list.filter((d) => d.length === 5);

  const results = words_with_5_length.filter(
    (d) => d.match(/^[a-z]{5}$/) !== null
  );

  return results;
};

let list;
setTimeout(() => {
  list = getwords();
  require("fs").writeFile(
    "./data.json",

    JSON.stringify(list.sort()),

    function (err) {
      if (err) {
        console.error("Something went wrong.");
      }
    }
  );
}, 1000);
