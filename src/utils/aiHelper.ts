/**
 * Upload an image file to Cloudinary via proxy server
 * @param imageFile - Image file to upload
 * @returns Promise<string> - URL of the uploaded image
 */
export const uploadImageToCloudinary = async (
  imageFile: File
): Promise<string> => {
  const formData = new FormData();
  formData.append("image", imageFile);
  formData.append("folder", "animegen"); // Optional: organize uploads in a folder

  const response = await fetch(
    "https://runatthebullets.com/proxy/cloudinary-upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Cloudinary upload failed");
  }

  return data.data.secure_url;
};

/**
 * Generate an anime-styled image using Replicate's anime model (image-to-image)
 * @param prompt - Text prompt for anime style
 * @param imageFile - Image file to transform
 * @returns Promise<string> - URL of the generated anime image
 */
export const generateAIImage = async (
  prompt: string,
  imageFile: File
): Promise<string> => {
  try {
    const replicateApiKey = import.meta.env.VITE_REPLICATE_API_KEY;
    if (!replicateApiKey) {
      throw new Error(
        "Replicate API key not found. Please check your .env file."
      );
    }
    if (!prompt || prompt.trim() === "") {
      throw new Error("Prompt is required for image generation.");
    }
    if (!imageFile) {
      throw new Error("Image file is required for anime generation.");
    }
    // 1. Upload image to Cloudinary
    const imageUrl = await uploadImageToCloudinary(imageFile);

    console.log("imageUrl//////////////////", imageUrl);

    const version = "black-forest-labs/flux-kontext-pro"; // Replace with actual version
    const replicateApiUrl = "https://api.replicate.com/v1/predictions";
    const proxyUrl = `https://runatthebullets.com/proxy/?url=${encodeURIComponent(
      replicateApiUrl
    )}`;
    const replicateResponse = await fetch(proxyUrl, {
      method: "POST",
      headers: {
        Authorization: `Token ${replicateApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version,
        input: {
          input_image: imageUrl,
          // aspect_ratio: "match_input_image",
          prompt: prompt,
        },
      }),
    });
    const replicateData = await replicateResponse.json();

    console.log("replicateData//////////////////", replicateData);

    if (!replicateResponse.ok) {
      throw new Error(
        `Replicate API error: ${replicateData.error || "Unknown error"}`
      );
    }
    // Poll for completion if needed.
    let prediction = replicateData;
    while (
      prediction.status === "starting" ||
      prediction.status === "processing"
    ) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const pollUrl = `https://api.replicate.com/v1/predictions/${prediction.id}`;
      const pollProxyUrl = `https://runatthebullets.com/proxy/?url=${encodeURIComponent(
        pollUrl
      )}`;
      const pollRes = await fetch(pollProxyUrl, {
        headers: { Authorization: `Token ${replicateApiKey}` },
      });
      prediction = await pollRes.json();
    }
    if (prediction.status !== "succeeded" || !prediction.output) {
      throw new Error("Replicate did not return a successful result.");
    }
    // Output can be a single URL or an array
    const outputUrl = Array.isArray(prediction.output)
      ? prediction.output[0]
      : prediction.output;
    return outputUrl;
  } catch (error) {
    console.error("Error generating anime image:", error);
    throw error;
  }
};

/**
 * Convert image file to base64 string (kept for potential future use)
 * @param file - Image file to convert
 * @returns Promise<string> - Base64 encoded image
 */
// const convertImageToBase64 = (file: File): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const result = reader.result as string;
//       const base64 = result.split(",")[1];
//       resolve(base64);
//     };
//     reader.onerror = () => reject(new Error("Failed to read image file"));
//     reader.readAsDataURL(file);
//   });
// };

/**
 * Validate image file
 * @param file - File to validate
 * @returns boolean - Whether file is valid
 */
export const validateImageFile = (file: File): boolean => {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

  if (file.size > maxSize) {
    throw new Error("Image file is too large. Maximum size is 10MB.");
  }

  if (!allowedTypes.includes(file.type)) {
    throw new Error(
      "Invalid file type. Please upload a JPEG, PNG, or WebP image."
    );
  }

  return true;
};

/**
 * Generate a filename for the downloaded image
 * @param originalName - Original filename
 * @param style - Art style used
 * @returns string - Generated filename
 */
export const generateDownloadFilename = (
  originalName: string,
  style: string
): string => {
  const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, "-");
  const extension = originalName.split(".").pop() || "png";
  const baseName = originalName.split(".")[0];

  return `${baseName}_${style}_${timestamp}.${extension}`;
};

/**
 * Download image from URL
 * @param imageUrl - URL of the image to download
 * @param filename - Filename for the download
 */
export const downloadImage = (imageUrl: string, filename: string): void => {
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Predefined prompt templates for different art styles
 */
export const promptTemplates = {
  ghibli:
    "A beautiful Studio Ghibli style artwork with magical elements, soft lighting, dreamy atmosphere, and whimsical characters in a fantasy world",
  anime:
    "An anime style illustration with vibrant colors, detailed backgrounds, expressive characters, and dynamic composition",
  fantasy:
    "A dreamy fantasy landscape with ethereal lighting, mystical elements, floating islands, and magical creatures",
  cyberpunk:
    "A cyberpunk cityscape with neon colors, futuristic elements, urban atmosphere, and high-tech aesthetics",
  watercolor:
    "A beautiful watercolor painting with soft, flowing colors, artistic texture, and dreamy artistic style",
  oilPainting:
    "An oil painting with rich textures, bold brushstrokes, classical composition, and artistic mastery",
};

/**
 * Get a random prompt template
 * @returns string - Random prompt template
 */
export const getRandomPromptTemplate = (): string => {
  const templates = Object.values(promptTemplates);
  const randomIndex = Math.floor(Math.random() * templates.length);
  return templates[randomIndex];
};
