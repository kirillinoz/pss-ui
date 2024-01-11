"use client";
import FilmCard from "@/components/custom/FilmCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { getCollection } from "@/scripts/get";
import { uploadCover, uploadTitle, uploadVideo } from "@/scripts/upload";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [collection, setCollection] = useState<any>([]);

  const [isProgressBar, setIsProgressBar] = useState(false);
  const [progress, setProgress] = useState<number>(0);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const coverInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getCollection().then((collection) => setCollection(collection));
  }, []);

  const handleAddMovie = async (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const cover = coverInputRef.current?.files?.[0];
    const video = videoInputRef.current?.files?.[0];
    if (!cover || !video) return alert("Please select a cover image and video");

    // Close dialog and reset form
    setIsDialogOpen(false);
    e.target.reset();
    coverInputRef.current.value = "";
    videoInputRef.current.value = "";

    // Send to server
    setIsProgressBar(true);
    setProgress(0);
    const titleData = await uploadTitle(title);
    setProgress(titleData.progress);
    const coverData = await uploadCover(titleData.id, cover);
    setProgress(coverData.progress);
    const videoData = await uploadVideo(titleData.id, video);
    setProgress(videoData.progress);

    // Reset progress bar
    setProgress(0);
    setIsProgressBar(false);

    // Fetch new collection
    const collection = await getCollection();
    setCollection(collection);
  };

  const refreshCollection = async () => {
    const collection = await getCollection();
    setCollection(collection);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <main className="flex min-h-screen items-center flex-col p-8 xs:p-16 sm:p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-2xl">Your collection</h1>
            <div className="flex flex-col sm:flex-row w-full sm:w-fit">
              <DialogTrigger asChild>
                <Button className="mt-12 sm:mr-3 sm:mt-0">New Movie</Button>
              </DialogTrigger>
              <Button
                className="mt-3 sm:mt-0"
                variant="outline"
                onClick={refreshCollection}
              >
                Refresh
              </Button>
            </div>
          </div>
        </div>
        {isProgressBar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-10 max-w-5xl w-full items-center justify-between mt-12"
          >
            <Progress value={progress} />
          </motion.div>
        )}
        <div className="z-10 max-w-5xl w-full items-center justify-between mt-12">
          <div className="flex justify-between">
            <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {collection.map((movie: any, index: number) => (
                <FilmCard
                  key={index}
                  id={movie.id}
                  cover={`data:image/jpg;base64,${movie.cover}`}
                  title={movie.title}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleAddMovie}>
          <DialogHeader>
            <DialogTitle>New Movie</DialogTitle>
            <DialogDescription>
              Add a new movie to your existing collection.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                placeholder="Pulp Fiction"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cover" className="text-right">
                Cover
              </Label>
              <Input
                id="cover"
                type="file"
                accept=".jpg"
                className="col-span-3"
                required
                ref={coverInputRef}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="video" className="text-right">
                Video
              </Label>
              <Input
                id="video"
                type="file"
                accept=".mp4"
                className="col-span-3"
                required
                ref={videoInputRef}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
