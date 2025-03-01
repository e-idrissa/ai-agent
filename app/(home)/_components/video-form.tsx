import { Input } from "@/components/ui/input"
import Form from "next/form"
import { AnalyseButton } from "./analyse-button"
import { analyseVideo } from "@/lib/actions/analyse-video"

export const VideoForm = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
        <Form action={analyseVideo} className="flex flex-col md:flex-row w-full items-center gap-2">
            <Input type="text" name="url" placeholder="Enter video URL" />
            <AnalyseButton />
        </Form>
    </div>
  )
}
