import { ActionContext } from "vuex";

interface State {
  token: string | null;
}

const state: State = {
  token: localStorage.getItem("token") || null,
};

const getters = {
  isAuthenticated(state: State): boolean {
    return !!state.token;
  },
};

const mutations = {
  setToken(state: State, token: string): void {
    state.token = token;
    localStorage.setItem("token", token);
  },
  clearToken(state: State): void {
    state.token = null;
    localStorage.removeItem("token");
  },
};

const actions = {
  async login(
    { commit }: ActionContext<State, State>,
    payload: { username: string; password: string }
  ): Promise<any> {
    try {
      // const response = await fetch("https://home.sunnytseng.com/api/relation/token/", { // Deploy to server
      const response = await fetch("/api/relation/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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
  },
  logout({ commit }: ActionContext<State, State>): void {
    commit("clearToken");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
