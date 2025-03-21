import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';

// const API_URL = 'https://sunnytseng.com/api/relation/posts/'; // Deploy to server
const API_URL = '/api/relation/posts/';

// 1. 後端回傳 User 物件
export interface User {
  id: number;
  account: string;
  name: string;
  avatar: string;
}

// 2. 後端的 media 若非 null 就是一個陣列，含多個 { url, type }
export interface MediaItem {
  url: string;
  type: string;
}

// 3. 跟後端一致的 Post 介面
export interface Post {
  id: string;
  user: User;                  // user 整個物件
  username: string;            // 額外的欄位
  content: string;
  media: MediaItem[] | null;   // 可能是 null 或陣列
  created_at: string;          // 後端是 created_at
  likes: number;
  retweets: number;
  replies: number;
  is_liked: boolean;           // 後端是 is_liked
  is_retweeted: boolean;       // 後端是 is_retweeted
  parent_post: string | null;  // 可能用不到，但後端有傳
}

// 4. 後端列表型態
export interface PostListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}

// 5. Vuex 中的 state，可以儲存後端的 posts，以及其他登入資訊
export interface PostState {
  posts: Post[];         // 存放後端回傳的陣列
  account: string;
  userName: string;
  token: string | null;
}

// 6. state：初始化
const state: PostState = {
  posts: JSON.parse(localStorage.getItem('posts') || '[]'),
  account: localStorage.getItem('account') || '',
  userName: localStorage.getItem('userName') || '',
  token: localStorage.getItem('token') || null,
};

// 7. Getter
const getters: GetterTree<PostState, any> = {
  getAllPosts: (state) => state.posts,
  getPostById:
    (state) =>
    (id: string) =>
      state.posts.find((post) => post.id === id),
};

// 8. Mutation
const mutations: MutationTree<PostState> = {
  // 把後端整個列表 (results) 寫進 state
  SET_POSTS(state, data: PostListResponse) {
    state.posts = data.results;
  },

  ADD_POST(state, newPost: Post) {
    state.posts.unshift(newPost);
  },

  LIKE_POST(state, postId: string) {
    const post = state.posts.find((p) => p.id === postId);
    if (post) {
      // 跟後端欄位一致：is_liked
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

// 9. Action
const actions: ActionTree<PostState, any> = {
  // 9-1. 取得所有貼文
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

  // 9-2. 新增貼文 (POST)
  //    由於我們現在的 Post interface 有很多後端自動帶的欄位 (例如 id, created_at)，
  //    前端在發送時通常只需要 content、或附帶 media (binary)。
  //    這裡視後端 API 格式而定，看是否要傳 body: { content }。
  //    以下僅供參考寫法：
  
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

  // 9-3. 按讚 (PUT)
  //    假設後端 API 是 /api/relation/posts/:postId/like
  //    並且後端會修改 is_liked / likes 數量
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

  // 9-4. 轉推 (PUT)
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

  // 9-5. 刪除貼文 (DELETE)
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

// 10. 匯出這個 Module
export const postModule: Module<PostState, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
