import React from "react";
import { motion } from "framer-motion";

interface FilmCardProps {
  id: string;
  cover: string;
  title: string;
}

const FilmCard: React.FC<FilmCardProps> = ({ id, cover, title }) => {
  return (
    <div className="card flex flex-col cursor-pointer">
      <a href={`/${id}`} className="rounded-lg overflow-hidden">
        <motion.img
          src={cover}
          alt={title}
          whileHover={{ scale: 1.03 }}
          style={{ width: "100%", height: "auto" }}
        />
      </a>
      <div className="text-left text-md font-bold mt-2 ml-2">{title}</div>
    </div>
  );
};

export default FilmCard;
