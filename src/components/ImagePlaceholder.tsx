import { Image } from "lucide-react";
interface Props { aspectRatio?: string; caption?: string; className?: string }
export function ImagePlaceholder({ aspectRatio = "aspect-video", caption = "Photo placeholder", className = "" }: Props) {
  return <div className={`flex w-full ${aspectRatio} flex-col items-center justify-center rounded-lg border border-dashed border-stone-300 bg-stone-100 p-4 text-center text-stone-400 ${className}`}>
    <Image className="mb-2 h-8 w-8" strokeWidth={1.5} /><span className="text-xs font-medium uppercase tracking-wider text-stone-500">{caption}</span>
  </div>;
}
