# Ani-Visuals

A React application for generating AI images using OpenAI's DALL-E. This project uses Cloudinary for image uploads and OpenAI's DALL-E 3 for AI-powered image generation.

## Features

- 🎨 AI-powered image generation with DALL-E 3
- ☁️ Cloudinary integration for reliable image uploads
- 🖼️ Support for multiple image formats (JPEG, PNG, WebP)
- 📱 Responsive design with Tailwind CSS
- ⚡ Fast development with Vite

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ani-visuals
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` with your API keys (see [Cloudinary Setup Guide](./CLOUDINARY_SETUP.md))

4. **Start development server**
   ```bash
   npm run dev
   ```

## Setup Guides

- [Cloudinary Setup Guide](./CLOUDINARY_SETUP.md) - Complete guide for setting up Cloudinary image uploads
- [AI Setup Guide](./AI_SETUP_GUIDE.md) - Guide for setting up AI image generation

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Image Uploads**: Cloudinary
- **AI Generation**: OpenAI (DALL-E 3)
- **Routing**: React Router DOM

## Development

This project uses Vite for fast development and building. The ESLint configuration is set up for TypeScript and React development.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
