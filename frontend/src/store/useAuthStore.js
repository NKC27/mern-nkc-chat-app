import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import { toast } from 'react-hot-toast';

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],

  checkAuth: async () => {
    try {
      const response = await axiosInstance.get('/auth/check');
      set({ authUser: response.data, isCheckingAuth: false });
    } catch (error) {
      console.log('Error in checkAuth', error.message);
      set({ authUser: false });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post('/auth/signup', data);
      set({ authUser: res.data });
      toast.success('Signup Successful');
    } catch (error) {
      console.log('Error in signup', error.message);
      set({ isSigningUp: false });
      toast.error(error.response.data.message);
      // console.log('error.response.data.message', error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post('/auth/logout');
      set({ authUser: null });
      toast.success('Logout Successful');
    } catch (error) {
      console.log('Error in logout', error.message);
      toast.error('Logout Failed', error.response.data.message);
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post('/auth/login', data);
      set({ authUser: res.data });
      toast.success('Login Successful');
    } catch (error) {
      console.log('Error in login', error.message);
      set({ isLoggingIn: false });
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put('/auth/update-profile', data);
      set({ authUser: res.data });
      toast.success('Profile updated successfully');
    } catch (error) {
      console.log('error in update profile:', error);
      toast.error(error.response.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
