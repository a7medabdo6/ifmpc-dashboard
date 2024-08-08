import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchUsers = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export const createUsers = async (data) => {
  const response = await axiosInstance.post("/users/token/", data);
  return response.data;
};

// Delete a Users
export const deleteUsers = async (id) => {
  await axiosInstance.delete(`/users/${id}`);
};

// Edit a data
export const editUsers = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(`/users/${data.id}/`, data?.data);
  return response.data;
};
export const useUsers = () => {
  return useQuery({
    queryKey: ["Users"],
    queryFn: fetchUsers,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUsers,
    onSuccess: () => {
      queryClient.invalidateQueries(["Users"]);
    },
  });
};

// Custom hook to delete a User
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUsers,
    onSuccess: () => {
      queryClient.invalidateQueries(["Users"]);
    },
  });
};

// Custom hook to edit a User
export const useEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editUsers,
    onSuccess: () => {
      queryClient.invalidateQueries(["Users"]);
    },
  });
};
