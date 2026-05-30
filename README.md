# Modern UI Website Clone

A modern, responsive website clone of akankshadigitalolutions.in built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Working contact form, portfolio filtering, navigation
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## Getting Started

### Prerequisites

- A GitHub account
- A Git repository for your website

### Setup Instructions

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it appropriately (e.g., `akanksha-digital-solutions-clone`)
   - Initialize with README (optional)

2. **Push Your Files**
   ```bash
   # Initialize git
   git init
   
   # Add remote repository
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # Add all files
   git add .
   
   # Commit changes
   git commit -m "Initial commit: Modern website clone"
   
   # Push to GitHub
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** > **Pages**
   - Under "Build and deployment", select **GitHub Actions** as the source
   - Click **Save**

4. **Wait for Deployment**
   - The GitHub Actions workflow will automatically run
   - Check the **Actions** tab to see deployment progress
   - Once complete, your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Manual Deployment (Alternative)

If GitHub Actions isn't working, you can deploy manually:

1. **Create gh-pages branch**
   ```bash
   git checkout --orphan gh-pages
   git add .
   git commit -m "Deploy to gh-pages"
   git push -u origin gh-pages
   ```

2. **Enable Pages from gh-pages branch**
   - Repository Settings > Pages
   - Source: Select "Deploy from a branch"
   - Branch: Select "gh-pages"
   - Folder: "/ (root)"
   - Save

## Website Features

### Sections
- **Hero Section**: Welcome message with countdown timer
- **About Us**: Company information and key features
- **Services**: Six service offerings with icons
- **Portfolio**: Filterable project showcase
- **Clients**: Client logos and testimonials
- **Team**: Team member profiles
- **Contact**: Working contact form

### Interactive Elements
- Smooth scrolling navigation
- Mobile-responsive menu
- Portfolio filtering by category
- Working contact form with success notifications
- Animated countdown timer
- Hover effects on all interactive elements

### Technical Details
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and animations
- **JavaScript**: Interactive functionality
- **Bootstrap 5**: Responsive framework
- **Font Awesome**: Icon library
- **Google Fonts**: Typography

## Customization

### Brand Colors
Primary: `#6366f1` (Indigo)
Secondary: `#764ba2` (Purple)
Accent: `#ff6b6b` (Coral)

### Images
The website uses placeholder images from Picsum Photos. Replace with your own images by updating the `src` attributes in the HTML file.

### Content
Edit the text content directly in the HTML file to match your specific needs.

## Troubleshooting

### GitHub Pages Deployment Issues

1. **Permission Errors**: Ensure your repository has the correct permissions
2. **Build Failures**: Check the Actions tab for detailed error messages
3. **404 Errors**: Verify your repository name and branch settings

### Local Testing

Open the `modern-ui-website-clone.html` file directly in your web browser to test locally.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For issues or questions, please open an issue in the GitHub repository.