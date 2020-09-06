const purgecss = [
  '@fullhuman/postcss-purgecss', {
    content: [
      './src/pages/**/*.{js,jsx,ts,tsx}',
      './src/components/**/*.{js,jsx,ts,tsx}',
      './src/styles/**/*.{scss,sass,css}',
      // etc.
    ],

    // This is the function used to extract class names from your templates
    defaultExtractor: content => {
      content.match(/[\w-/:]+(?<!:)/g) || []
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

      return broadMatches.concat(innerMatches)
    }
  }
]

module.exports = {
  plugins: {
    'postcss-import': [],
    'tailwindcss': ['./tailwind.config.js'],
    'autoprefixer': [],
    // ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  }
}
