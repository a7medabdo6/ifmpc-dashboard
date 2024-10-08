import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchUsers = async () => {
  const response = await axiosInstance.get("/users/");
  return response.data;
};
const fetchOneUsers = async (username) => {
  console.log(username);

  const response = await axiosInstance.get(`/users/${username}`);
  return response.data;
};

export const createUsers = async (data) => {
  const response = await axiosInstance.post("/users/", data);
  return response.data;
};

// Delete a Users
export const deleteUsers = async (id) => {
  await axiosInstance.delete(`/users/${id}`);
};

// Edit a data
export const editUsers = async (data) => {

  const response = await axiosInstance.put(`/users/${data.username}/`, data?.data);
  return response.data;
};
export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};
export const useOneUsers = (username) => {
  return useQuery({
    queryKey: ["user", username],
    queryFn: () => fetchOneUsers(username),
    enabled: !!username, // Ensure the query doesn't run until a username is provided
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
