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
      payload: { account: string; password: string }
    ): Promise<any> {
      try {
        const response = await fetch("https://.....", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Login failed");
        }

        const data = await response.json();
        commit("setToken", data.token);
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    logout({ commit }: ActionContext<State, State>): void {
      commit("clearToken");
    },
  },
};

export default authModule;
