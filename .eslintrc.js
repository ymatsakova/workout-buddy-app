module.exports = {
  'root': true,
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'env': {
    'browser': true,
    'es6': true,
    'jest': true,
    'node': true
  },
  'settings': {
    'react': {
      'version': 'latest'
    }
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'impliedStrict': true,
      'experimentalObjectRestSpread': true
    }
  },
  'rules': {
    'array-bracket-spacing': [ 'error', 'always', { 'singleValue': true, 'objectsInArrays': false, 'arraysInArrays': false }],
    'arrow-spacing': [ 'error', { 'before': true, 'after': true }],
    'indent': [ 'error', 2, { 'SwitchCase': 1, 'ignoredNodes': [ 'TemplateLiteral' ]}],
    'jsx-quotes':[ 'error', 'prefer-single' ],
    'keyword-spacing': [ 'error', { 'before': true, 'after': true }],
    'no-class-assign': 'off',
    'no-console': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'error',
    'object-curly-spacing': [ 'error', 'always', { 'arraysInObjects': false, 'objectsInObjects': false }],
    'quotes': [ 'error', 'single' ],
    'react/destructuring-assignment': 'error',
    'react/jsx-closing-bracket-location': [ 'error', 'tag-aligned' ],
    'react/jsx-curly-spacing': [ 'error', { 'when': 'never', 'attributes': false, 'children': false }],
    'react/jsx-indent': [ 'error', 2 ],
    'react/jsx-indent-props': [ 'error', 2 ],
    'react/jsx-key': 'error',
    'react/jsx-tag-spacing': [ 'error', { 'beforeSelfClosing': 'always' }],
    'react/display-name': 'off',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-multi-comp': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-state': 'error',
    'react/self-closing-comp': 'error',
    'semi': [ 'error', 'never' ]
  },
  'plugins': [
    'babel',
    'jest',
    'jsx-a11y',
    'react',
    'react-hooks'
  ]
}
