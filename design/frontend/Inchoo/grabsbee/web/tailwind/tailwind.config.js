const {
  spacing
} = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');

const hyvaModules = require('@hyva-themes/hyva-modules');

module.exports = hyvaModules.mergeTailwindConfig({
  theme: {
    extend: {
        colors : {
            primary: {
                DEFAULT: "#12167A",
                light: "#12167a",
                dark: "#10146e",
            },
            secondary: {
                DEFAULT: "#EC1D2E",
                light: "#ee3443",
                dark: "#d41a29",
                90: "#D00505",
            },
            gray: {
                DEFAULT: "#7D7D7D",
                90: "#696969",
                60: "#828282",
                25: "#9C9C9C",
                10: "#CFCFCF",
                5: "#E8E8E8",
            },
            text: {
                dark: "#1A1A1A",
                color: "#4E4E4E",
                invert: "#FFFFFF",
                muted: "#CFCFCF",
            },
            link: {
                visited: "#B9121D",
                active: "#740D15",
            },
            white: {
                DEFAULT: "#fff",
            },
            success: {
                DEFAULT: "#32D08D",
            },
            error: {
                DEFAULT: "#F14F39",
            },
            warning: {
                DEFAULT: "#F1B239",
            },
        },

        borderWidth: {
            "1px": '1px',
        },

        screens: {
            'mobile': '360px',
            'tablet': '720px',
            'desktop': '1024px',
        },

        fontFamily: {
            'primary': ['Open Sans', 'sans-serif'],
            'heading': ['Anton', 'sans-serif'],
        },

        spacing: {
            'h6': '0.375rem',
            'h5': '0.75rem',
            'h4': '1.5rem',
            'h3': '1.875rem',
            'h2': '2.25rem',
            'h1': '3rem',
        },

        fontSize: {

            // desktop
            'h1-d': [
                '1.75rem',
                {
                    lineHeight: '3rem',
                }
            ],
            'h2-d': [
                '1.875rem',
                {
                    lineHeight: '3rem',
                }
            ],
            'h3-d': [
                '1.375rem',
                {
                    lineHeight: '1.875rem',
                }
            ],
            'h4-d': [
                '1.25rem',
                {
                    lineHeight: '1.5rem',
                }
            ],
            'h5-d': [
                '1.063rem',
                {
                    lineHeight: '1.5rem',
                }
            ],
            'h6-d': [
                '1rem',
                {
                    lineHeight: '1.5rem',
                }
            ],
            'p-d': [
                '1rem',
                {
                    lineHeight: '1.5rem',
                }
            ],

            // mobile
            'h1-m': [
                '1.5rem',
                {
                    lineHeight: '2.5rem',
                }
            ],
            'h2-m': [
                '1.25rem',
                {
                    lineHeight: '2.5rem',
                }
            ],
            'h3-m': [
                '1rem',
                {
                    lineHeight: '1.5rem',
                }
            ],
            'h4-m': [
                '0.938rem',
                {
                    lineHeight: '1.5rem',
                }
            ],
            'h5-m': [
                '0.875rem',
                {
                    lineHeight: '1.5rem',
                }
            ],
            'h6-m': [
                '0.813rem',
                {
                    lineHeight: '1.5rem',
                }
            ],
            'p-m': [
                '0.875rem',
                {
                    lineHeight: '1.5rem',
                }
            ],
        }
    }
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
