module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
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
          'github': "#000000",
        },
        'status': {
          'green': '#31b134',
          'dark_green': '#067906',
          'red': '#ec2c44',
          'yellow': '#ffb82b',
          'gray': '#464545',
        },
        'light': {
          'gray1': '#969595',
          'gray2': '#B0B0B0',
          'gray3': '#C6C5C5',
        },
      },
      backgroundImage: {
        'en': 'url(https://twemoji.maxcdn.com/v/13.0.0/svg/1f1ec-1f1e7.svg)',
        'fr': 'url(https://twemoji.maxcdn.com/v/13.0.0/svg/1f1eb-1f1f7.svg)',
      },
    },
  },
  plugins: [
    (process.env.NODE_ENV === 'production' ? {cssnano: {}} : {}),
  ],
}
