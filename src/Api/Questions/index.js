import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchQuestions = async () => {
  const response = await axiosInstance.get("/contacts/questions/");
  return response.data;
};

export const createQuestions = async (data) => {
  const response = await axiosInstance.post("/contacts/questions/", data);
  return response.data;
};

// Delete a Questions
export const deleteQuestions = async (id) => {
  await axiosInstance.delete(`/contacts/questions/${id}`);
};

// Edit a data
export const editQuestions = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(
    `/contacts/questions/${data.id}/`,
    data?.data
  );
  return response.data;
};
export const useQuestions = () => {
  return useQuery({
    queryKey: ["Questions"],
    queryFn: fetchQuestions,
  });
};

export const useCreateQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createQuestions,
    onSuccess: () => {
      queryClient.invalidateQueries(["Questions"]);
    },
  });
};

// Custom hook to delete a Question
export const useDeleteQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteQuestions,
    onSuccess: () => {
      queryClient.invalidateQueries(["Questions"]);
    },
  });
};

// Custom hook to edit a Question
export const useEditQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editQuestions,
    onSuccess: () => {
      queryClient.invalidateQueries(["Questions"]);
    },
  });
};
