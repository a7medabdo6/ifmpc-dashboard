// import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
// import axiosInstance from "../axiosConfig";

// const fetchSliders = async () => {
//   const response = await axiosInstance.get("/settings/1");
//   return response.data;
// };



// // Edit a data
// export const editSliders = async (data) => {
//   console.log(data);

//   const response = await axiosInstance.put(
//     `/settings/1/`,
//     data
//   );
//   return response.data;
// };
// export const useSliders = () => {
//   return useQuery({
//     queryKey: ["Sliders"],
//     queryFn: fetchSliders,
//   });
// };



// // Custom hook to edit a Slider
// export const useEditSlider = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: editSliders,
//     onSuccess: () => {
//       queryClient.invalidateQueries(["Sliders"]);
//     },
//   });
// };

import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchSliders = async () => {
  try {
    const response = await axiosInstance.get("/settings/1");
    return response.data;
  } catch (error) {
    console.error("Error fetching sliders:", error);
    throw new Error("Failed to fetch sliders");
  }
};

// Edit a data
export const editSliders = async (data) => {
  try {
    const response = await axiosInstance.put(`/settings/1/`, data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const errorDetails = error.response.data.errors
        .map(err => `
          <div style="color: red;">
             <strong>${err.field_name}</strong>, : <strong>${err.message}</strong>
          </div>
        `).join("");
        
      throw new Error(`
        <div>
          ${errorDetails}
        </div>
      `);
    } else {
      throw new Error("Failed to edit slider");
    }
  }
};


export const useSliders = () => {
  return useQuery({
    queryKey: ["Sliders"],
    queryFn: fetchSliders,
  });
};

// Custom hook to edit a Slider
export const useEditSlider = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editSliders,
    onSuccess: () => {
      queryClient.invalidateQueries(["Sliders"]);
    },
    onError: (error) => {
      console.error("Error updating sliders:", error);
    },
  });
};