import create from "zustand";



// Set(state => {...}) -> use state if you want access to prev state
// If not, set({...}) directly will suffice
export const useUserStore = create((set) => ({
  id: 0,
  username: "",
  email: "",
  profile_image: "",
  background_image: "",
  follower_count: 0,
  media_count: 0,
  charts_order: [],

  setUserState: (username, email) => {
    set({
      username: username,
      email: email,
    });
  },
  setStatState: (props)=> {
    for (let key in props) {
      set({
        [key]: props[key]
      })
    };
  },
}));


export const useYoutubeStore = create((set)=> ({
  id: null,
  username: null,
  profile_image: null,
  follower_count: 0,
  view_count: 0,
  media_count: 0,
  src_url: null,
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
  id: null,
  username: null,
  profile_image: null,
  follower_count: 0,
  media_count: 0,
  src_url: null,
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
  id: null,
  username: null,
  follower_count: 0,
  like_count: 0,
  media_count: 0,
  src_url: null,
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