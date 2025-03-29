# FeatherPause: AI-Driven Birding App

FeatherPause is an AI-driven birding app for real-time bird identification via audio/visual inputs, emphasizing mindfulness and accessibility.

## Project Structure

This project uses a hybrid licensing approach:
- Main app code (closed-source)
- Conservation package (open-source, AGPLv3) - synced to https://github.com/Istionia/featherpause-conservation

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm start
   ```

This will launch the Expo development server. You can run the app on:
- iOS simulator
- Android emulator
- Physical device using Expo Go
- Web browser

## Development

The app is built with:
- React Native + Expo
- TypeScript
- Supabase for authentication and data storage
- TensorFlow Lite for on-device AI processing

### Conservation Package

The conservation package contains open-source tools including:
- GPS coordinate obfuscation for endangered species
- Conservation status indicators
- Tools for ethical wildlife observation

This package is automatically synced to a public GitHub repository through our CI/CD workflow.

## Features

- **Bird Identification**: Real-time AI identification through photos or audio
- **Sighting Logging**: Track and manage your bird sightings
- **Educational Content**: Learn about different bird species
- **Conservation Tools**: Ethical birding practices and endangered species protection

## Contributing

Contributions to the conservation package are welcome! Please see the contributing guidelines in the conservation directory.

## License

- Main app: Proprietary
- Conservation package: AGPLv3
