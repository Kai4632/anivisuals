# Cloudinary Setup Guide

This guide will help you set up Cloudinary to replace Imgur for image uploads in the ani-visuals application.

## Why Cloudinary?

Cloudinary offers several advantages over Imgur for this use case:

- **Better API reliability**: More stable upload endpoints
- **Image transformations**: Built-in image optimization and transformations
- **Better security**: More granular access controls
- **CDN**: Global content delivery network for faster image loading
- **Analytics**: Better insights into image usage

## Authentication Methods

Cloudinary supports two main authentication methods:

### Method 1: Client-Side Upload (Current Implementation)

- **Pros**: No backend required, simpler setup
- **Cons**: Less secure, upload preset is visible in client code
- **Required**: Cloud Name + Upload Preset

### Method 2: Server-Side Upload (More Secure)

- **Pros**: More secure, API credentials hidden from client
- **Cons**: Requires backend server
- **Required**: Cloud Name + API Key + API Secret

**Note**: The current implementation uses Method 1 (client-side). If you prefer Method 2, you'll need to set up a backend server.

## Step 1: Create a Cloudinary Account

1. Go to [Cloudinary's website](https://cloudinary.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Get Your Cloudinary Credentials

After signing up, you'll find your credentials in the Dashboard:

### For Client-Side Uploads (Current Setup)

1. **Cloud Name**: This is your unique cloud identifier

   - Found in the Dashboard under "Account Details"
   - Example: `my-cloud-name`

2. **Upload Preset**: You need to create an upload preset
   - Go to Settings → Upload
   - Scroll down to "Upload presets"
   - Click "Add upload preset"
   - Set "Signing Mode" to "Unsigned" (for client-side uploads)
   - Save the preset name

### For Server-Side Uploads (Alternative)

1. **Cloud Name**: Same as above
2. **API Key**: Found in Dashboard under "Account Details"
3. **API Secret**: Found in Dashboard under "Account Details"

## Step 3: Update Environment Variables

1. Copy the `.env.example` file to `.env`:

   ```bash
   cp .env.example .env
   ```

2. **For Client-Side Uploads** (current setup):

   ```env
   # Replicate Configuration (for AI image generation)
   VITE_REPLICATE_API_KEY=your_replicate_api_key_here

   # Cloudinary Configuration (for client-side uploads)
   VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name_here
   VITE_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset_here

   # Optional: Additional configuration
   VITE_MAX_IMAGE_SIZE=10485760
   VITE_SUPPORTED_FORMATS=jpg,jpeg,png,webp
   ```

3. **For Server-Side Uploads** (if you set up a backend):

   ```env
   # Replicate Configuration (for AI image generation)
   VITE_REPLICATE_API_KEY=your_replicate_api_key_here

   # Cloudinary Configuration (for server-side uploads)
   VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name_here
   VITE_CLOUDINARY_API_KEY=your_cloudinary_api_key_here
   VITE_CLOUDINARY_API_SECRET=your_cloudinary_api_secret_here

   # Optional: Additional configuration
   VITE_MAX_IMAGE_SIZE=10485760
   VITE_SUPPORTED_FORMATS=jpg,jpeg,png,webp
   ```

4. Replace the placeholder values with your actual credentials.

## Step 4: Test the Setup

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Try uploading an image through the anime generation feature
3. Check the browser's developer console for any errors
4. Verify that images are being uploaded to your Cloudinary account

## Step 5: Configure Cloudinary Settings (Optional)

### Upload Preset Configuration

For better security and control, you can configure your upload preset:

1. **Folder Structure**: Set a folder for uploads (e.g., `ani-visuals/uploads`)
2. **Allowed Formats**: Restrict to image formats only
3. **File Size Limits**: Set maximum file size
4. **Transformations**: Add automatic image optimizations

### Example Upload Preset Settings:

- **Folder**: `ani-visuals/uploads`
- **Allowed formats**: `jpg,jpeg,png,webp`
- **Max file size**: 10MB
- **Auto-optimization**: Enable

## Security Considerations

### Client-Side Uploads (Current)

1. **Upload Preset Security**: Use unsigned uploads for client-side uploads
2. **File Validation**: The application validates file types and sizes
3. **Environment Variables**: Never commit your `.env` file to version control
4. **Rate Limiting**: Cloudinary has rate limits on free accounts

### Server-Side Uploads (More Secure)

1. **API Credentials**: Keep API key and secret on your server only
2. **Signed Uploads**: Use signed uploads for better security
3. **Server Validation**: Validate files on the server before upload

## Troubleshooting

### Common Issues:

1. **"Cloudinary Cloud Name not found"**

   - Check that `VITE_CLOUDINARY_CLOUD_NAME` is set correctly
   - Verify the cloud name in your Cloudinary dashboard

2. **"Cloudinary Upload Preset not found"**

   - Ensure the upload preset exists and is set to "Unsigned"
   - Check that `VITE_CLOUDINARY_UPLOAD_PRESET` matches exactly

3. **Upload fails with 400 error**

   - Verify the upload preset is configured for unsigned uploads
   - Check that the file format is supported
   - Ensure the file size is within limits

4. **CORS errors**
   - Cloudinary handles CORS automatically for uploads
   - If you see CORS errors, check your browser's network tab for the actual error

### Debug Mode

To enable debug logging, add this to your `.env` file:

```env
VITE_DEBUG=true
```

## Migration from Imgur

If you were previously using Imgur:

1. **Remove old environment variables**:

   - Remove `VITE_IMGUR_CLIENT_ID` from your `.env` file

2. **Update any hardcoded references**:

   - The code has been updated to use Cloudinary
   - No additional changes needed in the application code

3. **Test thoroughly**:
   - Upload new images to ensure they work with Cloudinary
   - Check that the anime generation still works correctly

## Cost Considerations

- **Free Tier**: 25 GB storage, 25 GB bandwidth per month
- **Paid Plans**: Start at $89/month for higher limits
- **Pay-as-you-go**: Available for additional usage beyond free tier

For most personal projects, the free tier should be sufficient.

## Support

If you encounter issues:

1. Check the [Cloudinary documentation](https://cloudinary.com/documentation)
2. Review the error messages in the browser console
3. Verify your environment variables are set correctly
4. Test with a simple image upload first
