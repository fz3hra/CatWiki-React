module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')"
      },
      borderRadius: {
        'extra': '1248px'
      },
      height: {
        '128': '30rem',
        '200': '538.19px',
        '300': '530.4px',
        '71': '278px',
        '74': '305.12px'
      },
      width: {
        '15': '60px',
        '70': '250px',
        '71': '278px',
        '601': '601px'
      },
      fontFamily: {
        'mystery-Quest': ['mystery Quest'],
        'montserrat': ['montserrat']
      },
      colors: {
        'dark-brown': '#333333',
        'light-brown': '#DEC68B'
      },
      screens: {
        'mobile': '500px',
        'desktop': '1280px'
      }
    },
  },
  plugins: [],
}
