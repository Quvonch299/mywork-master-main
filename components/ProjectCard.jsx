import Image from "next/image";
import { Trash } from "lucide-react";

export default function ProjectCard({ id, title, description, tech, image, link, onDelete }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 relative">
      <Image
        src={image || "/projects/landing.png"}
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100"
            >
              {t}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm font-medium pt-2"
          >
            Ko‘rish
          </a>
        )}
      </div>
      <button
        onClick={() => onDelete(id)}
        className="absolute top-3 right-3 text-red-500 hover:text-red-700"
        title="O‘chirish"
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
