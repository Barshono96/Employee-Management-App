import { env } from "./env";

export const cloudinaryConfig = {
  cloudName: env.CLOUDINARY_CLOUD_NAME,
  apiKey: env.CLOUDINARY_API_KEY,
  uploadPreset: env.CLOUDINARY_UPLOAD_PRESET,
};
