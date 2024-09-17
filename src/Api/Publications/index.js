import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

// تحديث دالة fetchPublications
export const fetchPublications = async (limit, offset) => {
  const response = await axiosInstance.get(`/publications/?limit=${limit}&offset=${offset}`);
  return response.data;
};

const fetchOnePublication = async (id) => {
  console.log(id);
  
  const response = await axiosInstance.get(`/publications/${id}`);
  return response.data;
};
export const createPublications = async (data) => {
  const response = await axiosInstance.post("/publications/", data);
  return response.data;
};

// Delete a Publications
export const deletePublications = async (id) => {
  await axiosInstance.delete(`/publications/${id}`);
};

// Edit a data
export const editPublications = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(
    `/publications/${data.id}/`,
    data?.data
  );
  return response.data;
};
export const usePublications = (limit, offset) => {
  return useQuery({
    queryKey: ["Publications", limit, offset],
    queryFn: () => fetchPublications(limit, offset),
    // يمكن إضافة خيارات أخرى هنا حسب الحاجة
  });
};

export const useOnePublication = (id) => {
  return useQuery({
    queryKey: ["Publications", id], // Include the id in the queryKey
    queryFn: () => fetchOnePublication(id), // Pass id to the fetch function
    enabled: !!id, // Ensure the query is only run if id is truthy
  });
};

export const useCreatePublication = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPublications,
    onSuccess: () => {
      queryClient.invalidateQueries(["Publications"]);
    },
  });
};

// Custom hook to delete a Publication
export const useDeletePublication = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePublications,
    onSuccess: () => {
      queryClient.invalidateQueries(["Publications"]);
    },
  });
};

// Custom hook to edit a Publication
export const useEditPublication = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editPublications,
    onSuccess: () => {
      queryClient.invalidateQueries(["Publications"]);
    },
  });
};
