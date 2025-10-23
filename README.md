# AeroTrack AI Frontend ✈️

A modern, responsive frontend application for AeroTrack AI - a predictive aircraft maintenance scheduling platform powered by Google Cloud Vertex AI.

## 🚀 Features

- **Real-time Dashboard**: Monitor aircraft status and maintenance schedules with live data
- **AI Chatbot**: Intelligent flight management assistant powered by Google Cloud AI
- **Maintenance Scheduling**: Schedule and track aircraft maintenance with dropdown controls
- **Flight Tracking**: Live flight monitoring and tracking capabilities
- **User Management**: Complete user profile, settings, notifications, and preferences
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI/UX**: Clean, professional interface with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Deployment**: Vercel Ready

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher
- Google Cloud Dialogflow credentials

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/VIDITJAIN7/AeroTrackAI.git
cd AeroTrackAI/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the environment template and configure your variables:

```bash
cp env.template .env.local
```

Update `.env.local` with your configuration:

```env
# Google Cloud Dialogflow Configuration
GOOGLE_APPLICATION_CREDENTIALS=./credentials/dialogflow-service-account.json
DIALOGFLOW_CX_PROJECT_ID=your-project-id
DIALOGFLOW_CX_LOCATION=global
DIALOGFLOW_CX_AGENT_ID=your-agent-id
DIALOGFLOW_LANGUAGE_CODE=en-US

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── chat/              # Chat page
│   ├── flights/           # Flights page
│   ├── maintenance/       # Maintenance page
│   ├── settings/          # Settings page
│   └── ...
├── components/            # React components
│   ├── chat/              # Chat components
│   ├── dashboard/         # Dashboard components
│   ├── layout/            # Layout components
│   ├── maintenance/       # Maintenance components
│   └── user/              # User components
├── contexts/              # React contexts
├── lib/                   # Utility functions
└── ...
```

## 🚀 Deployment

### Vercel Deployment

This project is configured for seamless deployment on Vercel:

1. **Connect to Vercel**: Link your GitHub repository to Vercel
2. **Configure Environment Variables**: Add your environment variables in Vercel dashboard
3. **Deploy**: Automatic deployment on every push to main branch

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run preview` - Build and preview production

## 🎨 UI Components

- **Fixed Headers**: Non-scrolling headers for better navigation
- **Dropdown Controls**: Interactive status and maintenance type dropdowns
- **Floating Chat**: Resizable AI chatbot interface
- **Responsive Tables**: Mobile-friendly data tables
- **Animated Counters**: Smooth number animations on dashboard

## 🔐 Security

- Environment variables for sensitive data
- Secure API routes
- Input validation and sanitization
- HTTPS ready

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Cloud Vertex AI for AI capabilities
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for beautiful icons

---

**AeroTrack AI** - Transforming aircraft maintenance through AI-powered predictions ✈️