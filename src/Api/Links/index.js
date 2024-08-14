import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchLinks = async () => {
  const response = await axiosInstance.get("/settings/site-links/");
  return response.data;
};

export const createLinks = async (data) => {
  const response = await axiosInstance.post("/settings/site-links/", data);
  return response.data;
};

// Delete a Links
export const deleteLinks = async (id) => {
  await axiosInstance.delete(`/settings/site-links/${id}`);
};

// Edit a data
export const editLinks = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(
    `/settings/site-links/${data.id}/`,
    data?.formData
  );
  return response.data;
};
export const useLinks = () => {
  return useQuery({
    queryKey: ["Links"],
    queryFn: fetchLinks,
  });
};

export const useCreateLink = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createLinks,
    onSuccess: () => {
      queryClient.invalidateQueries(["Links"]);
    },
  });
};

// Custom hook to delete a Link
export const useDeleteLink = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteLinks,
    onSuccess: () => {
      queryClient.invalidateQueries(["Links"]);
    },
  });
};

// Custom hook to edit a Link
export const useEditLink = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editLinks,
    onSuccess: () => {
      queryClient.invalidateQueries(["Links"]);
    },
  });
};
