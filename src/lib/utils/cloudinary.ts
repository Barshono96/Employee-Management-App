import { cloudinaryConfig } from '../config/cloudinary';

export async function uploadToCloudinary(file: File): Promise<string> {
  try {
    // Create the form data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', cloudinaryConfig.apiKey);
    formData.append('upload_preset', cloudinaryConfig.uploadPreset);

    // Upload to Cloudinary
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Upload error:', error);
    throw new Error('Image upload failed. Please try again.');
  }
}
