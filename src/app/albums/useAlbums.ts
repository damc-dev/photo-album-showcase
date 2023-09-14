import useSWR from "swr";
import { Album } from "./Album";
import fetcher from "@/app/libs/fetch";

export default function useAlbums(userId: number) {
  const { data, error, isLoading } = useSWR<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`, fetcher)
  return {
    albums: data,
    isLoading,
    isError: error
  }
}