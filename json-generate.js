/* eslint-disable no-console */
const args = require('args-parser')(process.argv);
const fs = require('fs-extra');

const ROOT_DIR = 'images';
const ROAD_SIGNS_DIR = `${ROOT_DIR}/road-signs`;

const getDirectories = path => fs.readdir(`${__dirname}/static/${path}`, 'utf-8');

const createObject = files => files.map(file => ({
  name: '',
  image: `/${ROAD_SIGNS_DIR}/${args.args}/${file}`,
  type: 'Traverse Markings',
  description: '',
}));


console.log(args.args);

const main = async () => {
  const saveJSONToFile = data => fs.writeFile(`./static/data/pages/courses/road-signs/topic/${args.args}.json`, JSON.stringify(data, null, 2));
  const roadSignsFolders = await getDirectories(`${ROAD_SIGNS_DIR}/${args.args}`);
  const JSONData = createObject(roadSignsFolders);

  await saveJSONToFile(JSONData);
};

if (Object.keys(args).length) {
  main();
} else {
  console.log('\nPlease pass in the args\n');
}
