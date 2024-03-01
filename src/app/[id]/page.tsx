"use client";
import VideoPlayer from "@/components/custom/VideoPlayer";
import { Button } from "@/components/ui/button";
import { deleteVideo } from "@/scripts/delete";
import { Movie, getCollection } from "@/scripts/get";
import { ArrowBigLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function VideoPage() {
  const router = useRouter();
  const [collection, setCollection] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCollection() {
      const response = await getCollection();
      setCollection(response);
      setIsLoading(false);
    }

    fetchCollection();
  }, []);

  const pathname = usePathname();
  const id = pathname.split("/")[1];
  const title = collection.find((movie: any) => movie.id == id)?.title;

  const handleDeleteVideo = async (id: string) => {
    await deleteVideo(id);
    router.push("/");
  };

  return (
    <main className="flex min-h-screen items-center flex-col p-8 xs:p-16 sm:p-24">
      {!isLoading && (
        <div className="z-10 max-w-5xl w-full items-center justify-between">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Button
                onClick={() => router.push("/")}
                size="icon"
                variant="outline"
                className="mr-3"
              >
                <ArrowBigLeft />
              </Button>
              <h1 className="text-2xl mt-1">{title}</h1>
            </div>
            <Button onClick={() => handleDeleteVideo(id)} variant="destructive">
              Delete Movie
            </Button>
          </div>
          <VideoPlayer
            className="mt-12 rounded-lg overflow-hidden"
            videosrc={`http://[af49:8982:876:51ff::1]:3000/api/video/${id}`}
          />
        </div>
      )}
    </main>
  );
}
