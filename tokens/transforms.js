const StyleDictionary = require('style-dictionary');
const config = require('./config.json');

// Register formats
StyleDictionary.registerFormat({
  name: 'scss/variables',
  formatter: function(dictionary, config) {
    return `:root {\n${dictionary.allProperties
      .map(prop => `  --${prop.name}: ${prop.value};`)
      .join('\n')}\n}`;
  }
});

StyleDictionary.registerFormat({
  name: 'typescript/variables',
  formatter: function(dictionary, config) {
    return `export const tokens = ${JSON.stringify(dictionary.allProperties.reduce((acc, prop) => {
      acc[prop.name] = prop.value;
      return acc;
    }, {}), null, 2)};`;
  }
});

// Register filters
StyleDictionary.registerFilter({
  name: 'isBaseColor',
  matcher: function(prop) {
    return prop.attributes.category === 'color' && prop.attributes.type === 'base';
  }
});

StyleDictionary.registerFilter({
  name: 'isSemanticColor',
  matcher: function(prop) {
    return prop.attributes.category === 'color' && prop.attributes.type === 'semantic';
  }
});

StyleDictionary.registerFilter({
  name: 'isMdBaseColor',
  matcher: function(prop) {
    return prop.attributes.category === 'color' && prop.attributes.type === 'md-base';
  }
});

StyleDictionary.registerFilter({
  name: 'isMdSurfaceColor',
  matcher: function(prop) {
    return prop.attributes.category === 'color' && prop.attributes.type === 'md-surface';
  }
});

StyleDictionary.registerFilter({
  name: 'isTypography',
  matcher: function(prop) {
    return prop.attributes.category === 'typography';
  }
});

StyleDictionary.registerFilter({
  name: 'isSpacing',
  matcher: function(prop) {
    return prop.attributes.category === 'spacing';
  }
});

StyleDictionary.registerFilter({
  name: 'isSizing',
  matcher: function(prop) {
    return prop.attributes.category === 'sizing';
  }
});

StyleDictionary.registerFilter({
  name: 'isRadius',
  matcher: function(prop) {
    return prop.attributes.category === 'radius';
  }
});

StyleDictionary.registerFilter({
  name: 'isShadow',
  matcher: function(prop) {
    return prop.attributes.category === 'shadow';
  }
});

StyleDictionary.registerFilter({
  name: 'isTransition',
  matcher: function(prop) {
    return prop.attributes.category === 'transition';
  }
});

// Register custom transform
StyleDictionary.registerTransform({
  name: 'color/reference',
  type: 'value',
  matcher: function(prop) {
    return prop.attributes.category === 'color';
  },
  transformer: function(prop) {
    if (prop.original.value && prop.original.value.startsWith('{')) {
      return `var(--${prop.original.value.replace(/[{}]/g, '').replace(/\./g, '-')})`;
    }
    return prop.value;
  }
});

// Register transform groups
StyleDictionary.registerTransformGroup({
  name: 'scss',
  transforms: ['attribute/cti', 'name/cti/kebab', 'color/reference']
});

StyleDictionary.registerTransformGroup({
  name: 'typescript',
  transforms: ['attribute/cti', 'name/cti/camel', 'color/reference']
});

// Create Style Dictionary instance
const StyleDictionaryExtended = StyleDictionary.extend({
  source: config.source,
  platforms: config.platforms
});

// Build all platforms
StyleDictionaryExtended.buildAllPlatforms();

module.exports = StyleDictionaryExtended; 