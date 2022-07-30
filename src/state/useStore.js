import create from "zustand";



// Set(state => {...}) -> use state if you want access to prev state
// If not, set({...}) directly will suffice
export const useUserStore = create((set) => ({
  username: "",
  email: "",

  setUserState: (username, email) => {
    set({
      username: username,
      email: email,
    });
  },
}));


export const useYoutubeStore = create((set)=> ({
  id: 0,
  follower_count: 0,
  media_count: 0,
  demographics: null,
  geographics: null,
  data_intervals: null,
  medias: null,

  setYoutubeState: (props)=> {
    for (let key in props) {
      set({
        [key]: props[key]
      })
    };

  },

}))



export const useInstagramStore = create((set)=> ({
  id: 2,
  username: 0,
  follower_count: 0,
  media_count: 0,
  demographics: [],
  geographics: [],
  data_intervals:null,
  medias: [],
  setInstagramState: (props) => {
    for (let key in props) {
      set({
        [key]: props[key] // woohoo!
      })
    }
  },
}))

export const useFacebookStore = create((set)=> ({
  id: 8,
  follower_count: 0,
  like_count: 0,
  media_count: 0,
  demographics: [],
  geographics: [],
  data_intervals: null,
  medias: [],
  setFacebookState: (props) => {
    for (let key in props) {
      set({
        [key]: props[key]
      })
    }
  }
}))


export const useTabStore = create((set)=> ({
  ytTab: true,
  igTab: true,
  fbTab: true,

  setTab: (key) => set(state => ({
    [key]: !state[key]
  }))

}))