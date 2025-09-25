# Sariputra Frontend 🕉️

**Wisdom from the Teachings of Siddhartha Gautama and Maitreya**

This is the frontend React application for Sariputra, a wisdom-seeking platform based on the profound teachings of Siddhartha Gautama (the historical Buddha) and Maitreya (the future Buddha).

## ✨ Features

- 🎯 **Ask Questions**: Submit questions and receive wisdom-based guidance
- 🕉️ **Spiritual Wisdom**: Responses rooted in the teachings of Siddhartha and Maitreya
- 📱 **Responsive Design**: Beautiful, mobile-first interface
- 🔐 **User Authentication**: Account creation and secure login
- 📚 **Question History**: Track your spiritual journey over time
- 🎨 **Modern UI**: Built with React and Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/buddha-maitreya/Sariputra-frontend.git
cd Sariputra-frontend

# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at `http://localhost:3000`

## 🔧 Configuration

Create a `.env` file in the root directory:

```env
# Backend API URL
REACT_APP_API_URL=http://localhost:5000/api

# Production settings (optional)
GENERATE_SOURCEMAP=false
```

## 📦 Build for Production

```bash
# Create production build
npm run build

# Serve build locally (optional)
npx serve -s build
```

## 🌐 Deployment

### Render (Recommended)

1. **Connect Repository** to Render
2. **Create Static Site** with these settings:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
   - **Environment Variables**:
     ```
     REACT_APP_API_URL=https://your-backend-url.onrender.com/api
     GENERATE_SOURCEMAP=false
     CI=false
     ```

### Other Platforms

The app can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 🛠️ Tech Stack

- **React** 18 - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Context API** - State management for authentication

## 📚 Project Structure

```
src/
├── components/         # Reusable React components
│   └── Navbar.js      # Navigation component
├── pages/             # Page components
│   ├── Home.js        # Homepage
│   ├── About.js       # About page
│   ├── Ask.js         # Question submission
│   ├── Features.js    # Features showcase
│   ├── Login.js       # User login
│   ├── Register.js    # User registration
│   ├── Dashboard.js   # User dashboard
│   ├── History.js     # Question history
│   └── Contact.js     # Contact page
├── utils/             # Utility functions
│   ├── api.js         # API client setup
│   └── AuthContext.js # Authentication context
├── App.js             # Main app component
├── index.js           # App entry point
└── index.css          # Global styles
```

## 🕉️ About Sariputra

Sariputra was one of Buddha's principal disciples, renowned for his wisdom and ability to explain complex dharma concepts clearly. This application honors his legacy by making the profound teachings of Siddhartha Gautama and Maitreya accessible to modern seekers.

## 🔗 Related Repositories

- **Backend API**: [Sariputra-backend](https://github.com/buddha-maitreya/Sariputra-backend)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

*"The mind is everything. What you think you become." - Siddhartha Gautama*