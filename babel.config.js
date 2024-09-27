module.exports = {
    presets: [
      '@babel/preset-env',  // For modern JavaScript features
      '@babel/preset-react' // For React support
    ],
    ignore: [
      "src/assets/images/**/*.svg" // Ignore large SVG files
    ]
  };
  