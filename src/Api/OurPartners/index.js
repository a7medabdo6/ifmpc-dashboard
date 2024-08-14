import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";

const fetchOurPartners = async () => {
  const response = await axiosInstance.get("/settings/our-partners/");
  return response.data;
};

export const createOurPartners = async (data) => {
  const response = await axiosInstance.post("/settings/our-partners/", data);
  return response.data;
};

// Delete a OurPartners
export const deleteOurPartners = async (id) => {
  await axiosInstance.delete(`/settings/our-partners/${id}`);
};

// Edit a data
export const editOurPartners = async (data) => {
  console.log(data);

  const response = await axiosInstance.put(
    `/settings/our-partners/${data.id}/`,
    data?.data
  );
  return response.data;
};
export const useOurPartners = () => {
  return useQuery({
    queryKey: ["OurPartners"],
    queryFn: fetchOurPartners,
  });
};

export const useCreateOurPartner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createOurPartners,
    onSuccess: () => {
      queryClient.invalidateQueries(["OurPartners"]);
    },
  });
};

// Custom hook to delete a OurPartner
export const useDeleteOurPartner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteOurPartners,
    onSuccess: () => {
      queryClient.invalidateQueries(["OurPartners"]);
    },
  });
};

// Custom hook to edit a OurPartner
export const useEditOurPartner = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editOurPartners,
    onSuccess: () => {
      queryClient.invalidateQueries(["OurPartners"]);
    },
  });
};
