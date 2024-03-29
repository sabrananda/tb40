"use client"
import { useEffect } from "react";
import AssessmentForm from "./assessmentForm";
import { homeState } from "@/states/homeState";
import { useRouter } from "next/navigation";
import Form from "./form";

export default function AssessmentPage() {
  const router = useRouter()
  const [nama] = homeState((state) => [state.nama])
  useEffect(() => {
    if (nama === "") {
      router.push("/")
    }
  }, [nama, router])
  return (
    <div>
      {/* <div className="mb-10 flex justify-end">
        <button className="font-bold bg-blue-200 rounded-sm px-2 py-1 hover:bg-blue-400" onClick={reset}>reset</button>
      </div> */}
      {/* <AssessmentForm /> */}
      <Form />
    </div>
  )
}