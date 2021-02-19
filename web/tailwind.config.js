module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#04294b',
        'dark-blue-translucent': '#04294b33',
        green: '#265727',
        grey: '#777',
      },
      backgroundImage: {
        mass: "url('images/mass-times.jpg')",
        daily: "url('images/daily-mass-times.jpg')",
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
