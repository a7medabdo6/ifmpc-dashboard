import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchCategories = async () => {
  const response = await axiosInstance.get("/categories");
  return response.data;
};

export const createCategories = async (data) => {
  const response = await axiosInstance.post("/categories/", data);
  return response.data;
};

// Delete a Categories
export const deleteCategories = async (id) => {
  await axiosInstance.delete(`/categories/${id}`);
};

// Edit a data
export const editCategories = async ({ id, data }) => {
  const response = await axiosInstance.put(`/categories/${id}`, data);
  return response.data;
};
export const useCategories = () => {
  return useQuery({
    queryKey: ["Categories"],
    queryFn: fetchCategories,
  });
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCategories,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};

// Custom hook to delete a Category
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCategories,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};

// Custom hook to edit a Category
export const useEditCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editCategories,
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};
