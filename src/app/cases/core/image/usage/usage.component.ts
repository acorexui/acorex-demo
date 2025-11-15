import { Component, signal } from '@angular/core';
import { AXButtonComponent } from '@acorex/components/button';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { NgStyle, CommonModule } from '@angular/common';

@Component({
  selector: 'app-usage',
  standalone: true,
  templateUrl: './usage.component.html',
  imports: [AXButtonComponent, AXSelectBoxComponent, NgStyle, CommonModule],
})
export class UsageComponent {
  selectedFile = signal<File | null>(null);
  originalImageUrl = signal<string | null>(null);
  resizedImageUrl = signal<string | null>(null);
  isProcessing = signal(false);
  maxSize = signal(800);
  outputType = signal<string>('image/png');
  quality = signal(90);
  originalSize = signal<{ width: number; height: number } | null>(null);
  resizedSize = signal<{ width: number; height: number } | null>(null);

  formatOptions = [
    { value: 'image/png', text: 'PNG' },
    { value: 'image/jpeg', text: 'JPEG' },
    { value: 'image/webp', text: 'WebP' },
  ];

  constructor() {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.selectedFile.set(file);
      this.loadImage(file);
      this.setOutputTypeFromFile(file);
    }
  }

  private loadImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.originalImageUrl.set(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }

  private setOutputTypeFromFile(file: File): void {
    if (file.type.startsWith('image/')) {
      this.outputType.set(file.type);
    }
  }

  async resizeImage(): Promise<void> {
    const file = this.selectedFile();
    if (!file) return;

    this.isProcessing.set(true);

    try {
      const resizedBlob = await this.resizeImageFile(
        file,
        this.maxSize(),
        this.outputType(),
        this.quality()
      );

      const resizedUrl = URL.createObjectURL(resizedBlob);
      this.resizedImageUrl.set(resizedUrl);

      // Get dimensions
      const img = new Image();
      img.onload = () => {
        this.originalSize.set({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
        this.resizedSize.set({ width: img.width, height: img.height });
      };
      img.src = resizedUrl;
    } catch (error) {
      console.error('Error resizing image:', error);
    } finally {
      this.isProcessing.set(false);
    }
  }

  private async resizeImageFile(
    file: File,
    maxSize: number,
    outputType: string,
    quality: number
  ): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        const { width, height } = this.calculateDimensions(
          img.width,
          img.height,
          maxSize
        );

        canvas.width = width;
        canvas.height = height;

        ctx?.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to create blob'));
            }
          },
          outputType,
          quality / 100
        );
      };

      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = URL.createObjectURL(file);
    });
  }

  private calculateDimensions(
    originalWidth: number,
    originalHeight: number,
    maxSize: number
  ): { width: number; height: number } {
    if (originalWidth <= maxSize && originalHeight <= maxSize) {
      return { width: originalWidth, height: originalHeight };
    }

    const aspectRatio = originalWidth / originalHeight;

    if (originalWidth > originalHeight) {
      return {
        width: maxSize,
        height: Math.round(maxSize / aspectRatio),
      };
    } else {
      return {
        width: Math.round(maxSize * aspectRatio),
        height: maxSize,
      };
    }
  }

  resetImage(): void {
    this.selectedFile.set(null);
    this.originalImageUrl.set(null);
    this.resizedImageUrl.set(null);
    this.originalSize.set(null);
    this.resizedSize.set(null);
  }

  onFormatChange(value: string): void {
    this.outputType.set(value);
  }

  getCurrentFormat(): string {
    return this.outputType();
  }

  // Additional methods needed for template
  errorMessage = signal<string | null>(null);

  updateMaxSize(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = parseInt(target.value);
    if (!isNaN(value)) {
      this.maxSize.set(value);
    }
  }

  updateQuality(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = parseInt(target.value);
    if (!isNaN(value)) {
      this.quality.set(value);
    }
  }

  getFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  downloadResizedImage(): void {
    const resizedUrl = this.resizedImageUrl();
    if (resizedUrl) {
      const link = document.createElement('a');
      link.href = resizedUrl;
      const fileExtension = this.outputType().split('/')[1];
      const timestamp = new Date()
        .toISOString()
        .slice(0, 19)
        .replace(/:/g, '-');
      link.download = `resized-image-${timestamp}.${fileExtension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  exportImage(): void {
    // Alias for downloadResizedImage for consistency
    this.downloadResizedImage();
  }
}
