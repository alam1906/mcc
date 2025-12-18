import type { News } from "$lib/types/news"
import { pb } from "."

export const getNews = async()=>{
    try {
        const res = await pb.collection('news').getFullList<News>();
        console.log(res)
        return res;
    } catch (error) {
        console.error(error)
    }
}