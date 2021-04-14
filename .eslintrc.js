module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [ '@nuxtjs/eslint-config-typescript', 'prettier/vue', 'plugin:nuxt/recommended', '@cenk1cenk2/eslint-config', '@cenk1cenk2/eslint-config/typescript' ],
  plugins: [ 'prettier' ],
  rules: {}
}
