module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    colors: {
      'vortezz': {
        'white': '#fff',
        'gray2': '#363535',
        'gray3': '#464545',
        'gray1': '#292727',
        'purple': '#8B5CF6',
        'red': '#ec2c44',
      },
      'cvortezz': {
        'white': '#000',
        'purple': '#ffb82b',
        'red': '#31b134',
      },
      'social': {
        'twitter': "#1DA1F2",
        'discord': "#5865F2",
        'youtube': "#FF0000",
        'github': "#000000"
      },
      'status': {
        'green': '#31b134',
        'dark-green': '#067906',
        'red': '#ec2c44',
        'yellow': '#ffb82b',
        'gray': '#464545',
      }
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
