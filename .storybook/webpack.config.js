module.exports = async ({ config, mode }) => {
  let scssLoader = config.module.rules.find(i => !!'a.scss'.match(i.test));
  scssLoader.use = [
    'to-string-loader',
    {
        loader: 'css-loader',
        options: {
            sourceMap: true
        }
    },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true
        }
    }
];
  let htmlLoader = config.module.rules.find(i => !!'a.html'.match(i.test));
  htmlLoader.loader = 'html-loader';
  return config;
};