import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchContacts = async () => {
  const response = await axiosInstance.get("/contacts");
  return response.data;
};

export const createContacts = async (data) => {
  const response = await axiosInstance.post("/contacts/", data);
  return response.data;
};

// Delete a Contacts
export const deleteContacts = async (id) => {
  await axiosInstance.delete(`/contacts/${id}`);
};

// Edit a data
export const editContacts = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(
    `/contacts/${data.id}/`,
    data?.data
  );
  return response.data;
};
export const useContacts = () => {
  return useQuery({
    queryKey: ["Contacts"],
    queryFn: fetchContacts,
  });
};

export const useCreateContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createContacts,
    onSuccess: () => {
      queryClient.invalidateQueries(["Contacts"]);
    },
  });
};

// Custom hook to delete a Contact
export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteContacts,
    onSuccess: () => {
      queryClient.invalidateQueries(["Contacts"]);
    },
  });
};

// Custom hook to edit a Contact
export const useEditContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editContacts,
    onSuccess: () => {
      queryClient.invalidateQueries(["Contacts"]);
    },
  });
};
