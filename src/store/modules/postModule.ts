//  以下為假資料
const state: PostState = {
  posts: [
    {
      id: '1',
      userId: 'user_123',
      username: 'John Doe',
      avatar: 'https://i.pravatar.cc/100?img=1',
      content: 'NEON !! ! The world\'s most difficult song to play and sing.🌍✨',
      media: [
        'https://i.ytimg.com/vi/_DfQC5qHhbo/maxresdefault.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/JohnMayerin2019.jpg/640px-JohnMayerin2019.jpg',
      ],
      createTime: new Date(),
      likes: 5,
      retweets: 2,
      replies: 3,
      isLiked: false,
      isRetweeted: false,
      comments: [],
    },
    {
      id: '2',
      userId: 'user_456',
      username: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/100?img=2',
      content: 'John Mayer’s guitar playing is the perfect blend of technical mastery and soulful expression, making every note feel deeply personal. 🎉',
      media: [
        'https://cdn-p.smehost.net/sites/d563907ee0c84f41b15553bfb3eb554c/wp-content/uploads/2021/08/19439893172.jpg',
      ],
      createTime: new Date(),
      likes: 8,
      retweets: 3,
      replies: 1,
      isLiked: false,
      isRetweeted: false,
      comments: [],
    },
    {
      id: '3',
      userId: 'user_789',
      username: 'Alice Johnson',
      avatar: 'https://i.pravatar.cc/100?img=3',
      content: 'His ability to seamlessly transition between blues, rock, and pop showcases his versatility and deep understanding of music. ☀️🌊',
      media: ['https://achievems.com/wp-content/uploads/2023/06/john-mayer.jpg'],
      createTime: new Date(),
      likes: 12,
      retweets: 5,
      replies: 4,
      isLiked: true,
      isRetweeted: false,
      comments: [],
    },
    {
      id: '4',
      userId: 'user_101',
      username: 'Bob Lee',
      avatar: 'https://i.pravatar.cc/100?img=4',
      content: 'Mayer’s tone is instantly recognizable, with a warmth and clarity that sets him apart from almost any other guitarist. 😋',
      media: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/JohnMayerin2019.jpg/640px-JohnMayerin2019.jpg'],
      createTime: new Date(),
      likes: 15,
      retweets: 4,
      replies: 2,
      isLiked: false,
      isRetweeted: true,
      comments: [],
    },
    {
      id: '5',
      userId: 'user_202',
      username: 'Charlie Brown',
      avatar: 'https://i.pravatar.cc/100?img=5',
      content: 'His blues-inspired phrasing and impeccable touch make his solos sound like they’re telling a heartfelt story.🔥',
      media: ['https://media.soundoflife.com/articles/1258/John-Mayer-3.jpg'],
      createTime: new Date(),
      likes: 20,
      retweets: 6,
      replies: 5,
      isLiked: true,
      isRetweeted: true,
      comments: [],
    },
    {
      id: '6',
      userId: 'user_303',
      username: 'Diana Prince',
      avatar: 'https://i.pravatar.cc/100?img=6',
      content: 'Watching John Mayer play live is like witnessing a masterclass in guitar dynamics, technique, and emotion.',
      media: ['https://ysolife.com/wp-content/uploads/2024/07/john-mayer-live-dec-2022-billboard-1548.jpg'],
      createTime: new Date(),
      likes: 30,
      retweets: 8,
      replies: 7,
      isLiked: true,
      isRetweeted: false,
      comments: [],
    },
    {
      id: '7',
      userId: 'user_404',
      username: 'Ethan Hunt',
      avatar: 'https://i.pravatar.cc/100?img=7',
      content: 'His ability to make complex guitar techniques look effortless proves he’s not just talented but also incredibly disciplined. 🎯',
      media: ['https://i8.amplience.net/i/naras/john-mayer_MI0005252722-MN0000239827'],
      createTime: new Date(),
      likes: 25,
      retweets: 9,
      replies: 3,
      isLiked: false,
      isRetweeted: true,
      comments: [],
    },
    {
      id: '8',
      userId: 'user_505',
      username: 'Fiona Gallagher',
      avatar: 'https://i.pravatar.cc/100?img=8',
      content: 'Mayer’s songwriting combined with his guitar skills creates timeless music that resonates across generations. 🌍',
      media: ['https://blog.deplike.com/wp-content/uploads/2022/10/How-Did-John-Mayer-Learn-Guitar.jpg'],
      createTime: new Date(),
      likes: 18,
      retweets: 5,
      replies: 4,
      isLiked: false,
      isRetweeted: false,
      comments: [],
    },
    {
      id: '9',
      userId: 'user_606',
      username: 'George Costanza',
      avatar: 'https://i.pravatar.cc/100?img=9',
      content: 'His fingerstyle playing is so fluid and precise that it feels like an extension of his soul. 👑',
      media: ['https://www.rollingstone.com/wp-content/uploads/2024/08/john-mayer-finger-injury.jpg?w=1581&h=1054&crop=1'],
      createTime: new Date(),
      likes: 22,
      retweets: 4,
      replies: 6,
      isLiked: true,
      isRetweeted: false,
      comments: [],
    },
    {
      id: '10',
      userId: 'user_707',
      username: 'Hannah Montana',
      avatar: 'https://i.pravatar.cc/100?img=10',
      content: 'John Mayer isn’t just a guitarist; he’s a storyteller whose instrument speaks as powerfully as his lyrics.',
      media: ['https://i.ytimg.com/vi/1uJC7myYiQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC6TGgTMdDoHJCUVqgFEWV4IaZh8Q'],
      createTime: new Date(),
      likes: 35,
      retweets: 10,
      replies: 8,
      isLiked: true,
      isRetweeted: true,
      comments: [],
    },
  ],
  account: 'test_account',
  userName: 'TestUser',
  token: null,
};
//

