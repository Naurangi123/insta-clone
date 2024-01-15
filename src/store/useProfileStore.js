import { create } from 'zustand';

const useProfileStore = create((set) => ({
  useProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  //   addPost:()
}));

export default useProfileStore;
