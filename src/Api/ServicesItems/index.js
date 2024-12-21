import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchServicesItems = async () => {
  const response = await axiosInstance.get("/services/items");
  return response.data;
};

export const createServicesItems = async (data) => {
  const response = await axiosInstance.post("/services/items/", data);
  return response.data;
};

// Delete a ServicesItems
export const deleteServicesItems = async (id) => {
  await axiosInstance.delete(`/services/items/${id}`);
};

// Edit a data
export const editServicesItems = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(
    `/services/items/${data.id}/`,
    data?.data
  );
  return response.data;
};
export const useServicesItems = () => {
  return useQuery({
    queryKey: ["ServicesItems"],
    queryFn: fetchServicesItems,
  });
};

export const useCreateServiceItems = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createServicesItems,
    onSuccess: () => {
      queryClient.invalidateQueries(["ServicesItems"]);
    },
  });
};

// Custom hook to delete a Service
export const useDeleteServiceItems = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteServicesItems,
    onSuccess: () => {
      queryClient.invalidateQueries(["ServicesItems"]);
    },
  });
};

// Custom hook to edit a Service
export const useEditServiceItems = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editServicesItems,
    onSuccess: () => {
      queryClient.invalidateQueries(["ServicesItems"]);
    },
  });
};

const fetchOneServiceItems = async (id) => {
  console.log(id);
  
  const response = await axiosInstance.get(`/services/items/${id}`);
  return response.data;
};
export const useOneServiceItems = (id) => {
  return useQuery({
    queryKey: ["ServicesItems", id], // Include the id in the queryKey
    queryFn: () => fetchOneServiceItems(id), // Pass id to the fetch function
    enabled: !!id, // Ensure the query is only run if id is truthy
  });
};