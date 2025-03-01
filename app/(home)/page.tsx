import AgentPulse from "@/components/shared/agent-pulse";
import { features, socials, steps } from "@/data";
import Link from "next/link";
import { VideoForm } from "./_components/video-form";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-10 text-center mb-12">
            <AgentPulse size="lg" color="blue" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Your Personal <span className="gradient-text">AI Agent</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-xl mx-auto">
              Transform your videos content with AI-powered analysis,
              transcriptions and insights. Get started in seconds.
            </p>
            <VideoForm />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-3xl font-bold text-center mb-12">
            Powerfull features for content creators
          </h1>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className={`rounded-xl border-gray-200 p-6 border hover:border-blue-200 transition-all duration-300`}
                >
                  <div
                    className={`${f.iconBg} flex items-center justify-center rounded-xl size-12 p-2`}
                  >
                    <Icon className={`${f.iconColor} w-6 h-6`} />
                  </div>
                  <h3 className="text-2xl font-bold mt-4 mb-2">{f.title}</h3>
                  <p className="text-gray-500">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet your AI Agent in 3 Simple Steps
          </h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className={`bg-white shadow-md rounded-xl border-gray-200 p-6 border transition-all duration-300 flex flex-col items-center`}
                >
                  <div
                    className={`bg-gradient-to-br from-blue-700 to-blue-300 flex items-center justify-center rounded-full size-12 p-2`}
                  >
                    <Icon className={`text-white w-6 h-6`} />
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2 text-center">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-center">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-blue-600 to-blue-300 text-white">
        <div className="container mx-auto flex items-center justify-between flex-col md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2 mb-10 md:mb-0">
            <Link href="/" className="flex items-center gap-4">
              <AgentPulse size={"md"} color={"white"} />
              <h1 className="text-4xl font-bold">iTube</h1>
            </Link>
            <div className="flex flex-row items-center gap-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.link}
                  className="rounded-xl p-2 hover:bg-white/30 transition-all duration-300"
                >
                  <s.icon className="size-6 text-white" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center md:items-start flex-col md:flex-row gap-8 max-w-5xl">
            <div className="flex flex-col w-full md:w-1/3">
              <h2 className="text-xl font-bold text-center md:text-left mb-2">
                Ready to meet your AI Agent?
              </h2>
              <p className="text-blue-100 text-center md:text-left">
                Meet creators laveraging AI to unlock content insights and
                strategic recommendations.
              </p>
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <h2 className="text-xl font-bold text-center md:text-left mb-2">
                Meet your AI Agent in 3 Steps
              </h2>
              {steps.map((s) => (
                <p
                  key={s.title}
                  className="text-blue-100 text-center md:text-left pl-8"
                >
                  {s.title}
                </p>
              ))}
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <p className="text-blue-100 text-center md:text-right">
                © 2025 Copyright. All rights reserved
              </p>
              <p className="text-blue-100 text-center md:text-right">
                Made by Eddy-Idrissa
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
