/* eslint-disable no-console */
const fs = require('fs-extra')

const ROOT_DIR = 'images'
const ROAD_SIGNS_DIR = `${ROOT_DIR}/road-signs`

const getDirectories = path => fs.readdir(`${__dirname}/static/${path}`, 'utf-8')

const createObject = files => files.map(file => ({
  name: '',
  image: `/images/road-signs/regulatory-signs/prohibition-signs/${file}`,
  type: 'Prohibition sign',
  description: '',
}))

const main = async () => {
  const saveJSONToFile = data => fs.writeFile('./data/pages/courses/road-signs/topic/prohibition.json', JSON.stringify(data, null, 2))
  const roadSignsFolders = await getDirectories(`${ROAD_SIGNS_DIR}/regulatory-signs/prohibition-signs`)
  const JSONData = createObject(roadSignsFolders)

  await saveJSONToFile(JSONData)
}

main()
