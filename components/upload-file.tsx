'use client';

import { FileUploader } from '@/components/upload/multi-file';
import {
  UploaderProvider,
  type UploadFn,
} from '@/components/upload/uploader-provider';
import { useEdgeStore } from '@/lib/edgestore';
import * as React from 'react';

export function MultiFileDropzoneUsage() {
  const { edgestore } = useEdgeStore();

  const uploadFn: UploadFn = React.useCallback(
    async ({ file, onProgressChange, signal }) => {
      const res = await edgestore.publicFiles.upload({
        file,
        signal,
        onProgressChange,
      });
      console.log(res);
      return res;
    },
    [edgestore],
  );

  return (
    <UploaderProvider uploadFn={uploadFn} autoUpload>
      <div className="px-4 md:px-6 lg:px-8">
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

