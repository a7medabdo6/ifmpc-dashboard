import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchSliders = async () => {
  const response = await axiosInstance.get("/settings/1");
  return response.data;
};



// Edit a data
export const editSliders = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(
    `/settings/1/`,
    data
  );
  return response.data;
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
  });
};
