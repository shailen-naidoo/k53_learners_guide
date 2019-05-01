/* eslint-disable no-console */
const fs = require('fs-extra')

const ROOT_DIR = 'images'
const ROAD_SIGNS_DIR = `${ROOT_DIR}/road-signs`

const getDirectories = path => fs.readdir(`${__dirname}/static/${path}`, 'utf-8')

module.exports = {
  async before() {
    const roadSignsFolders = await getDirectories(`${ROAD_SIGNS_DIR}/regulatory-signs/control-signs`)

    console.log(roadSignsFolders)
  }
}
