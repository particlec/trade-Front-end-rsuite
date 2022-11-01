import axiosInstance from '@/utils/axiosInstance';

export default {
  getNational: () => {
    return axiosInstance.get(`/national-debt-all `);
  },

  getNationalZh: () => {
    return axiosInstance.get(`/national-debt-zh `);
  }
};
