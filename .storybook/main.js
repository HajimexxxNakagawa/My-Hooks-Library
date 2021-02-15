/* eslint-disable
    @typescript-eslint/no-var-requires
*/

const { resolve } = require('path')

module.exports = {
  webpackFinal: async (config) => {
    // alias settings
    config.resolve.alias = {
      ...config.resolve.alias,
      components: resolve(__dirname, '../src/components'),
      styles: resolve(__dirname, '../src/styles'),
    }
    return config
  },
}
