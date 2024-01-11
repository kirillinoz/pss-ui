export type Movie = {
  id: string;
  title: string;
  cover: string;
};

export const getCollection = async (): Promise<Movie[]> => {
  const response = await fetch("/api/collection");
  console.log(response);
  return response.json();
};

export const getVideo = async (id: string) => {
  const response = await fetch(`/api/video/${id}`);
  return response.json();
};
