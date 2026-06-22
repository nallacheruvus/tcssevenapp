import { create } from 'zustand';

export const useUserStore = create((set) => ({
  // 1. Define initial state
  users: [],
  isLoading: false,
  error: null,

  // 2. Define the asynchronous API action
  fetchUsers: async () => {
    // Start loading state, clear previous errors
    set({ isLoading: true, error: null });
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      // Update state with the fetched data
      set({ users: data, isLoading: false });
    } catch (error) {
      // Handle and store the error
      set({ error: error.message, isLoading: false });
    }
  }
}));
