/* eslint-disable no-console */
const fs = require('fs-extra')

const ROOT_DIR = 'images'
const ROAD_SIGNS_DIR = `${ROOT_DIR}/road-signs`

const getDirectories = path => fs.readdir(`${__dirname}/static/${path}`, 'utf-8')

const createObject = files => files.map(file => ({
  image: `/images/road-signs/regulatory-signs/command-signs/${file}`,
  type: 'Command sign',
}))

const main = async () => {
  const saveJSONToFile = data => fs.writeFile('./data/pages/courses/road-signs/topic/command-signs.json', JSON.stringify(data, null, 2))
  const roadSignsFolders = await getDirectories(`${ROAD_SIGNS_DIR}/regulatory-signs/command-signs`)
  const JSONData = createObject(roadSignsFolders)

  await saveJSONToFile(JSONData)
}

main()