import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';

const API_URL = '/api/relation/posts';

export interface Post {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  content: string;
  media?: string[];
  createTime: Date;
  likes: number;
  retweets: number;
  replies: number;
  isLiked: boolean;
  isRetweeted: boolean;
  comments?: Post[];
}

export interface PostState {
  posts: Post[];
  account: string;
  userName: string;
  token: string | null;
}

// const state: PostState = {
//   posts: JSON.parse(localStorage.getItem('posts') || '[]'),
//   account: localStorage.getItem('account') || '',
//   userName: localStorage.getItem('userName') || '',
//   token: localStorage.getItem('token') || null,
// };

const getters: GetterTree<PostState, any> = {
  getAllPosts: (state) => state.posts,
  getPostById:
    (state) =>
    (id: string) =>
      state.posts.find((post) => post.id === id),
};

const mutations: MutationTree<PostState> = {
  SET_POSTS(state, posts: Post[]) {
    state.posts = posts;
  },
  ADD_POST(state, post: Post) {
    state.posts.unshift(post);
  },
  LIKE_POST(state, postId: string) {
    const post = state.posts.find((p) => p.id === postId);
    if (post) {
      post.isLiked = !post.isLiked;
      post.likes += post.isLiked ? 1 : -1;
    }
  },
  RETWEET_POST(state, postId: string) {
    const post = state.posts.find((p) => p.id === postId);
    if (post) {
      post.isRetweeted = !post.isRetweeted;
      post.retweets += post.isRetweeted ? 1 : -1;
    }
  },
  DELETE_POST(state, postId: string) {
    state.posts = state.posts.filter((post) => post.id !== postId);
  },
};

const actions: ActionTree<PostState, any> = {
  // 取得所有貼文 (GET)
  async fetchPosts({ commit }) {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data: Post[] = await response.json();
      commit('SET_POSTS', data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  },

  // 新增貼文 (POST)
  async createPost({ commit }, post: Omit<Post, 'id' | 'createTime' | 'likes' | 'retweets' | 'replies' | 'isLiked' | 'isRetweeted' | 'comments'>) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...post,
          createTime: new Date(),
          likes: 0,
          retweets: 0,
          replies: 0,
          isLiked: false,
          isRetweeted: false,
          comments: [],
        }),
      });
      if (!response.ok) throw new Error('Failed to create post');
      const newPost: Post = await response.json();
      commit('ADD_POST', newPost);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  },

  // 按讚 (PUT)
  async likePost({ commit }, postId: string) {
    try {
      const response = await fetch(`${API_URL}/${postId}/like`, {
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
      const response = await fetch(`${API_URL}/${postId}/retweet`, {
        method: 'PUT',
      });
      if (!response.ok) throw new Error('Failed to retweet post');
      commit('RETWEET_POST', postId);
    } catch (error) {
      console.error('Error retweeting post:', error);
    }
  },

  // 刪除貼文 (DELETE)
  async deletePost({ commit }, postId: string) {
    try {
      const response = await fetch(`${API_URL}/${postId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete post');
      commit('DELETE_POST', postId);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  },
};

// Module<S, R> 的型別參數： S：此模組內的 state 的型別 R：根 store 的 state 的型別
export const postModule: Module<PostState, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
