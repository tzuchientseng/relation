// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     proxy: {},
//   },
// });

/*
// .env.production 文件
VUE_APP_API_URL=https://sunnytseng.com/api
`const response = await fetch(`${process.env.VUE_APP_API_URL}/relation/token/`, {`
*/

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://sunnytseng.com/api',
        changeOrigin: true, // 是否允許跨域
        pathRewrite: { '^/api': '' }, // 將 /api 替換為空（視需求設定）
      },
    },
  },
});
