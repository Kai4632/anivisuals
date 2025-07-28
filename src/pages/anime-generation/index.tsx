import { useState } from "react";
import {
  generateAIImage,
  validateImageFile,
  downloadImage,
  generateDownloadFilename,
  promptTemplates,
} from "../../utils/aiHelper";

interface UploadedImage {
  file: File;
  preview: string;
}

export default function AnimeGeneration() {
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(
    null
  );
  const [prompt, setPrompt] = useState(
    "Please convert this image into Studio Ghibli art style with the G"
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (file: File) => {
    try {
      validateImageFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage({
          file,
          preview: e.target?.result as string,
        });
        setError(null);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Invalid file");
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    setResultImage(null);
  };

  const startTransformation = async () => {
    setIsProcessing(true);
    setProgress(0);
    setError(null);

    try {
      setProgress(10);
      const generatedImageUrl = await generateAIImage(
        prompt,
        uploadedImage?.file || new File([], "empty")
      );
      setProgress(100);
      setResultImage(generatedImageUrl);
    } catch (error) {
      console.error("Transformation failed:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to generate image. Please try again."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadResult = () => {
    if (!resultImage) return;

    const filename = uploadedImage
      ? generateDownloadFilename(uploadedImage.file.name, "ai-generated")
      : `ai-generated-artwork_${new Date()
          .toISOString()
          .slice(0, 19)
          .replace(/:/g, "-")}.png`;

    downloadImage(resultImage, filename);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/687d3c65a05c0acd24ea99b3/687d412d5b273fec7fe5c197_Frame.png')",
        }}
      />

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 py-12">
          
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide">
              Anime Generation
            </h1>
            <p className="text-xl text-white/80 font-light">
              Transform your photos into stunning anime-style artwork
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Left Panel - Upload */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
              <h2 className="text-2xl font-light text-white mb-6">
                Upload Image
              </h2>

              {/* Image Upload Area */}
              <div
                className={`border-2 border-dashed rounded-xl p-8 mb-6 transition-colors ${
                  dragActive ? "border-white/50 bg-white/5" : "border-white/20"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {uploadedImage ? (
                  <div className="relative">
                    <img
                      src={uploadedImage.preview}
                      alt="Uploaded"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <button
                      onClick={removeImage}
                      className="absolute top-3 right-3 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <p className="text-white/60 mb-2">
                      Drag and drop an image here
                    </p>
                    <label className="text-white/80 cursor-pointer hover:text-white transition-colors">
                      or browse files
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileInput}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
              </div>

              {/* Input Prompt */}
              <div className="mb-6">
                <label className="block text-white/80 mb-3 font-light">
                  Prompt
                </label>
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Describe your desired anime style..."
                />
              </div>

              {/* Quick Prompts */}
              <div className="mb-6">
                <p className="text-white/60 text-sm mb-3">Quick prompts:</p>
                <div className="space-y-2">
                  <button
                    onClick={() => setPrompt(promptTemplates.ghibli)}
                    className="text-white/80 hover:text-white transition-colors text-sm block text-left"
                  >
                    Studio Ghibli style
                  </button>
                  <button
                    onClick={() => setPrompt(promptTemplates.anime)}
                    className="text-white/80 hover:text-white transition-colors text-sm block text-left"
                  >
                    Anime with vibrant colors
                  </button>
                  <button
                    onClick={() => setPrompt(promptTemplates.fantasy)}
                    className="text-white/80 hover:text-white transition-colors text-sm block text-left"
                  >
                    Fantasy landscape
                  </button>
                </div>
              </div>

              {/* Transform Button */}
              <button
                onClick={startTransformation}
                disabled={isProcessing}
                className={`w-full py-4 rounded-xl font-medium transition-all ${
                  isProcessing
                    ? "bg-white/20 cursor-not-allowed"
                    : "bg-white text-black hover:bg-white/90"
                } flex items-center justify-center gap-3`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <span>Transform Image</span>
                  </>
                )}
              </button>
            </div>

            {/* Right Panel - Result */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
              <h2 className="text-2xl font-light text-white mb-6">
                Result
              </h2>

              {/* Result Area */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 min-h-64 flex items-center justify-center">
                {isProcessing ? (
                  <div className="text-center">
                    <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    
                    <div className="w-full bg-white/10 rounded-full h-1 mb-4">
                      <div
                        className="bg-white h-1 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    
                    <p className="text-white/60 text-sm">Processing your image...</p>
                  </div>
                ) : error ? (
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                    </div>
                    <p className="text-red-400 text-sm mb-2">Generation Failed</p>
                    <p className="text-white/60 text-sm mb-4">{error}</p>

                    {error.includes("billing") && (
                      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-4">
                        <p className="text-yellow-200 text-sm mb-2">
                          To fix this:
                        </p>
                        <ul className="text-yellow-200 text-sm text-left space-y-1">
                          <li>• Go to OpenAI Billing</li>
                          <li>• Add a payment method</li>
                          <li>• Set your spending limit</li>
                        </ul>
                      </div>
                    )}

                    <button
                      onClick={() => setError(null)}
                      className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                ) : resultImage ? (
                  <div className="w-full">
                    <div className="relative mb-4">
                      <img
                        src={resultImage}
                        alt="Generated Result"
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <button
                      onClick={downloadResult}
                      className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-white/60">
                      Upload an image and click transform to generate artwork.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
