import { Injectable } from '@angular/core';
import { APP_FILES } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  async download(filePath: string, fileName?: string): Promise<void> {
    const trimmedPath = filePath?.trim();
    const lastSegment = trimmedPath?.split('/').pop();
    const hasFileName = !!lastSegment && /\.[^\./]+$/.test(lastSegment);

    if (!trimmedPath || !hasFileName) {
      throw new Error('CV is not available');
    }

    const response = await fetch(trimmedPath, { method: 'HEAD' });
    if (!response.ok) {
      throw new Error('CV is not available');
    }

    const link = document.createElement('a');
    link.href = trimmedPath;
    if (fileName?.trim()) {
      link.download = fileName.trim();
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadResume(): void {
    const { RESUME, Name } = APP_FILES ?? {};

    if (!RESUME || !Name) {
      alert('CV is not available');
      return;
    }

    void this.download(RESUME, Name).catch((error: unknown) => {
      const message = error instanceof Error ? error.message : 'CV is not available';
      alert(message);
    });
  }
}