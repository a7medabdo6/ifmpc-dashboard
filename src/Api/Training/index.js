import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchTrainings = async () => {
  const response = await axiosInstance.get("/trainings");
  return response.data;
};

export const createTrainings = async (data) => {
  const response = await axiosInstance.post("/trainings/", data);
  return response.data;
};

// Delete a Trainings
export const deleteTrainings = async (id) => {
  await axiosInstance.delete(`/trainings/${id}`);
};

// Edit a data
export const editTrainings = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(
    `/trainings/${data.id}/`,
    data?.data
  );
  return response.data;
};
export const useTrainings = () => {
  return useQuery({
    queryKey: ["Trainings"],
    queryFn: fetchTrainings,
  });
};

export const useCreateTraining = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTrainings,
    onSuccess: () => {
      queryClient.invalidateQueries(["Trainings"]);
    },
  });
};

// Custom hook to delete a Training
export const useDeleteTraining = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTrainings,
    onSuccess: () => {
      queryClient.invalidateQueries(["Trainings"]);
    },
  });
};

// Custom hook to edit a Training
export const useEditTraining = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editTrainings,
    onSuccess: () => {
      queryClient.invalidateQueries(["Trainings"]);
    },
  });
};
