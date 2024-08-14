import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchContactUs = async () => {
  const response = await axiosInstance.get("/settings/contact-us-pages/");
  return response.data;
};

export const createContactUs = async (data) => {
  const response = await axiosInstance.post("/settings/contact-us-pages/", data);
  return response.data;
};

// Delete a ContactUsUs
export const deleteContactUs = async (id) => {
  await axiosInstance.delete(`/settings/contact-us-pages/${id}`);
};

// Edit a data
export const editContactUs = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(
    `/settings/contact-us-pages/${data.id}/`,
    data?.data
  );
  return response.data;
};
export const useContactUs = () => {
  return useQuery({
    queryKey: ["ContactUs"],
    queryFn: fetchContactUs,
  });
};

export const useCreateContactUs = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createContactUs,
    onSuccess: () => {
      queryClient.invalidateQueries(["ContactUs"]);
    },
  });
};

// Custom hook to delete a ContactUs
export const useDeleteContactUs = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteContactUs,
    onSuccess: () => {
      queryClient.invalidateQueries(["ContactUs"]);
    },
  });
};

// Custom hook to edit a ContactUs
export const useEditContactUs = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editContactUs,
    onSuccess: () => {
      queryClient.invalidateQueries(["ContactUs"]);
    },
  });
};
