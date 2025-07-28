# 🤖 AI Image Generation Setup Guide

## 🚀 Quick Setup

### 1. Create Environment File
Create a `.env` file in your project root:

```bash
# Copy the example file
cp env.example .env
```

### 2. Add Your OpenAI API Key
Edit the `.env` file and add your OpenAI API key:

```env
VITE_OPENAI_API_KEY=sk-your-actual-openai-api-key-here
```

### 3. Get OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign in or create an account
3. Go to "API Keys" section
4. Create a new API key
5. Copy the key and paste it in your `.env` file

## 🔧 How It Works

### AI Helper Functions (`src/utils/aiHelper.ts`)
- **`generateAIImage(prompt, imageFile?)`** - Main function to generate AI images
- **`validateImageFile(file)`** - Validates uploaded images
- **`downloadImage(url, filename)`** - Downloads generated images
- **`promptTemplates`** - Predefined prompt suggestions

### Features
✅ **Real AI Generation** - Uses OpenAI's DALL-E 3 API  
✅ **Text-to-Image** - Generate images from text prompts  
✅ **Custom Prompts** - Users can write their own prompts  
✅ **Prompt Suggestions** - Pre-built templates for different styles  
✅ **Optional Image Upload** - Reference images (not required)  
✅ **File Validation** - Checks file size and type  
✅ **Error Handling** - Comprehensive error messages  
✅ **Download Function** - Save generated images  

## 🎨 Available Art Styles

The helper includes these prompt templates:
- ✨ **Studio Ghibli** - Magical, dreamy atmosphere
- 🎨 **Anime Style** - Vibrant colors, detailed backgrounds
- 🌟 **Fantasy Landscape** - Ethereal lighting, mystical elements
- 🤖 **Cyberpunk** - Neon colors, futuristic elements
- 🎨 **Watercolor** - Soft, flowing artistic style
- 🖼️ **Oil Painting** - Rich textures, classical composition

## 💰 Cost Considerations

- **DALL-E 3**: ~$0.04 per image (1024x1024)
- **API Credits**: You'll need credits in your OpenAI account
- **Rate Limits**: OpenAI has rate limits for API calls

## 🔒 Security Notes

- ✅ API key is stored in `.env` file (not committed to git)
- ✅ Vite's `import.meta.env` securely accesses environment variables
- ✅ File validation prevents malicious uploads
- ✅ Error handling prevents API key exposure

## 🚀 Usage

1. **Write Prompt**: Describe the image you want to generate
2. **Optional Upload**: Add a reference image (not required)
3. **Generate**: Click "Transform" to create AI image
4. **Download**: Save your generated artwork

## 🛠️ Troubleshooting

### Common Issues:
- **"API key not found"** - Check your `.env` file
- **"File too large"** - Images must be under 10MB
- **"Invalid file type"** - Only JPEG, PNG, WebP allowed
- **"API request failed"** - Check your OpenAI credits/rate limits

### Development Tips:
- Use browser dev tools to see API responses
- Check console for detailed error messages
- Test with small images first
- Monitor your OpenAI usage dashboard

## 🎯 Next Steps

1. **Test the Integration**: Upload an image and try generating
2. **Customize Prompts**: Experiment with different styles
3. **Monitor Usage**: Keep track of your API costs
4. **Enhance UX**: Add loading states, better error messages
5. **Scale Up**: Consider rate limiting, user quotas

---

**Ready to create amazing AI-generated artwork! 🎨✨** 