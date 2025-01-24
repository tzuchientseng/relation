const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://home.sunnytseng.com/api',
  //       changeOrigin: true, // 是否允許跨域
  //       pathRewrite: { '^/api': '' }, // 將 /api 替換為空（視需求設定）
  //     },
  //   },
  // },
});

/*
// .env.production 文件
VUE_APP_API_URL=https://home.sunnytseng.com/api
`const response = await fetch(`${process.env.VUE_APP_API_URL}/relation/token/`, {`
*/
