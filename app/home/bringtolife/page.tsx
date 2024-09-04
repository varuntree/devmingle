"use client"
import React, { useState } from 'react';
import { z } from 'zod';
import IdeaForm from './IdeaForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import HouseRepresentation from './HouseRepresentation';
import Card from '@/components/Card';

const ideaFormSchema = z.object({
  ideaTitle: z.string().min(1, "Idea title is required"),
  ideaDescription: z.string().min(1, "Idea description is required"),
  ideaCategory: z.string().min(1, "Idea category is required"),
  possibleTechStack: z.array(z.string()).optional(),
  files: z.instanceof(FileList).optional(),
  links: z.array(z.string().url("Invalid URL")).optional(),
  visibility: z.enum(["public", "private"]),
})
 
export type ideaFormData = z.infer<typeof ideaFormSchema>

export default function BringToLife() {
  const [techStack, setTechStack] = useState<string[]>([])
  const [links, setLinks] = useState<string[]>([])
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  
  const { register, handleSubmit, control, formState: { errors }, watch } = useForm<ideaFormData>({
    resolver: zodResolver(ideaFormSchema),
    defaultValues: {
      possibleTechStack: [],
      links: [],
      visibility: 'public',
    },
  })

  const onSubmit: SubmitHandler<ideaFormData> = (data: ideaFormData) => {
    console.log({...data, possibleTechStack: techStack, links: links})
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 p-4 lg:p-8">
        <IdeaForm 
          setTechStack={setTechStack}
          setLinks={setLinks}
          setUploadedFiles={setUploadedFiles}
          uploadedFiles={uploadedFiles}  
          techStack={techStack}
          links={links}
          register={register}
          handleSubmit={handleSubmit}
          control={control}
          errors={errors}
          onSubmit={onSubmit}
        />
      </div>
      <div className="w-full lg:w-1/2 relative flex items-center justify-center p-4 lg:p-8">
        <div className="absolute w-4/5 h-4/5 max-w-[550px] max-h-[550px] bg-orange-500 opacity-40 rounded-full">
        </div>
        <Card className="w-11/12 max-w-[500px]">
          <HouseRepresentation watch={watch} />
        </Card>
      </div>  
    </div>
  )
}