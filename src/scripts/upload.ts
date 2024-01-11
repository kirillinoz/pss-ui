type Response = {
  id: string;
  progress: number;
  error: string | null;
};

export const uploadTitle = async (title: string): Promise<Response> => {
  const response = await fetch("/api/upload/title", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  return response.json();
};

export const uploadCover = async (
  id: string,
  file: File
): Promise<Response> => {
  const formData = new FormData();
  formData.append("cover", file);

  const response = await fetch(`/api/upload/cover/${id}`, {
    method: "POST",
    body: formData,
  });

  return response.json();
};

export const uploadVideo = async (
  id: string,
  file: File
): Promise<Response> => {
  const formData = new FormData();
  formData.append("video", file);

  const response = await fetch(`/api/upload/video/${id}`, {
    method: "POST",
    body: formData,
  });

  return response.json();
};
