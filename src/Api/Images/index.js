import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchImages = async () => {
  const response = await axiosInstance.get("/projects/images/");
  return response.data;
};

export const createImages = async (data) => {
  const response = await axiosInstance.post("/projects/images/", data);
  return response.data;
};

// Delete a Images
export const deleteImages = async (id) => {
  await axiosInstance.delete(`/projects/images/${id}`);
};

// Edit a data
export const editImages = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(
    `/projects/images/${data.id}/`,
    data?.data
  );
  return response.data;
};
export const useImages = () => {
  return useQuery({
    queryKey: ["Images"],
    queryFn: fetchImages,
  });
};

export const useCreateImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createImages,
    onSuccess: () => {
      queryClient.invalidateQueries(["Images"]);
    },
  });
};

// Custom hook to delete a Image
export const useDeleteImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteImages,
    onSuccess: () => {
      queryClient.invalidateQueries(["Images"]);
    },
  });
};

// Custom hook to edit a Image
export const useEditImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editImages,
    onSuccess: () => {
      queryClient.invalidateQueries(["Images"]);
    },
  });
};
