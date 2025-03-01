"use server";

import { redirect } from "next/navigation";
import { getVideoIdFromUrl } from "../youtube/get-video-id-from-url";

export const analyseVideo = async (formData: FormData) => {
    const url = formData.get("url")?.toString()
    if (!url) return

    const videoId = getVideoIdFromUrl(url)
    if (!videoId) return

    redirect(`/video/${videoId}/analysis`)
}