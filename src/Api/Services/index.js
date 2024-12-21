import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchServices = async () => {
  const response = await axiosInstance.get("/services");
  return response.data;
};

export const createServices = async (data) => {
  const response = await axiosInstance.post("/services/", data);
  return response.data;
};

// Delete a Services
export const deleteServices = async (id) => {
  await axiosInstance.delete(`/services/${id}`);
};

// Edit a data
export const editServices = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(
    `/services/${data.id}/`,
    data?.data
  );
  return response.data;
};
export const useServices = () => {
  return useQuery({
    queryKey: ["Services"],
    queryFn: fetchServices,
  });
};

export const useCreateService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createServices,
    onSuccess: () => {
      queryClient.invalidateQueries(["Services"]);
    },
  });
};

// Custom hook to delete a Service
export const useDeleteService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteServices,
    onSuccess: () => {
      queryClient.invalidateQueries(["Services"]);
    },
  });
};

// Custom hook to edit a Service
export const useEditService = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editServices,
    onSuccess: () => {
      queryClient.invalidateQueries(["Services"]);
    },
  });
};

const fetchOneService = async (id) => {
  console.log(id);
  
  const response = await axiosInstance.get(`/services/${id}`);
  return response.data;
};
export const useOneService = (id) => {
  return useQuery({
    queryKey: ["Services", id], // Include the id in the queryKey
    queryFn: () => fetchOneService(id), // Pass id to the fetch function
    enabled: !!id, // Ensure the query is only run if id is truthy
  });
};