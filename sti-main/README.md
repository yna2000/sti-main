# STI Events Mobile App

A cross-platform mobile application for STI Tagum School events check-in system with pay-per-click advertising.

## Features

- Student authentication
- Event browsing and check-in
- Real-time event status
- Pay-per-click advertising system
- Activity tracking and statistics
- Profile management

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, Mac only)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Use Expo Go app on your mobile device to scan the QR code, or run on an emulator:
```bash
npm run android  # for Android
npm run ios     # for iOS (Mac only)
```

## Test Credentials

Use these credentials for testing:

- Student ID: STI001
- Password: test123

## Development Notes

- The app uses React Native with Expo for cross-platform compatibility
- UI components from React Native Paper for Material Design
- AdMob integration for advertisements
- AsyncStorage for local data persistence

## Important

Replace the following before production:
- Add your actual AdMob unit IDs
- Implement proper backend authentication
- Set up a real database for events and user data
- Configure proper API endpoints
