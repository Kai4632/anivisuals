# 🎨 Ani-Visuals

> **Transform your photos into stunning anime-style artwork using cutting-edge AI technology**

Ani-Visuals is a modern web application that leverages the power of AI to transform ordinary photographs into beautiful anime-style artwork. Built with React and TypeScript, it provides an intuitive interface for users to upload images and generate unique anime transformations using advanced AI models.

![Ani-Visuals Banner](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0.5-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 Core Functionality
- **AI-Powered Image Transformation** - Convert photos to anime-style artwork using Replicate's Flux Kontext Pro model
- **Drag & Drop Interface** - Intuitive file upload with visual feedback
- **Real-time Processing** - Live progress indicators during AI generation
- **Multiple Art Styles** - Pre-built templates for Studio Ghibli, Anime, Fantasy, and more
- **Custom Prompts** - Full control over transformation style and direction
- **High-Quality Output** - Professional-grade image generation with detailed results

### 🎨 Artistic Styles Available
- **Studio Ghibli** - Magical, dreamy atmosphere with whimsical elements
- **Anime Style** - Vibrant colors with detailed backgrounds and expressive characters
- **Fantasy Landscape** - Ethereal lighting with mystical elements and floating islands
- **Cyberpunk** - Neon colors with futuristic urban aesthetics
- **Watercolor** - Soft, flowing artistic style with dreamy textures
- **Oil Painting** - Rich textures with classical composition and bold brushstrokes

### 🛠️ Technical Features
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **File Validation** - Automatic validation of image size, format, and quality
- **Error Handling** - Comprehensive error messages with troubleshooting guidance
- **Download Functionality** - Save generated artwork with custom filenames
- **Performance Optimized** - Fast loading and processing with modern build tools

## 🚀 Live Demo

**Experience Ani-Visuals in action:** [Coming Soon]

## 📸 Screenshots

### Main Interface
![Main Interface](https://via.placeholder.com/800x400/1e293b/ffffff?text=Ani-Visuals+Interface)

### AI Generation Process
![AI Generation](https://via.placeholder.com/800x400/1e293b/ffffff?text=AI+Generation+Process)

### Results Gallery
![Results](https://via.placeholder.com/800x400/1e293b/ffffff?text=Generated+Artwork+Gallery)

## 🏗️ Architecture

### Frontend Stack
- **React 18** - Modern React with concurrent features
- **TypeScript** - Type-safe development with enhanced IDE support
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router DOM** - Client-side routing for seamless navigation

### AI & Backend Services
- **Replicate API** - Cloud-based AI model hosting and inference
- **Flux Kontext Pro** - Advanced image-to-image transformation model
- **Cloudinary** - Cloud image management and optimization
- **Proxy Server** - Secure API communication and CORS handling

### Development Tools
- **ESLint** - Code quality and consistency enforcement
- **PostCSS** - CSS processing and optimization
- **Yarn** - Fast, reliable package management

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Step 1: Clone the Repository
```bash
git clone https://github.com/Kai4632/anivisuals.git
cd ani-visuals
```

### Step 2: Install Dependencies
```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### Step 3: Environment Configuration
```bash
# Copy the example environment file
cp env.example .env
```

Edit the `.env` file with your API credentials:

```env
# Replicate API Key (for AI image generation)
VITE_REPLICATE_API_KEY=your_replicate_api_key_here

# Cloudinary Configuration
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name_here
VITE_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset_here

# Optional Configuration
VITE_MAX_IMAGE_SIZE=10485760
VITE_SUPPORTED_FORMATS=jpg,jpeg,png,webp
```

### Step 4: API Setup

#### Replicate API Setup
1. Visit [Replicate](https://replicate.com/) and create an account
2. Navigate to your API tokens section
3. Generate a new API token
4. Add the token to your `.env` file

#### Cloudinary Setup
1. Create a [Cloudinary](https://cloudinary.com/) account
2. Get your Cloud Name from the dashboard
3. Create an upload preset (set to "Unsigned" for client-side uploads)
4. Add credentials to your `.env` file

For detailed setup instructions, see:
- [AI Setup Guide](./AI_SETUP_GUIDE.md)
- [Cloudinary Setup Guide](./CLOUDINARY_SETUP.md)

### Step 5: Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
ani-visuals/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── Header.tsx      # Navigation header
│   ├── pages/              # Route-based page components
│   │   ├── home/           # Landing page
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   └── anime-generation/ # Main AI feature
│   ├── utils/              # Utility functions
│   │   └── aiHelper.ts     # AI integration and image processing
│   ├── assets/             # Static assets
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── public/                 # Public assets
├── docs/                   # Documentation
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎮 Usage

### Basic Workflow
1. **Upload Image** - Drag and drop or browse for an image file
2. **Choose Style** - Select from pre-built templates or write custom prompts
3. **Generate** - Click "Transform Image" to start AI processing
4. **Download** - Save your generated artwork

### Supported File Formats
- **JPEG** (.jpg, .jpeg)
- **PNG** (.png)
- **WebP** (.webp)

### File Requirements
- **Maximum Size**: 10MB
- **Minimum Resolution**: 256x256 pixels
- **Recommended**: High-quality images for best results

### Prompt Tips
- **Be Specific** - Describe the desired style, mood, and elements
- **Use Keywords** - Include terms like "anime style", "Studio Ghibli", "fantasy"
- **Experiment** - Try different prompts to achieve unique results

## 🔧 Development

### Available Scripts
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors automatically

# Type Checking
npm run type-check   # Run TypeScript compiler check
```

### Development Guidelines
- **TypeScript** - All new code should be written in TypeScript
- **ESLint** - Follow the configured ESLint rules
- **Component Structure** - Use functional components with hooks
- **Styling** - Prefer Tailwind CSS classes over custom CSS
- **Error Handling** - Implement comprehensive error handling

### Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🌟 Key Features Explained

### AI Image Generation
The application uses Replicate's Flux Kontext Pro model for image-to-image transformation. This advanced AI model can:
- Understand complex artistic styles and prompts
- Maintain image composition while applying style transformations
- Generate high-quality, detailed artwork
- Process images in real-time with progress tracking

### Cloudinary Integration
Cloudinary provides:
- **Reliable Uploads** - 99.9% uptime with global CDN
- **Image Optimization** - Automatic format conversion and compression
- **Security** - Secure upload endpoints with validation
- **Scalability** - Handles high-volume image processing

### User Experience
- **Intuitive Interface** - Clean, modern design with smooth animations
- **Responsive Design** - Works seamlessly across all devices
- **Real-time Feedback** - Progress indicators and status updates
- **Error Recovery** - Helpful error messages with troubleshooting tips

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build the project
npm run build

# Deploy the dist folder to Netlify
```

### Environment Variables for Production
Ensure all environment variables are set in your deployment platform:
- `VITE_REPLICATE_API_KEY`
- `VITE_CLOUDINARY_CLOUD_NAME`
- `VITE_CLOUDINARY_UPLOAD_PRESET`

## 📊 Performance

### Optimization Features
- **Code Splitting** - Automatic route-based code splitting
- **Image Optimization** - Automatic image compression and format conversion
- **Lazy Loading** - Components and images load on demand
- **Caching** - Efficient caching strategies for API responses

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## 🔒 Security

### Security Features
- **Environment Variables** - Sensitive data stored securely
- **File Validation** - Comprehensive file type and size validation
- **CORS Protection** - Proper CORS configuration for API calls
- **Error Handling** - No sensitive information exposed in error messages

### Best Practices
- Never commit `.env` files to version control
- Use HTTPS for all API communications
- Validate all user inputs
- Implement rate limiting for API calls

## 🤝 Support & Community

### Getting Help
- **Documentation** - Check the setup guides in the `/docs` folder
- **Issues** - Report bugs and request features on GitHub
- **Discussions** - Join community discussions for help and ideas

### Contributing
We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Replicate** - For providing the AI models and infrastructure
- **Cloudinary** - For reliable image management services
- **React Team** - For the amazing React framework
- **Vite Team** - For the fast build tool
- **Tailwind CSS** - For the utility-first CSS framework

## 📞 Contact

- **GitHub**: [@Kai4632](https://github.com/Kai4632)
- **Project Link**: [https://github.com/Kai4632/anivisuals](https://github.com/Kai4632/anivisuals)

---

<div align="center">

**Made with ❤️ by [Kai4632](https://github.com/Kai4632)**

[![GitHub stars](https://img.shields.io/github/stars/Kai4632/anivisuals?style=social)](https://github.com/Kai4632/anivisuals/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Kai4632/anivisuals?style=social)](https://github.com/Kai4632/anivisuals/network)
[![GitHub issues](https://img.shields.io/github/issues/Kai4632/anivisuals)](https://github.com/Kai4632/anivisuals/issues)

</div>
