import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchAuthors = async () => {
  const response = await axiosInstance.get("/authors");
  return response.data;
};

export const createAuthors = async (data) => {
  const response = await axiosInstance.post("/authors/", data);
  return response.data;
};

// Delete a Authors
export const deleteAuthors = async (id) => {
  await axiosInstance.delete(`/authors/${id}`);
};

// Edit a data
export const editAuthors = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(`/authors/${data.id}/`, data?.data);
  return response.data;
};
export const useAuthors = () => {
  return useQuery({
    queryKey: ["Authors"],
    queryFn: fetchAuthors,
  });
};

export const useCreateAuthor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createAuthors,
    onSuccess: () => {
      queryClient.invalidateQueries(["Authors"]);
    },
  });
};

// Custom hook to delete a Author
export const useDeleteAuthor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAuthors,
    onSuccess: () => {
      queryClient.invalidateQueries(["Authors"]);
    },
  });
};

// Custom hook to edit a Author
export const useEditAuthor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editAuthors,
    onSuccess: () => {
      queryClient.invalidateQueries(["Authors"]);
    },
  });
};
