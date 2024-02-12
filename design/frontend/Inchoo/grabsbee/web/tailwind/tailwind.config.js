const {
  spacing
} = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');

const hyvaModules = require('@hyva-themes/hyva-modules');

module.exports = hyvaModules.mergeTailwindConfig({
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  // Examples for excluding patterns from purge
  content: [
    // this theme's phtml and layout XML files
    '../../**/*.phtml',
    '../../*/layout/*.xml',
    '../../*/page_layout/override/base/*.xml',
    // parent theme in Vendor (if this is a child-theme)
    //'../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.phtml',
    //'../../../../../../../vendor/hyva-themes/magento2-default-theme/*/layout/*.xml',
    //'../../../../../../../vendor/hyva-themes/magento2-default-theme/*/page_layout/override/base/*.xml',
    // app/code phtml files (if need tailwind classes from app/code modules)
    '../../../../../../../app/code/**/*.phtml',
  ]
});
