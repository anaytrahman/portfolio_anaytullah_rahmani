import { Injectable } from '@angular/core';
import { APP_FILES } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

   public errorMessage = 'Something went wrong while processing your request.';
  async download(filePath: string, fileName?: string): Promise<void> {
    const trimmedPath = filePath?.trim();
    const lastSegment = trimmedPath?.split('/').pop();
    const hasFileName = !!lastSegment && /\.[^\./]+$/.test(lastSegment);

    if (!trimmedPath || !hasFileName) {
      throw new Error(this.errorMessage);
    }

    const response = await fetch(trimmedPath, { method: 'HEAD' });
    if (!response.ok) {
      throw new Error(this.errorMessage);
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
      alert(this.errorMessage);
      return;
    }

    void this.download(RESUME, Name).catch((error: unknown) => {
      const message = error instanceof Error ? error.message : this.errorMessage;
      alert(message);
    });
  }
}