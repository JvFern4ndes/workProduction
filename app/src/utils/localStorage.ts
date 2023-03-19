import localStorage from '@react-native-async-storage/async-storage';

export default ({
  get(key: string) {
    return localStorage.getItem(key);
  },

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

});
