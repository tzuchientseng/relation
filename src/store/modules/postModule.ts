import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';

// const API_URL = 'https://home.sunnytseng.com/api/relation/posts/'; // Deploy to server
const API_URL = '/api/relation/posts/';

// Backend: User Table
export interface User {
  id: number;
  account: string;
  name: string;
  avatar: string;
}

// Backend: media (null, array)
export interface MediaItem {
  url: string;
  type: string;
}

// Backend Post Table
export interface Post {
  id: string;
  user: User;
  username: string;
  content: string;
  media: MediaItem[] | null;
  created_at: string;
  likes: number;
  retweets: number;
  replies: number;
  is_liked: boolean;
  is_retweeted: boolean;
  parent_post: string | null;
}

export interface PostListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}

export interface PostState {
  posts: Post[];
  account: string;
  userName: string;
  token: string | null;
}

//  vuex: state initial
const state: PostState = {
  posts: JSON.parse(localStorage.getItem('posts') || '[]'),
  account: localStorage.getItem('account') || '',
  userName: localStorage.getItem('userName') || '',
  token: localStorage.getItem('token') || null,
};

const getters: GetterTree<PostState, any> = {
  getAllPosts: (state) => state.posts,
  getPostById:
    (state) =>
    (id: string) =>
      state.posts.find((post) => post.id === id),
};

const mutations: MutationTree<PostState> = {
  SET_POSTS(state, data: PostListResponse) {
    state.posts = data.results;
  },

  ADD_POST(state, newPost: Post) {
    state.posts.unshift(newPost);
  },

  LIKE_POST(state, postId: string) {
    const post = state.posts.find((p) => p.id === postId);
    if (post) {
      post.is_liked = !post.is_liked;
      post.likes += post.is_liked ? 1 : -1;
    }
  },

  RETWEET_POST(state, postId: string) {
    const post = state.posts.find((p) => p.id === postId);
    if (post) {
      post.is_retweeted = !post.is_retweeted;
      post.retweets += post.is_retweeted ? 1 : -1;
    }
  },

  DELETE_POST(state, postId: string) {
    state.posts = state.posts.filter((post) => post.id !== postId);
  },
};

const actions: ActionTree<PostState, any> = {
  // async fetchPosts({ commit, state }) {
  async fetchPosts({ commit, rootState, getters }) {
    try {
      const token = rootState.auth.token || getters["auth/isAuthenticated"]; 
      // if (!state.token) {
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
      }

      const data: PostListResponse = await response.json();
      commit('SET_POSTS', data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },

  async createPost(
    { commit, rootState },
    payload: { content: string; images: File[] }
  ) {
    try {
      const token: string | null = rootState.auth.token;
      if (!token) throw new Error("Please login");

      const formData = new FormData();
      formData.append("text", payload.content);

      payload.images.forEach((file) => {
        formData.append("images", file);
      });

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Remove 'Content-Type' since FormData sets it automatically
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create post: ${errorText}`);
      }

      const newPost: Post = await response.json();
      commit("ADD_POST", newPost);
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  },


  async likePost({ commit }, postId: string) {
    try {
      const response = await fetch(`${API_URL}${postId}/like`, {
        method: 'PUT',
      });
      if (!response.ok) throw new Error('Failed to like post');
      commit('LIKE_POST', postId);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  },

  // 轉推 (PUT)
  async retweetPost({ commit }, postId: string) {
    try {
      const response = await fetch(`${API_URL}${postId}/retweet`, {
        method: 'PUT',
      });
      if (!response.ok) throw new Error('Failed to retweet post');
      commit('RETWEET_POST', postId);
    } catch (error) {
      console.error('Error retweeting post:', error);
    }
  },

  async deletePost({ commit }, postId: string) {
    try {
      const response = await fetch(`${API_URL}${postId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete post');
      commit('DELETE_POST', postId);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  },
};

export const postModule: Module<PostState, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
