import { ActionContext } from "vuex";

// const API_URL = 'https://home.sunnytseng.com/api/relation/token/'; // Deploy to server
const API_URL = '/api/relation/token/';

interface State {
  account: string,
  userName: string,
  avatar: string,
  token: string | null;
}

const state: State = {
  account: localStorage.getItem("account") || "",
  userName: localStorage.getItem("userName") || "",
  avatar: localStorage.getItem("avatar") !== "null" ? localStorage.getItem("avatar") || "" : "",
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
  setAvatar(state: State, avatar: string): void {
    state.avatar = avatar;
    localStorage.setItem("avatar", avatar);
  },
  setToken(state: State, token: string): void {
    state.token = token;
    localStorage.setItem("token", token);
  },
  clearUser(state: State): void {
    state.userName = "";
    state.avatar = ""; 
    state.token = null;
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    localStorage.removeItem("avatar"); 
  },
};

const actions = {
  async login(
    { commit }: ActionContext<State, State>,
    payload: { username: string; password: string }
  ): Promise<any> {
    try {
      const response = await fetch(API_URL, {
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
      commit("setAvatar", data.avatar || "");
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
