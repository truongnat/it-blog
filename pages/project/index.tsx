import React from "react"
import Image from "next/image"
import { allProjects } from "~/.contentlayer/generated"
import { MetaHeader, PageSEO } from "~/components"
import { RootLayout } from "~/layouts"
import { formatDate } from "~/shared/utils"
import { compareDesc } from "date-fns"

export default function Project() {
  const projects = allProjects.sort((a, b) => {
    return compareDesc(new Date(a.fromDate), new Date(b.fromDate))
  })

  return (
    <>
      <PageSEO title={"Dự án"} />
      <RootLayout.Container>
        <MetaHeader
          title="Dự án"
          description="Những dự án mà tôi đã tham gia từ năm 2020 ❤️"
        />
        <div className="flex flex-col space-y-10">
          {projects.map((project, index) => (
            <article
              key={project._id}
              className="group relative flex flex-col items-start space-y-10 sm:flex-row sm:space-x-10 sm:space-y-0"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={170}
                  height={150}
                  className="h-[150px] rounded-md border bg-transparent object-fill"
                  priority={index <= 1}
                />
              )}
              <div className="flex flex-col">
                <h2 className="text-2xl font-extrabold">{project.title}</h2>
                {project.description && (
                  <p className="text-muted-foreground">{project.description}</p>
                )}
                <p className="text-sm text-muted-foreground">
                  {formatDate(project.fromDate)} - {formatDate(project.toDate)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </RootLayout.Container>
    </>
  )
}
