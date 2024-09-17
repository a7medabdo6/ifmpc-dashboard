import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";


export const fetchProjects = async (limit, offset) => {
  const response = await axiosInstance.get(`/projects/?limit=${limit}&offset=${offset}`);
  return response.data;
};
const fetchOneProject = async (id) => {
  console.log(id);
  
  const response = await axiosInstance.get(`/projects/${id}`);
  return response.data;
};
export const createProjects = async (data) => {
  const response = await axiosInstance.post("/projects/", data);
  return response.data;
};

export const createProjectsImage = async (data) => {
  const response = await axiosInstance.post("/upload/", data);
  return response.data;
};
// Delete a Projects
export const deleteProjects = async (id) => {
  await axiosInstance.delete(`/projects/${id}`);
};

// Edit a data
export const editProjects = async (data) => {

  const response = await axiosInstance.put(
    `/projects/${data.id}/`,
    data?.jsonData
  );
  return response.data;
};

export const useProjects = (limit, offset) => {
  return useQuery({
    queryKey: ["Projects", limit, offset],
    queryFn: () => fetchProjects(limit, offset),
    // يمكن إضافة خيارات أخرى هنا حسب الحاجة
  });
};
export const useOneProject = (id) => {
  return useQuery({
    queryKey: ["Projects", id], // Include the id in the queryKey
    queryFn: () => fetchOneProject(id), // Pass id to the fetch function
    enabled: !!id, // Ensure the query is only run if id is truthy
  });
};
export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProjects,
    onSuccess: () => {
      queryClient.invalidateQueries(["Projects"]);
    },
  });
};
export const useCreateProjectImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProjectsImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["Projects"]);
    },
  });
};

// Custom hook to delete a Project
export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProjects,
    onSuccess: () => {
      queryClient.invalidateQueries(["Projects"]);
    },
  });
};

// Custom hook to edit a Project
export const useEditProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editProjects,
    onSuccess: () => {
      queryClient.invalidateQueries(["Projects"]);
    },
  });
};
