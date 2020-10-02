const dtsgen = require('react-to-typescript-definitions')
const { writeFileSync, existsSync, mkdirSync } = require('fs')
const path = require('path')
const glob = require('glob')

function getModuleName(url) {
  return path.basename(url).replace('.js', '')
}

// Used to enhance the props interface inferred by adding generic HTML props
const EXTEND_PROPS_STRING = `Props extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;`

const files = glob.sync('src/components/**/*.js', { ignore: '**/*.story.js' })

const definitions = files.map(urlPath => {
  const definition = dtsgen.generateFromFile(
    urlPath.replace('.js', ''),
    urlPath
  )

  return definition.replace('Props {', EXTEND_PROPS_STRING)
})

const mainModule = [
  'declare module "design-react-kit"{',
  ...files.map(urlPath => {
    return `    export {default as ${getModuleName(
      urlPath
    )}} from "${urlPath.replace('.js', '')}"`
  }),
  '}'
].join('\n')

if (!existsSync('./dist')) {
  mkdirSync('./dist')
}

writeFileSync(
  './dist/design-react-kit.d.ts',
  `${mainModule}\n${definitions.join('')}`
)
