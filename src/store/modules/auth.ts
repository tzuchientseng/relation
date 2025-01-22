import { ActionContext } from "vuex"; // 引入 Vuex 的型別定義

interface State {
  token: string | null;
}

const authModule = {
  namespaced: true,
  state: {
    token: null as string | null,
  },
  getters: {
    isAuthenticated(state: State): boolean {
      return !!state.token;
    },
  },
  mutations: {
    setToken(state: State, token: string): void {
      state.token = token;
    },
    clearToken(state: State): void {
      state.token = null;
    },
  },
  actions: {
    async login(
      { commit }: ActionContext<State, State>, // 使用 Vuex 的 ActionContext 型別
      payload: { username: string; password: string }
    ): Promise<any> {
      try {
        const response = await fetch("https://home.sunnytseng.com/api/relation/token/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json", // 新增 Accept Header
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Login failed");
        }

        const data = await response.json();
        commit("setToken", data.access);
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    },
    logout({ commit }: ActionContext<State, State>): void {
      commit("clearToken");
    },
};

export default authModule;
