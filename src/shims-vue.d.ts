/*
  shims 的意思是「墊片」或「兼容層」
  .d 就是 declare (聲明)` 的縮寫
*/

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.png' {
  const value: string
  export default value
}
