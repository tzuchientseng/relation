import { ActionContext } from "vuex";

interface State {
  account: string,
  userName: string,
  token: string | null;
}

const state: State = {
  account: localStorage.getItem("account") || "",
  userName: localStorage.getItem("userName") || "",
  token: localStorage.getItem("token") || null,
};

const getters = {
  isAuthenticated(state: State): boolean {
    return !!state.token;
  },
};

const mutations = {
  setAccount (state: State, account: string): void {
    state.account = account;
    localStorage.setItem("account", account);
  },
  setName (state: State, name: string): void {
    state.userName = name;
    localStorage.setItem("userName", name);
  },
  setToken(state: State, token: string): void {
    state.token = token;
    localStorage.setItem("token", token);
  },
  clearUser(state: State): void {
    state.userName = "";
    state.token = null;
    localStorage.removeItem("userName");
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
      commit("setAccount", data.account);
      commit("setName", data.name);
      commit("setToken", data.access);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  logout({ commit }: ActionContext<State, State>): void {
    commit("clearUser");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
