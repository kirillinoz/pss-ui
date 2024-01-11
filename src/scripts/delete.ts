export const deleteVideo = (id: string) => {
  return fetch(`/api/video/${id}`, {
    method: "DELETE",
  });
};
