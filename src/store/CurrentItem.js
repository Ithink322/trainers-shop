export default {
  state: {
    selectedItem: null,
  },
  mutations: {
    setSelectedItem(state, item) {
      state.selectedItem = item;
      localStorage.setItem("CurrentItem", JSON.stringify(item));
    },
  },
  actions: {
    selectItem({ commit }, item) {
      commit("setSelectedItem", item);
    },
  },
  getters: {
    getSelectedItem: (state) => {
      const savedItem = localStorage.getItem("CurrentItem");
      if (savedItem) {
        return JSON.parse(savedItem);
      } else {
        return state.selectedItem;
      }
    },
  },
};
