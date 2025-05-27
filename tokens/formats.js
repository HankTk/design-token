const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'css/custom-properties',
  formatter: function(dictionary, config) {
    return `/* ${config.name || 'Generated Color Tokens'} */
:root {
${dictionary.allProperties
  .map(token => {
    const name = token.name.replace(/\./g, '-');
    return `  --color-${name}: ${token.value};`;
  })
  .join('\n')}
}`;
  }
}); 