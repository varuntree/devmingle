import { useState } from 'react'
import { UseFormRegister, SubmitHandler, Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form'
import { ideaFormData } from './page'
import { X } from 'lucide-react'

type Props = {
  setTechStack: (techStack: string[]) => void
  setLinks: (links: string[]) => void
  setUploadedFiles: (files: File[]) => void
  uploadedFiles: File[]
  techStack: string[]
  links: string[]
  register: UseFormRegister<ideaFormData>
  handleSubmit: UseFormHandleSubmit<ideaFormData>
  control: Control<ideaFormData>
  errors: FieldErrors<ideaFormData>
  onSubmit: SubmitHandler<ideaFormData>
}

const categories = ['Web Development', 'Mobile App', 'AI/ML', 'IoT', 'Blockchain', 'Other']

export default function IdeaForm({setTechStack, setLinks, uploadedFiles, setUploadedFiles, techStack, links, register, handleSubmit, control, errors, onSubmit} : Props) {
  const [newTech, setNewTech] = useState('')
  const [newLink, setNewLink] = useState('')

  const addTech = () => {
    if (newTech && !techStack.includes(newTech)) {
      setTechStack([...techStack, newTech])
      setNewTech('')
    }
  }

  const addLink = () => {
    if (newLink && !links.includes(newLink)) {
      setLinks([...links, newLink])
      setNewLink('')
    }
  }

  const removeTech = (tech: string) => {
    setTechStack(techStack.filter(t => t !== tech))
  }

  const removeLink = (link: string) => {
    setLinks(links.filter(l => l !== link))
  }

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i)=> i !== index))
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl p-8 backdrop-blur-lg bg-white bg-opacity-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-white">Submit Your Idea</h2>
        
        <div className="mb-4">
          <label htmlFor="ideaTitle" className="block text-sm font-medium text-white">Idea Title</label>
          <input
            {...register('ideaTitle')}
            id="ideaTitle"
            className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-300"
            placeholder="Enter your idea title"
          />
          {errors.ideaTitle && <p className="mt-1 text-sm text-red-400">{errors.ideaTitle.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="ideaDescription" className="block text-sm font-medium text-white">Idea Description</label>
          <textarea
            {...register('ideaDescription')}
            id="ideaDescription"
            rows={4}
            className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-300"
            placeholder="Describe your idea"
          ></textarea>
          {errors.ideaDescription && <p className="mt-1 text-sm text-red-400">{errors.ideaDescription.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="ideaCategory" className="block text-sm font-medium text-white">Idea Category</label>
          <select
            {...register('ideaCategory')}
            id="ideaCategory"
            className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white backdrop-blur-lg"
          >
            <option className="bg-gray-800 bg-opacity-80" value="">Select a category</option>
            {categories.map((category) => (
              <option className='bg-gray-800 bg-opacity-80' key={category} value={category}>{category}</option>
            ))}
          </select>
          {errors.ideaCategory && <p className="mt-1 text-sm text-red-400">{errors.ideaCategory.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="possibleTechStack" className="block text-sm font-medium text-white">Possible Tech Stack</label>
          <div className="flex">
            <input
              type="text"
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-300"
              placeholder="Enter a technology"
            />
            <button
              type="button"
              onClick={addTech}
              className="mt-1 px-4 py-2 bg-orange-600 text-white rounded-r-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                {tech}
                <button type="button" onClick={() => removeTech(tech)} className="ml-1 text-orange-600 hover:text-orange-800">
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="links" className="block text-sm font-medium text-white">Links</label>
          <div className="flex">
            <input
              type="text"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-300"
              placeholder="Enter a link"
            />
            <button
              type="button"
              onClick={addLink}
              className="mt-1 px-4 py-2 bg-orange-600 text-white rounded-r-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {links.map((link, index) => (
              <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                {link}
                <button type="button" onClick={() => removeLink(link)} className="ml-1 text-orange-600 hover:text-orange-800">
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="files" className="block text-sm font-medium text-white">Files</label>
          <input
            {...register('files')}
            type="file"
            id="files"
            multiple
            onChange={(e) => {
              const fileList = Array.from(e.target.files || []);
              setUploadedFiles(fileList);
            }}
            className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {uploadedFiles.map((file, index) => (
              <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                {file.name}
                <button type="button" onClick={() => {
                  removeFile(index);
                  const newFileList = new DataTransfer();
                  uploadedFiles.forEach((f, i) => {
                    if (i !== index) {
                      newFileList.items.add(f);
                    }
                  });
                  const inputElement = document.getElementById('files') as HTMLInputElement;
                  if (inputElement) {
                    inputElement.files = newFileList.files;
                  }
                }} className="ml-1 text-orange-600 hover:text-orange-800">
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="visibility" className="block text-sm font-medium text-white">Visibility</label>
          <select
            {...register('visibility')}
            id="visibility"
            className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-white backdrop-blur-lg"
          >
            <option className="bg-gray-800 bg-opacity-80" value="public">Public</option>
            <option className="bg-gray-800 bg-opacity-80" value="private">Private</option>
          </select>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Submit Idea
          </button>
        </div>
      </form>
    </div>
  )
}