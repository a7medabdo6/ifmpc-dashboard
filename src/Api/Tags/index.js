import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchTags = async () => {
  const response = await axiosInstance.get("/tags");
  return response.data;
};

export const createTags = async (data) => {
  const response = await axiosInstance.post("/tags/", data);
  return response.data;
};

// Delete a Tags
export const deleteTags = async (id) => {
  await axiosInstance.delete(`/tags/${id}`);
};

// Edit a data
export const editTags = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(
    `/tags/${data.id}/`,
    data?.data
  );
  return response.data;
};
export const useTags = () => {
  return useQuery({
    queryKey: ["Tags"],
    queryFn: fetchTags,
  });
};

export const useCreateTage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTags,
    onSuccess: () => {
      queryClient.invalidateQueries(["Tags"]);
    },
  });
};

// Custom hook to delete a Tage
export const useDeleteTage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTags,
    onSuccess: () => {
      queryClient.invalidateQueries(["Tags"]);
    },
  });
};

// Custom hook to edit a Tage
export const useEditTage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editTags,
    onSuccess: () => {
      queryClient.invalidateQueries(["Tags"]);
    },
  });
};
