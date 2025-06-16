import * as React from 'react';
import { FileUploader } from '@/components/upload/multi-file';
import { UploaderProvider, type UploadFn } from '@/components/upload/uploader-provider';
import { useEdgeStore } from '@/lib/edgestore';

type MultiFileDropzoneUsageProps = {
  onUploadComplete: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export function MultiFileDropzoneUsage({ onUploadComplete }: MultiFileDropzoneUsageProps) {
  const { edgestore } = useEdgeStore();

  const uploadFn: UploadFn = React.useCallback(
    async ({ file, onProgressChange, signal }) => {
      const res = await edgestore.publicFiles.upload({
        file,
        signal,
        onProgressChange,
      });
      console.log('Uploaded file:', res);

      onUploadComplete(res.url);

      return res;
    },
    [edgestore, onUploadComplete],
  );

  return (
    <UploaderProvider uploadFn={uploadFn} autoUpload>
      <div className="px-4 md:px-6 lg:px-8 space-y-4">
        <FileUploader
          maxFiles={5}
          maxSize={1024 * 1024 * 1}
          accept={{
            'application/pdf': [],
            'text/plain': ['.txt'],
          }}
        />
      </div>
    </UploaderProvider>
  );
}
