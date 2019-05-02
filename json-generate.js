/* eslint-disable no-console */
const fs = require('fs-extra')

const ROOT_DIR = 'images'
const ROAD_SIGNS_DIR = `${ROOT_DIR}/road-signs`

const getDirectories = path => fs.readdir(`${__dirname}/static/${path}`, 'utf-8')

const createObject = files => files.map(file => ({
  image: `https://k53-learners-guide.netlify.com/images/road-signs/regulatory-signs/control-signs/${file}`,
  type: 'Control sign'
}))

const saveJSONToFile = data => fs.writeFile('./data/pages/courses/road-signs/topic/regulatory-signs.json', JSON.stringify(data, null, 2))

module.exports = {
  async before() {
    const roadSignsFolders = await getDirectories(`${ROAD_SIGNS_DIR}/regulatory-signs/control-signs`)
    const JSONData = createObject(roadSignsFolders)

    await saveJSONToFile(JSONData)
  }
}
