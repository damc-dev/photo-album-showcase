import useSWR from "swr";
import { Photo } from "./Photo";
import fetcher from "@/app/libs/fetch";

export default function useAlbumPhotos(albumId: number) {
  const { data, error, isLoading } = useSWR<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, fetcher)
  return {
    photos: data,
    isLoading,
    isError: error
  }
}