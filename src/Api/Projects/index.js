import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchProjects = async () => {
  const response = await axiosInstance.get("/projects/");
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
  console.log(data);

  const response = await axiosInstance.put(
    `/projects/${data.id}/`,
    data?.jsonData
  );
  return response.data;
};
export const useProjects = () => {
  return useQuery({
    queryKey: ["Projects"],
    queryFn: fetchProjects,
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
