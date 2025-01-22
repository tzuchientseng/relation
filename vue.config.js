const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': { // 假設你的 API 路徑以 /api 開頭
        target: 'https://relation.sunnytseng.com',
        changeOrigin: true, // 是否允許跨域
        pathRewrite: { '^/api': '' }, // 將 /api 替換為空（視需求設定）
      },
    },
  },
});
