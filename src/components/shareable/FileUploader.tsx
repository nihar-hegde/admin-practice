"use client";

import { useCallback, Dispatch, SetStateAction } from "react";
import type { FileWithPath } from "@uploadthing/react";
import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { Button } from "@/components/ui/button";
import { convertFileToUrl } from "@/lib/utils";

type FileUploaderProps = {
  onFieldChange: (url: string[]) => void;
  imageUrls: string[];
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUploader({
  imageUrls,
  onFieldChange,
  setFiles,
}: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
    onFieldChange(acceptedFiles.map((file) => convertFileToUrl(file)));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });
  return (
    <div
      {...getRootProps()}
      className=" bg-zinc-200 flex h-72 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl bg-grey-50"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrls && imageUrls.length > 0 ? (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-5 overflow-hidden">
          {imageUrls.map((imageUrl) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt="image"
              className="w-36 h-36 object-cover rounded-md"
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col py-5 text-grey-500">
          <img
            src="/assets/icons/upload.svg"
            width={77}
            height={77}
            alt="file upload"
          />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="text-[12px] font-medium leading-[20px] mb-4">
            SVG, PNG, JPG
          </p>
          <Button type="button" className="rounded-full">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
}
