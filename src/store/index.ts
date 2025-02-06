/*
Vuex 1
State（狀態）：存放應用的全局數據。 -> Getters：類似 Vue 的 computed，用來計算或過濾 state 的數據。
-> Mutations：唯一能修改 state 的地方（同步操作）。 ->Actions：執行異步操作，然後調用 mutations 修改 state。
Modules：允許將 store 拆分成多個模塊，方便管理大型應用。

Vuex 2: actions → mutations → state
Vuex 4: actions → state
*/

import { createStore } from 'vuex'
import auth from './modules/auth'

export default createStore({
  modules: {
    auth,
  }
})
