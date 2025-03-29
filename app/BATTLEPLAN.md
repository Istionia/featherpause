# FeatherPause: AI Birding App Development Blueprint

## High-Level Development Blueprint

### Phase 1: Foundation & Core Architecture
1. Project structure and configuration
2. UI framework and navigation
3. Authentication system
4. Database schema and local storage

### Phase 2: Core Features
1. Camera and audio recording 
2. Sighting logging functionality
3. Offline mode implementation
4. Basic bird identification system

### Phase 3: Advanced Features
1. Full AI implementation with TensorFlow Lite
2. User correction system
3. Conservation features (GPS obfuscation, etc.)
4. eBird API integration for habitat filtering 

### Phase 4: Educational & Subscription
1. Educational components
2. Subscription and payment processing
3. Advanced UX enhancements
4. Performance optimizations

### Phase 5: Polishing & Launch
1. Accessibility improvements
2. Security audits
3. Testing and quality assurance
4. App store preparation

Now, let's break these phases down into smaller, iterative chunks.

## Detailed Development Steps

### Phase 1: Foundation & Core Architecture

#### 1. Project Structure and Configuration (1 week)
- Set up monorepo structure with app/ and conservation/ packages
- Create clear separation between closed-source app and open-source conservation package
- Configure ESLint, TypeScript, and testing frameworks for both packages
- Set up environment variables and configuration management
- Create basic CI/CD pipeline
- Implement error tracking with Sentry
- Set up GitHub Actions to sync conservation package to a public repository

#### 2. UI Framework and Navigation (2 weeks)
- Implement design system with brand colors and typography
- Create core UI components (buttons, inputs, cards)
- Set up React Navigation with tab structure
- Create placeholder screens for main sections
- Implement responsive layouts and theming

#### 3. Authentication System (1 week)
- Set up Supabase authentication
- Create login/signup screens
- Implement secure session management
- Build user profile management
- Create protected routes for authenticated users

#### 4. Database Schema and Local Storage (2 weeks)
- Set up Supabase project and tables
- Implement SQLite local database
- Create data models and repositories
- Set up Row Level Security policies
- Implement basic data synchronization

### Phase 2: Core Features

#### 1. Camera and Audio Recording (2 weeks)
- Implement camera functionality with Expo Camera
- Create audio recording with Expo AV
- Build UI for capturing photos and recording audio
- Implement media storage and management
- Create preview and review components

#### 2. Sighting Logging (2 weeks)
- Implement GPS location services
- Create sighting form with metadata fields
- Build media attachment handling
- Create sighting list and detail views
- Implement filtering and search functionality

#### 3. Offline Mode (2 weeks)
- Enhance local storage capabilities
- Implement sync queue for offline changes
- Create background sync functionality
- Build conflict resolution system
- Implement offline indicators and UX

#### 4. Basic Bird Identification (3 weeks)
- Set up TensorFlow Lite environment
- Implement basic image identification
- Create audio processing foundation
- Build identification results UI
- Implement size comparison slider component

### Phase 3: Advanced Features

#### 1. Full AI Implementation (3 weeks)
- Enhance TensorFlow Lite integration
- Implement spectrogram processing for audio
- Create full visual recognition system
- Build model versioning and updates
- Implement confidence scoring

#### 2. User Correction System (2 weeks)
- Create correction UI for misidentifications
- Implement correction data collection
- Build correction history view
- Set up data pipeline for retraining
- Create correction analytics

#### 3. Conservation Features (1 week)
- Implement GPS obfuscation for endangered species
- Create restricted media access controls
- Build conservation status indicators
- Implement ethical birding guidelines
- Create endangered species alerts

#### 4. eBird API Integration (2 weeks)
- Set up eBird API client
- Implement location-based species filtering
- Create range and migration visualization
- Build seasonal probability filtering
- Implement caching for offline use

### Phase 4: Educational & Subscription

#### 1. Educational Components (2 weeks)
- Create species guides with caching
- Implement tutorials for beginners
- Build species spotlight feature
- Create contextual tips based on location
- Implement bird call library

#### 2. Subscription System (2 weeks)
- Integrate Stripe payment processing
- Set up RevenueCat for subscription management
- Create subscription screens
- Implement entitlement checking
- Build subscription analytics

#### 3. Advanced UX Enhancements (1 week)
- Implement animations and transitions
- Create onboarding flow
- Build notifications system
- Enhance visual feedback
- Implement haptic feedback

#### 4. Performance Optimizations (1 week)
- Optimize app startup time
- Reduce memory usage
- Improve battery efficiency
- Optimize network requests
- Reduce app size

### Phase 5: Polishing & Launch

#### 1. Accessibility Improvements (1 week)
- Implement WCAG 2.1 standards
- Add screen reader support
- Create dynamic font scaling
- Implement keyboard navigation
- Test with accessibility tools

#### 2. Security Audits (1 week)
- Conduct OWASP security review
- Test encryption implementation
- Verify secure data handling
- Check GDPR compliance
- Implement security logging

#### 3. Testing and QA (2 weeks)
- Implement end-to-end testing
- Conduct usability testing
- Perform cross-device testing
- Validate offline functionality
- Test edge cases and error recovery

#### 4. App Store Preparation (1 week)
- Create app store listings
- Prepare screenshots and videos
- Set up beta testing distribution
- Implement crash reporting
- Prepare marketing materials

Now, let's break these down into more detailed steps that are appropriately sized for implementation.

## Granular Development Steps

### Phase 1A: Project Structure & Configuration

1. Create directory structure with app, api, and ml folders
2. Set up ESLint and Prettier configuration
3. Configure TypeScript with appropriate settings
4. Set up Jest for testing with React Native Testing Library
5. Create GitHub Actions workflow for CI/CD
6. Set up environment variable management
7. Configure Sentry for error tracking
8. Create comprehensive README with setup instructions
9. Implement error boundary components
10. Set up versioning strategy

### Phase 1B: UI Framework & Core Components

1. Create theme provider with brand colors
2. Set up typography with Space Grotesk font
3. Build button component with variants
4. Create input components with validation
5. Implement card and list item components
6. Build loading and error state components
7. Create icon system with common icons
8. Implement responsive layout utilities
9. Build form components and validation
10. Create unit tests for all core components

### Phase 1C: Navigation Structure

1. Set up React Navigation with bottom tabs
2. Create stack navigators for each main section
3. Implement authentication flow navigation
4. Build navigation header with branding
5. Create screen transitions and animations
6. Set up deep linking configuration
7. Implement back button handling
8. Create navigation types and interfaces
9. Build placeholder screens for main sections
10. Add navigation testing

### Phase 1D: Authentication System

1. Configure Supabase client
2. Create user table with proper schema
3. Set up Row Level Security policies
4. Build login screen and functionality
5. Implement signup flow with validation
6. Create password reset functionality
7. Set up secure token storage
8. Implement authentication context provider
9. Create protected route components
10. Build user profile screen

### Phase 1E: Database Schema & Models

1. Create species table in Supabase
2. Set up sightings table with relations
3. Implement database migration strategy
4. Create TypeScript interfaces for models
5. Build repository pattern for data access
6. Implement CRUD operations for sightings
7. Create query functions with filtering
8. Set up data validation utilities
9. Implement error handling for database operations
10. Add unit tests for data access layer

### Phase 1F: Local SQLite Storage

1. Set up SQLite database connection
2. Create table schemas matching Supabase
3. Implement database versioning
4. Build repository classes for local data
5. Create data synchronization foundation
6. Implement transaction support
7. Add migration capabilities
8. Create storage utilities for media files
9. Implement error recovery mechanisms
10. Add unit tests for local storage

### Phase 2A: Camera Implementation

1. Set up camera permissions handling
2. Create camera preview component
3. Implement photo capture functionality
4. Build camera settings controls
5. Create flash and focus controls
6. Implement EXIF data stripping
7. Build media file management
8. Create photo review screen
9. Implement retake functionality
10. Add unit tests for camera components

### Phase 2B: Audio Recording

1. Set up microphone permissions
2. Create audio recording UI
3. Implement recording start/stop functionality
4. Build audio visualization component
5. Create playback controls
6. Implement audio format conversion
7. Build audio file management
8. Create audio review component
9. Implement re-record functionality
10. Add unit tests for audio components

### Phase 2C: Identification Screen

1. Create tab interface for photo/audio modes
2. Build camera/audio component integration
3. Implement capture button and UI
4. Create loading state for processing
5. Build initial results display
6. Implement mock identification service
7. Create confidence level indicator
8. Build species information display
9. Implement error handling for identification
10. Add unit tests for identification screen

### Phase 2D: Sighting Form

1. Create sighting form component
2. Implement species selection with search
3. Build date and time picker
4. Create location input with GPS
5. Implement notes and tags input
6. Build media attachment handling
7. Create form validation
8. Implement submission handling
9. Build edit functionality for existing sightings
10. Add unit tests for sighting form

### Phase 2E: Location Services

1. Implement location permission handling
2. Create current location detection
3. Build reverse geocoding for location names
4. Implement map preview component
5. Create location selection interface
6. Build location caching for offline use
7. Implement accuracy controls
8. Create location utilities and formatting
9. Build error handling for location services
10. Add unit tests for location components

### Phase 2F: Logbook Implementation

1. Create logbook main screen
2. Implement sighting list view
3. Build grid view alternative
4. Create filtering and sorting controls
5. Implement search functionality
6. Build sighting detail view
7. Create sighting edit and delete options
8. Implement pagination or infinite scroll
9. Build empty and loading states
10. Add unit tests for logbook components

### Phase 2G: Basic Sync Mechanism

1. Create sync service architecture
2. Implement connectivity detection
3. Build sync queue for changes
4. Create background sync functionality
5. Implement conflict resolution
6. Build sync status indicators
7. Create manual sync trigger
8. Implement error handling for sync
9. Build sync history and logging
10. Add unit tests for sync functionality

### Phase 3A: TensorFlow Lite Setup

1. Add TensorFlow Lite dependencies
2. Create model loading utilities
3. Implement image preprocessing
4. Build inference wrapper for images
5. Create audio processing foundation
6. Implement basic spectrogram generation
7. Build model version management
8. Create fallbacks for limited devices
9. Implement performance monitoring
10. Add unit tests for TensorFlow integration

### Phase 3B: Visual Recognition

1. Implement full image preprocessing pipeline
2. Create field mark detection logic
3. Build species recognition from images
4. Implement confidence scoring
5. Create similar species comparison
6. Build visual recognition service
7. Implement caching for recognition results
8. Create performance optimizations
9. Build error handling and fallbacks
10. Add unit tests for visual recognition

### Phase 3C: Audio Recognition

1. Implement audio preprocessing pipeline
2. Create spectrogram generation
3. Build bird call analysis system
4. Implement pattern matching for calls
5. Create confidence scoring for audio
6. Build audio recognition service
7. Implement caching for recognition results
8. Create performance optimizations
9. Build error handling and fallbacks
10. Add unit tests for audio recognition

### Phase 3D: User Correction System

1. Create correction UI after identification
2. Implement species selection for corrections
3. Build correction submission handling
4. Create correction history view
5. Implement correction data collection
6. Build correction analytics
7. Create gamification elements
8. Implement batch correction submission
9. Build admin review tools
10. Add unit tests for correction system

### Phase 3E: Size Comparison Slider

1. Create size comparison slider component
2. Implement size tier visualization
3. Build interactive size comparison
4. Create species examples for each tier
5. Implement animation for size changes
6. Build size context explanations
7. Create accessibility enhancements
8. Implement custom sizing for edge cases
9. Build responsive layout adaptations
10. Add unit tests for size slider

### Phase 3F: GPS Obfuscation

1. Create conservation status detection
2. Implement GPS obfuscation algorithm
3. Build deterministic noise generation
4. Create conservation information display
5. Implement different obfuscation levels
6. Build admin override capabilities
7. Create testing utilities for obfuscation
8. Implement obfuscation indicators
9. Build documentation for obfuscation
10. Add unit tests for GPS obfuscation

### Phase 3G: eBird API Integration

1. Create eBird API client
2. Implement nearby sightings retrieval
3. Build species range checking
4. Create seasonal probability filtering
5. Implement caching for API responses
6. Build location-based filtering
7. Create migration visualization
8. Implement offline fallbacks
9. Build error handling for API
10. Add unit tests for eBird integration

### Phase 4A: Species Guides

1. Create species guide component
2. Implement guide navigation
3. Build species search and filtering
4. Create species detail view
5. Implement offline caching for guides
6. Build media management for guides
7. Create similar species comparison
8. Implement conservation information
9. Build taxonomic browsing
10. Add unit tests for species guides

### Phase 4B: Educational Features

1. Create bird of the day feature
2. Implement tutorial system
3. Build contextual tips based on location
4. Create quiz functionality
5. Implement bird call library
6. Build field mark visualization
7. Create learning progress tracking
8. Implement favorites and bookmarks
9. Build notification system for education
10. Add unit tests for educational features

### Phase 4C: Stripe Integration

1. Add Stripe SDK dependencies
2. Create payment service
3. Implement card input form
4. Build payment processing
5. Create receipt generation
6. Implement error handling for payments
7. Build retry mechanism
8. Create payment history
9. Implement webhook handling
10. Add unit tests for payment functionality

### Phase 4D: RevenueCat Integration

1. Add RevenueCat SDK
2. Create subscription service
3. Implement entitlement checking
4. Build subscription UI
5. Create subscription management
6. Implement trial functionality
7. Build subscription analytics
8. Create subscription restoration
9. Implement receipt validation
10. Add unit tests for subscription system

### Phase 5A: Accessibility Implementation

1. Audit contrast ratios across app
2. Implement screen reader support
3. Create dynamic font scaling
4. Build keyboard navigation
5. Implement focus indicators
6. Create alternative inputs
7. Build accessible forms
8. Implement reduced motion options
9. Create accessibility documentation
10. Add accessibility testing

### Phase 5B: Performance Optimization

1. Profile and optimize app startup
2. Implement code splitting
3. Create asset optimization
4. Build memory usage monitoring
5. Implement battery optimization
6. Create network request batching
7. Build cache management
8. Implement image optimization
9. Create bundle size reduction
10. Add performance testing

### Phase 5C: Security Implementation

1. Conduct security audit
2. Implement secure storage
3. Create API security enhancements
4. Build data sanitization
5. Implement rate limiting
6. Create security logging
7. Build breach detection
8. Implement GDPR compliance tools
9. Create data deletion utilities
10. Add security testing

### Phase 5D: App Store Preparation

1. Create app icons and splash screens
2. Build app store screenshots
3. Create promotional video
4. Implement TestFlight configuration
5. Build Play Store setup
6. Create release notes template
7. Implement version management
8. Build automated deployment
9. Create marketing materials
10. Add final quality testing

Now that we have a detailed breakdown of the development steps, let's create a series of prompts for a code-generation LLM to implement each major component in a test-driven manner.

## LLM Code Generation Prompts

### Prompt 1: Project Structure Setup

```
For the FeatherPause birding app, set up the project structure building on the existing Expo project. The app needs a clean, organized directory structure based on the specification.

Requirements:
1. Create the following directory structure:
   featherpause/
├── closed/                      # Proprietary code (closed source)
│   ├── app/                     # React Native frontend
│   │   ├── components/          # Proprietary UI components
│   │   ├── screens/             # App screens
│   │   ├── navigation/          # Navigation configuration
│   │   ├── services/            # Business logic and services
│   │   ├── utils/               # Utility functions
│   │   ├── hooks/               # Custom React hooks
│   │   ├── contexts/            # React contexts
│   │   ├── assets/              # Static assets
│   │   └── types/               # TypeScript type definitions
│   ├── api/                     # Supabase Edge Functions
│   └── ml/                      # TensorFlow Lite models
├── open/                        # Open-source code (AGPLv3)
│   ├── conservation/            # GPS obfuscation, CoC tools
│   │   ├── components/          # Conservation-related components
│   │   ├── services/            # Conservation services
│   │   └── utils/               # Conservation utilities
│   └── ui-components/           # Community correction UIs
│       ├── components/          # Open-source UI components  
│       ├── hooks/               # Open-source hooks
│       └── utils/               # Open-source utilities
└── SPEC.md                      # Project specification
   ```

2. Configure ESLint with React Native best practices
3. Set up Prettier for consistent code formatting
4. Configure Jest for testing with React Native Testing Library
5. Create TypeScript configuration with strict type checking
6. Set up a basic error boundary component
7. Create a README with project overview and setup instructions
8. Configure Sentry for error tracking (provide just the setup, not implementation)

Provide the necessary configuration files and folder structure creation commands. For any dependencies that need to be installed, include the exact npm/yarn commands.
```

### Prompt 2: UI Theme and Core Components

```
For the FeatherPause app, implement the UI theme and core components based on the brand guidelines. These components will serve as the foundation for the entire application UI.

Requirements:
1. Create a theme provider using the brand colors:
   - Teal (#2F5D62)
   - Terracotta (#D36B00)
   - Lavender (#E6E6FA)

2. Set up typography with Space Grotesk font:
   - Configure Expo Font loading
   - Create typography styles for different text variants

3. Implement the following core components with appropriate variants:
   - Button (primary, secondary, outline, text)
   - Input (text, number, password with show/hide toggle)
   - Card (for sightings, species info)
   - ListItem (for sightings list)
   - IconButton (for actions)
   - Badge (for conservation status, etc.)
   - Spinner (loading indicator)
   - ErrorDisplay (for showing errors)

4. Create a responsive layout system with:
   - Container component for consistent padding
   - Grid system or flex utilities
   - Responsive spacing helpers

5. Write unit tests for all components using React Native Testing Library

Each component should be properly typed with TypeScript, include accessibility attributes, and follow the brand styling. Ensure components are exported from a central index file for easy imports.
```

### Prompt 3: Navigation Structure

```
For the FeatherPause app, implement the navigation structure using React Navigation. The app should have the four main tabs specified in the requirements, with appropriate stack navigators for nested screens.

Requirements:
1. Set up React Navigation v6+ with:
   - Bottom tab navigator for main app sections
   - Stack navigators for each tab section
   - Authentication flow handling

2. Create the following navigation structure:
   - AuthNavigator (for login/signup/reset password)
   - MainNavigator (containing the tabs below)
     - IdentifyNavigator (camera/audio identification screens)
     - LogbookNavigator (sightings list, detail, filtering)
     - LearnNavigator (species guides, educational content)
     - ProfileNavigator (user settings, subscription management)

3. Implement a consistent header across the app with:
   - FeatherPause logo/name
   - Back button where appropriate
   - Action buttons based on screen context

4. Create navigation types using TypeScript for type-safe navigation:
   - Define route params for each screen
   - Create navigator parameter lists

5. Build placeholder screen components for:
   - Identify screen
   - Logbook screen
   - Learn screen
   - Profile screen
   - Login/Signup screens

6. Implement navigation testing with Jest

Make sure to use proper typing throughout the navigation implementation and to handle the authentication state appropriately (showing auth screens when not logged in, main app when logged in).
```

### Prompt 4: Supabase Authentication

```
For the FeatherPause app, implement the authentication system using Supabase. The app will use email/password authentication with secure token storage.

Requirements:
1. Set up Supabase client configuration:
   - Create a services/supabase.ts file for client initialization
   - Implement proper environment variable handling for API keys
   - Add types for Supabase responses

2. Create the following authentication screens:
   - Login screen with email/password
   - Signup screen with validation
   - Password reset screen

3. Implement an AuthContext using React Context API:
   - Store authentication state (loading, user, error)
   - Provide login, signup, logout, and reset functions
   - Handle auth state persistence

4. Create secure token storage using Expo SecureStore:
   - Save session tokens securely
   - Implement auto-refresh for expired tokens
   - Clear tokens on logout

5. Build protected route components:
   - Create an AuthGuard component for protected screens
   - Redirect to login when not authenticated
   - Show loading state during auth check

6. Implement error handling for authentication:
   - Display user-friendly error messages
   - Handle network failures gracefully
   - Provide retry mechanisms

7. Write unit tests for:
   - Authentication service functions
   - Auth context providers
   - Protected route components

Ensure all components use consistent styling from the UI theme created earlier and follow accessibility best practices.
```

### Prompt 5: Database Schema and Repositories

```
For the FeatherPause app, implement the database schema in Supabase and create TypeScript repository classes for data access. This will form the foundation for the app's data layer.

Requirements:
1. Create SQL migration scripts for the following tables:
   - users (as specified in the schema)
   - species (with name, iucn_status, avg_length_cm)
   - sightings (with user_id, species_id, lat, lon, timestamp, media_urls)

2. Set up Row Level Security (RLS) policies:
   - Users can only read/write their own sightings
   - Species data is readable by all authenticated users
   - User data is only accessible to the user themselves

3. Implement TypeScript interfaces for all data models:
   - User interface
   - Species interface (including IUCN status enum)
   - Sighting interface with all properties

4. Create repository classes for data access:
   - SpeciesRepository with functions for fetching species data
   - SightingsRepository with CRUD operations
   - UserRepository for user profile management

5. Add filtering and query capabilities:
   - Filter sightings by date range
   - Search species by name
   - Filter sightings by species
   - Sort sightings by different criteria

6. Implement data validation utilities:
   - Validate sighting data before submission
   - Check required fields
   - Validate coordinate data

7. Write unit tests for:
   - Repository functions
   - Data validation utilities
   - Query building functions

All database operations should be properly typed, and the repositories should use consistent error handling patterns.
```

### Prompt 6: Local SQLite Storage

```
For the FeatherPause app, implement the local SQLite storage system that will enable offline functionality. This needs to mirror the Supabase database structure while providing local persistence.

Requirements:
1. Set up SQLite database using Expo SQLite:
   - Create a database connection manager
   - Implement database initialization and versioning
   - Create table schemas matching Supabase structure

2. Build a DatabaseService class with:
   - Functions to create and upgrade database schema
   - Transaction support for multi-operation processes
   - Error handling and recovery mechanisms

3. Create repository classes for local data:
   - LocalSpeciesRepository for species data
   - LocalSightingsRepository for sightings CRUD
   - Methods should mirror the Supabase repositories

4. Implement data synchronization foundation:
   - Create a SyncQueue class for tracking changes
   - Add status flags to local records (new, updated, synced)
   - Implement timestamp-based tracking for sync

5. Build local storage for media files:
   - Create utilities for saving images to FileSystem
   - Implement functions for storing audio recordings
   - Add cleanup mechanisms for unused media

6. Create data export/import capabilities:
   - Functions to export sightings to JSON
   - Import functionality for restoring data
   - Backup utilities for user data

7. Implement error handling:
   - Recovery from database corruption
   - Handling disk-full scenarios
   - Transaction rollback on failure

8. Write comprehensive unit tests for:
   - Database initialization and upgrade
   - Local repository functions
   - Media storage utilities
   - Error recovery scenarios

Ensure all database operations are properly typed and follow consistent patterns with the Supabase repositories.
```

### Prompt 7: Camera and Photo Capture

```
For the FeatherPause app, implement the camera functionality for bird photo capture. This will be used in the Identify screen to take photos for AI identification.

Requirements:
1. Create a Camera component using Expo Camera:
   - Implement permission handling for camera access
   - Create camera preview with proper styling
   - Add capture button and shutter animation
   - Implement flash toggling (on/off/auto)
   - Add front/back camera switching

2. Build camera controls UI:
   - Exposure adjustment
   - Focus controls (tap to focus)
   - Zoom level adjustment
   - Grid overlay toggle

3. Implement photo capture logic:
   - Capture high-quality images for processing
   - Create thumbnail generation for previews
   - Strip EXIF data using expo-image-manipulator
   - Save photos to FileSystem with proper organization

4. Create a PhotoPreview component:
   - Display captured photo with options
   - Add retake functionality
   - Implement accept/continue flow
   - Show loading state during processing

5. Build a CameraService for business logic:
   - Handle camera initialization
   - Manage photo processing
   - Coordinate with identification service
   - Handle errors and fallbacks

6. Implement responsive layout for different devices:
   - Adjust UI for various screen sizes
   - Handle orientation changes
   - Adapt controls for one-handed use

7. Add accessibility features:
   - Voice commands for capture (if possible)
   - Haptic feedback
   - Clear instructions for screen readers

8. Write unit and integration tests for:
   - Camera component rendering
   - Photo capture flow
   - Preview component functionality
   - File handling utilities

Ensure the camera implementation follows the app's design language and provides a smooth user experience with proper feedback at each step.
```

### Prompt 8: Audio Recording for Bird Calls

```
For the FeatherPause app, implement audio recording functionality for capturing bird calls. This will be used in the Identify screen as an alternative to photo identification.

Requirements:
1. Create an AudioRecorder component using Expo AV:
   - Implement permission handling for microphone
   - Build recording controls (start, stop, pause)
   - Create visual feedback during recording
   - Add timer display showing recording length
   - Implement recording quality options

2. Build an audio visualization component:
   - Display real-time waveform or spectrogram
   - Provide visual feedback on audio levels
   - Create an appealing, responsive visualization
   - Ensure performance on lower-end devices

3. Implement audio playback functionality:
   - Controls for playing recorded audio
   - Progress indicator during playback
   - Volume adjustment
   - Loop option for repeated listening

4. Create audio processing utilities:
   - Convert to appropriate format for AI processing
   - Generate spectrograms for analysis
   - Implement noise reduction (if feasible)
   - Create audio metadata extraction

5. Build an AudioService for business logic:
   - Handle recording state management
   - Process audio for identification
   - Manage audio file storage
   - Coordinate with identification service

6. Implement file management:
   - Save recordings with appropriate naming
   - Create folder structure for organization
   - Handle storage limitations
   - Implement cleanup for old/unused recordings

7. Add accessibility features:
   - Haptic feedback for recording events
   - Visual indicators for audio events
   - Clear instructions for screen readers

8. Write unit and integration tests for:
   - Audio recording component
   - Visualization accuracy
   - Playback functionality
   - Audio processing utilities

The audio recording interface should be intuitive and provide clear feedback to users about the recording process and quality.
```

### Prompt 9: Identify Screen Integration

```
For the FeatherPause app, implement the Identify screen that integrates both camera and audio recording functionality. This is the main screen where users will capture bird photos or sounds for identification.

Requirements:
1. Create the Identify screen with a tab interface to switch between:
   - Photo identification (camera)
   - Audio identification (audio recorder)

2. Implement a unified capture flow:
   - Common UI elements for both capture methods
   - Consistent feedback and loading states
   - Shared results display system

3. Build a capture guidance system:
   - Instructional overlays for first-time users
   - Tips for getting better identification results
   - Context-aware suggestions based on time/location

4. Create a mock IdentificationService:
   - Simulate AI processing with realistic delays
   - Return mock results with varying confidence
   - Include multiple possible species in results
   - Vary response times to test loading states

5. Implement the results display component:
   - Show identified species with confidence level
   - Display alternative possibilities
   - Show size comparison information
   - Include conservation status indicators

6. Build the correction interface:
   - Allow users to confirm or correct identification
   - Provide species selection for corrections
   - Implement submission of corrections

7. Create a history of recent identifications:
   - Save recent identifications locally
   - Allow quick access to recent results
   - Enable converting identifications to sightings

8. Implement error handling for identification:
   - Handle timeout scenarios
   - Manage low-confidence results
   - Provide fallbacks for processing failures

9. Write comprehensive tests for:
   - Screen rendering and tab switching
   - Capture flow integration
   - Results display with various data
   - Error state handling

The Identify screen should provide a seamless experience regardless of which identification method the user chooses, with clear guidance and feedback throughout the process.
```

### Prompt 10: Size Comparison Slider

```
For the FeatherPause app, implement the Size Comparison Slider component as specified in the requirements. This will help users understand the relative size of identified birds.

Requirements:
1. Create a SizeSlider component that visualizes the size tiers:
   - House Sparrow (15 cm)
   - Barn Swallow (17 cm)
   - Rock Pigeon (32 cm)
   - Osprey (55 cm)
   - Great Egret (100 cm)
   - Mute Swan (150 cm)

2. Implement the slider with:
   - Proportional visual representation of sizes
   - Clear labeling of each reference bird
   - Current selection indicator
   - Smooth transitions between selections

3. Build interactive functionality:
   - Allow sliding between different sizes
   - Provide haptic feedback on selection changes
   - Animate transitions between size comparisons
   - Snap to predefined size tiers

4. Create a detailed view mode:
   - Show additional information about reference birds
   - Display silhouettes for visual comparison
   - Include brief context about each size category
   - Allow toggling between basic and detailed views

5. Implement sizing calculation utilities:
   - Convert between different measurement units
   - Place arbitrary bird sizes within the appropriate tier
   - Calculate relative size percentages

6. Make the component fully accessible:
   - Support screen readers with appropriate labels
   - Implement keyboard navigation
   - Add high-contrast mode
   - Include textual size descriptions

7. Create responsive layouts:
   - Adapt to different screen sizes
   - Support both portrait and landscape orientations
   - Scale appropriately on tablets

8. Write unit tests for:
   - Component rendering with different props
   - Interaction and selection behavior
   - Sizing calculation utilities
   - Accessibility features

The Size Comparison Slider should be visually appealing while providing valuable context about bird sizes in an intuitive way.
```

### Prompt 11: Sighting Form Implementation

```
For the FeatherPause app, implement the sighting form that allows users to log bird observations. This form will be used both for manual entries and for saving identifications from the Identify screen.

Requirements:
1. Create a SightingForm component with fields for:
   - Bird species (searchable selection)
   - Date and time (with date/time picker)
   - Location (GPS coordinates with map preview)
   - Notes (multiline text input)
   - Photos/audio attachments
   - Conservation status indicator (read-only, based on species)

2. Implement form validation:
   - Required field validation
   - GPS coordinate validation
   - Date/time validation (no future dates)
   - File type and size validation for attachments

3. Build a species selection component:
   - Searchable dropdown of bird species
   - Recent/common species quick selection
   - Recent/common species quick selection
   - Grouping by taxonomy or habitat
   - Indicators for conservation status

4. Create a location picker component:
   - Current GPS location with accuracy indicator
   - Manual map selection alternative
   - Reverse geocoding for location names
   - Recent locations quick selection

5. Implement media attachment handling:
   - Photo thumbnail previews
   - Audio playback controls
   - Adding multiple attachments
   - Removing individual attachments

6. Build submission handling:
   - Save to local database
   - Queue for sync to Supabase when online
   - Handle submission errors gracefully
   - Show success confirmation

7. Create an edit mode for existing sightings:
   - Load existing data into form
   - Track changes for partial updates
   - Allow canceling edits
   - Confirm before discarding changes

8. Implement a review screen before submission:
   - Summary of all entered information
   - Final preview of media
   - Confirmation button
   - Edit option to go back

9. Write comprehensive tests for:
   - Form validation logic
   - Submission handling
   - Edit functionality
   - UI rendering with different data

The sighting form should be intuitive and efficient, guiding users through the process while allowing for both quick entries and detailed documentation.
```

### Prompt 12: Logbook Implementation

```
For the FeatherPause app, implement the Logbook screen that displays the user's bird sightings with filtering, search, and detail view functionality.

Requirements:
1. Create a Logbook screen with two view options:
   - Grid view with photo thumbnails
   - List view with more detailed information

2. Implement filtering capabilities:
   - Date range selection (calendar picker)
   - Species filter (multiple selection)
   - Location filter (radius or region)
   - Conservation status filter

3. Build a search functionality:
   - Full-text search across species names and notes
   - Recent searches history
   - Search suggestions as you type
   - Clear search button

4. Create a SightingListItem component:
   - Display species name
   - Show date, time, and location
   - Include thumbnail of primary photo if available
   - Add conservation status indicator
   - Show sync status (synced/pending)

5. Implement a SightingDetail screen:
   - Full species information
   - All sighting details (date, time, location)
   - Map view of location
   - Gallery of all attached photos
   - Audio playback for recordings
   - Edit and delete options
   - Share functionality

6. Build sorting options:
   - Newest first (default)
   - Oldest first
   - Alphabetical by species
   - Conservation status priority

7. Implement pagination or infinite scrolling:
   - Load items in batches for performance
   - Show loading indicator for more items
   - Maintain scroll position when returning to list

8. Create empty states and loading indicators:
   - First-time user empty state with guidance
   - Empty search results state
   - Loading skeleton for list items
   - Pull-to-refresh functionality

9. Write tests for:
   - List rendering and pagination
   - Filter and search functionality
   - Sorting operations
   - Detail view rendering

The Logbook should provide a satisfying way to browse and search through sightings while maintaining performance even with large numbers of entries.
```

### Prompt 13: Offline Sync Implementation

```
For the FeatherPause app, implement the offline synchronization system that enables full offline functionality with eventual consistency when connectivity is restored.

Requirements:
1. Create a SyncService with the following capabilities:
   - Track local changes in a queue
   - Detect network connectivity changes
   - Perform bidirectional synchronization
   - Handle conflict resolution

2. Implement a sync queue using SQLite:
   - Store pending changes with timestamps
   - Track entity types and operation types
   - Store original and new values for conflict resolution
   - Include retry count and status

3. Build a background sync mechanism:
   - Use Expo BackgroundFetch for periodic sync
   - Implement exponential backoff for retries
   - Create notification for sync completion/failures
   - Track sync statistics

4. Implement conflict resolution:
   - Use timestamp-based "last write wins" strategy
   - Store conflict history for user review
   - Provide manual resolution for critical conflicts
   - Handle different entity types appropriately

5. Create a sync status UI:
   - Indicator for sync status in the app header
   - Detailed sync history in settings
   - Manual sync trigger button
   - Progress indicator during active sync

6. Build media synchronization:
   - Queue large media files separately
   - Implement chunked upload for large files
   - Add compression options for slower connections
   - Prioritize metadata sync over media

7. Implement error handling:
   - Capture and log sync errors
   - Create recovery strategies for different error types
   - Add user notification for persistent errors
   - Implement data integrity verification

8. Write comprehensive tests for:
   - Queue management
   - Conflict resolution scenarios
   - Network error handling
   - Background sync timing

The sync system should be robust and transparent to the user, maintaining data integrity while providing clear feedback about the sync status.
```

### Prompt 14: TensorFlow Lite Integration

```
For the FeatherPause app, implement the TensorFlow Lite integration for on-device bird identification using both visual and audio inputs.

Requirements:
1. Set up TensorFlow Lite in the React Native environment:
   - Add necessary dependencies
   - Configure native modules
   - Create a TensorFlow service wrapper

2. Implement model loading and management:
   - Handle model initialization
   - Support model versioning
   - Implement lazy loading for performance
   - Add model update mechanism

3. Create image preprocessing for visual identification:
   - Resize images to required dimensions
   - Apply normalization
   - Handle different color spaces
   - Implement cropping and centering

4. Build audio preprocessing for call identification:
   - Generate spectrograms from audio
   - Apply filtering and normalization
   - Create windowing for continuous audio
   - Implement feature extraction

5. Create an inference service:
   - Run model inference on preprocessed inputs
   - Parse and structure results
   - Calculate confidence scores
   - Handle multiple potential matches

6. Implement result post-processing:
   - Apply confidence thresholds
   - Filter results by geographic likelihood
   - Group similar species
   - Format results for display

7. Build performance optimization:
   - Implement model quantization support
   - Create thread management for inference
   - Add caching for repeated lookups
   - Support hardware acceleration when available

8. Create mock/fallback identification:
   - Provide dummy results when models unavailable
   - Implement graceful degradation for older devices
   - Add example identifications for testing

9. Write tests for:
   - Preprocessing functions
   - Result handling
   - Model management
   - Performance benchmarking

For this phase, use small placeholder models that demonstrate the flow, with hooks for later integration of full models.
```

### Prompt 15: Conservation Features

```
For the FeatherPause app, implement the conservation features that help protect sensitive bird species, including GPS obfuscation and media access controls.

Requirements:
1. Create a ConservationService with:
   - IUCN Red List status lookup and caching
   - Conservation status definitions and display
   - Regional endangerment data integration
   - Conservation information display

2. Implement GPS obfuscation for endangered species:
   - Add ±500m randomized noise to coordinates
   - Apply different levels based on conservation status
   - Create deterministic obfuscation for consistency
   - Add indicators when coordinates are obfuscated

3. Build restricted media access controls:
   - Reduce quality of sensitive species media
   - Apply watermarks to protected species images
   - Limit sharing options for endangered species
   - Create educational messaging about protection

4. Implement ethical birding guidelines:
   - Create guidelines screen with best practices
   - Add contextual tips during identification
   - Implement seasonal awareness (breeding season warnings)
   - Create reminders about approaching wildlife

5. Build conservation status indicators:
   - Create status badges with IUCN categories
   - Add tooltips explaining conservation status
   - Implement color coding for different statuses
   - Create detailed conservation information view

6. Create conservation alerts:
   - Notify when rare or endangered species identified
   - Provide specific handling guidance
   - Add reporting options for conservation organizations
   - Include educational information

7. Implement conservation data management:
   - Create update mechanism for conservation data
   - Build offline caching of status information
   - Add versioning for conservation database
   - Implement periodic refresh of status data

8. Write comprehensive tests for:
   - Obfuscation algorithm
   - Status determination logic
   - Media restriction handling
   - Alert triggering rules

The conservation features should be unobtrusive but effective, educating users while protecting sensitive species data.
```

### Prompt 16: eBird API Integration

```
For the FeatherPause app, implement the eBird API integration for habitat filtering and range-based suggestions to improve identification accuracy.

Requirements:
1. Create an eBirdService with:
   - API client configuration
   - Authentication handling
   - Rate limiting management
   - Error handling and retry logic

2. Implement functions to retrieve:
   - Recent nearby observations
   - Region-specific species lists
   - Seasonal occurrence data
   - Hotspots in user's vicinity

3. Build habitat filtering for identification:
   - Use location to filter likely species
   - Apply seasonal probabilities to results
   - Boost confidence for expected species
   - Reduce confidence for out-of-range species

4. Create a caching system for eBird data:
   - Store regional data for offline use
   - Implement time-based cache invalidation
   - Prioritize frequently accessed data
   - Manage cache size for storage efficiency

5. Implement a data visualization component:
   - Show species range maps
   - Display migration patterns when available
   - Create seasonal abundance charts
   - Show recent sightings on map

6. Build an optional data contribution system:
   - Allow users to opt-in to sharing sightings with eBird
   - Create data formatting for eBird compatibility
   - Implement submission API calls
   - Add attribution and links to eBird

7. Create a fallback system for offline or API failure:
   - Use cached data when API unavailable
   - Implement graceful degradation of features
   - Provide clear feedback about data freshness
   - Add manual refresh options

8. Write tests for:
   - API client functionality
   - Caching mechanisms
   - Habitat filtering accuracy
   - Offline fallback behavior

Ensure the eBird integration enhances the app experience without becoming a critical dependency, allowing core functionality even when the API is unavailable.
```

### Prompt 17: Learn Screen and Educational Content

```
For the FeatherPause app, implement the Learn screen with educational content about birds, species guides, and birding tips.

Requirements:
1. Create a Learn screen with sections for:
   - Species guides (browsable catalog)
   - Birding tips and techniques
   - Conservation information
   - Quizzes and learning activities

2. Implement a species guide component:
   - Searchable species database
   - Detailed species information pages
   - High-quality images with field marks highlighted
   - Audio samples of calls when available
   - Range maps and habitat information
   - Conservation status and trends

3. Build a "Bird of the Day" feature:
   - Daily rotating featured species
   - Interesting facts and information
   - Notification option for daily birds
   - Historic calendar of previous featured birds

4. Create educational content on birding:
   - Beginner guides to birdwatching
   - Equipment recommendations
   - Habitat identification help
   - Seasonal birding tips
   - Ethical guidelines

5. Implement an offline caching system:
   - Download species guides for offline use
   - Manage storage usage with user controls
   - Queue content updates when online
   - Track downloaded content

6. Build interactive learning features:
   - Bird identification quizzes
   - Call recognition practice
   - Field mark flashcards
   - Progress tracking for learning activities

7. Create contextual learning integration:
   - Connect identification results with learning content
   - Suggest relevant guides based on recent sightings
   - Provide quick links to similar species
   - Add seasonal content based on migration patterns

8. Write tests for:
   - Content rendering and navigation
   - Search and filtering functionality
   - Offline content access
   - Interactive feature behavior

The Learn screen should be engaging and educational, providing value to birders of all experience levels while maintaining the app's clean, intuitive design.
```

### Prompt 18: Subscription and Payment Processing

```
For the FeatherPause app, implement the subscription system using Stripe and RevenueCat for the $6.99/month subscription-only model.

Requirements:
1. Set up Stripe integration:
   - Create Stripe client configuration
   - Implement secure API key handling
   - Build payment processing service
   - Create webhook handling for events

2. Implement RevenueCat for subscription management:
   - Configure RevenueCat SDK
   - Set up product and pricing in dashboard
   - Create entitlement checking service
   - Implement receipt validation

3. Build subscription UI:
   - Create subscription screen with benefits explanation
   - Implement payment form with Stripe Elements
   - Build subscription success confirmation
   - Create loading and error states

4. Implement subscription management:
   - Show current subscription status
   - Allow updating payment method
   - Enable cancellation workflow
   - Add subscription renewal information

5. Create entitlement checking system:
   - Verify subscription status for features
   - Handle grace periods for expired subscriptions
   - Create offline entitlement caching
   - Implement receipt restoration

6. Build analytics for subscriptions:
   - Track conversion rates
   - Monitor renewal and churn
   - Create retention reporting
   - Implement subscription funnel analysis

7. Implement error handling:
   - Create user-friendly payment error messages
   - Build retry logic for failed payments
   - Implement graceful degradation on service issues
   - Add support contact for payment problems

8. Write comprehensive tests for:
   - Payment processing flow
   - Subscription status checking
   - UI rendering in different states
   - Error handling scenarios

The subscription system should be seamless and transparent, clearly communicating the value proposition while making the payment process as frictionless as possible.
```

### Prompt 19: Accessibility Implementation

```
For the FeatherPause app, implement comprehensive accessibility features to ensure the app is usable by people with various disabilities, following WCAG 2.1 standards.

Requirements:
1. Implement screen reader support:
   - Add proper accessibility labels to all components
   - Create meaningful descriptions for images and icons
   - Ensure logical navigation order
   - Add announcements for state changes

2. Create high contrast mode:
   - Implement alternative color scheme with 7:1 contrast ratio
   - Ensure text legibility on all backgrounds
   - Add border indicators for interactive elements
   - Create testing utilities for contrast checking

3. Implement dynamic font scaling:
   - Support system font size settings up to 200%
   - Ensure UI doesn't break with larger text
   - Create responsive layouts for different text sizes
   - Test with extreme font size settings

4. Build keyboard and switch control support:
   - Implement focus management
   - Create visible focus indicators
   - Ensure all functionality is available without gestures
   - Add keyboard shortcuts where appropriate

5. Implement reduced motion options:
   - Create alternative animations or transitions
   - Respect system-level reduced motion setting
   - Ensure critical functionality works without animation
   - Test with animation disabled

6. Create alternative input methods:
   - Support voice commands where feasible
   - Implement alternative gesture options
   - Add switch control compatibility
   - Ensure operation with assistive technologies

7. Build accessibility testing infrastructure:
   - Create automated accessibility checks
   - Implement manual testing procedures
   - Add accessibility reporting in development
   - Create accessibility documentation

8. Write tests focused on accessibility:
   - Screen reader announcement verification
   - Keyboard navigation testing
   - Color contrast validation
   - Dynamic text sizing tests

The accessibility implementation should be thorough and integrated throughout the app, making it truly usable by people with a wide range of abilities.
```

### Prompt 20: Performance Optimization

```
For the FeatherPause app, implement performance optimizations to ensure the app runs smoothly on a wide range of devices, paying special attention to startup time and resource usage.

Requirements:
1. Optimize app startup time:
   - Implement code splitting and lazy loading
   - Prioritize critical UI rendering
   - Defer non-essential initialization
   - Meet ≤3s cold start target on iPhone SE (2020)

2. Improve list rendering performance:
   - Implement virtualized lists
   - Add item recycling for long lists
   - Optimize image loading in lists
   - Create efficient rendering for frequent updates

3. Enhance image and media handling:
   - Implement progressive image loading
   - Create efficient caching strategy
   - Add image resizing based on viewport
   - Optimize media memory usage

4. Optimize TensorFlow operations:
   - Implement model quantization
   - Create efficient threading model
   - Add computation batching where appropriate
   - Optimize tensor operations

5. Improve battery efficiency:
   - Reduce background operations
   - Optimize location services usage
   - Implement efficient sync scheduling
   - Add battery-aware feature degradation

6. Enhance network efficiency:
   - Implement request batching
   - Add compression for network transfers
   - Create efficient caching headers
   - Optimize API request frequency

7. Reduce app size:
   - Optimize asset sizes
   - Implement on-demand resources where possible
   - Remove unused code and dependencies
   - Create asset variant selection based on device

8. Implement performance monitoring:
   - Add performance tracking
   - Create performance regression testing
   - Implement real user monitoring
   - Add performance logging for critical paths

The performance optimizations should maintain the app's functionality and design while ensuring it runs well even on older or resource-constrained devices.
```

### Prompt 21: Testing Infrastructure

```
For the FeatherPause app, implement a comprehensive testing infrastructure to ensure quality and reliability throughout the development process.

Requirements:
1. Set up unit testing with Jest:
   - Configure Jest for React Native
   - Create test utilities and helpers
   - Implement snapshot testing
   - Set up mocks for external dependencies

2. Implement component testing:
   - Use React Native Testing Library
   - Create component render tests
   - Implement interaction testing
   - Add accessibility testing

3. Set up integration testing:
   - Create end-to-end test flows
   - Implement critical path testing
   - Add API integration tests
   - Create database interaction tests

4. Build UI testing with Detox:
   - Configure Detox for E2E testing
   - Implement screen flow tests
   - Create device interaction simulation
   - Add cross-platform test cases

5. Implement performance testing:
   - Create startup time benchmarks
   - Add memory usage tests
   - Implement rendering performance tests
   - Build battery usage monitoring

6. Set up continuous integration:
   - Configure GitHub Actions workflow
   - Implement automated test runs
   - Create pull request checks
   - Add code coverage reporting

7. Build test data generation:
   - Create test data factories
   - Implement seeding utilities
   - Add mock service responses
   - Create realistic test scenarios

8. Implement testing documentation:
   - Create testing standards document
   - Add test writing guidelines
   - Implement test result reporting
   - Create testing dashboard

The testing infrastructure should be comprehensive but maintainable, focusing on critical functionality while providing good coverage across the application.
```

### Prompt 22: App Store Preparation

```
For the FeatherPause app, prepare all necessary assets and configurations for submission to the iOS App Store and Google Play Store.

Requirements:
1. Create app store assets:
   - App icons in all required sizes
   - Splash screens for various devices
   - Screenshots for different devices
   - Feature graphic for Play Store
   - App preview videos

2. Write store listings:
   - App description (short and full versions)
   - Feature bullet points
   - Keywords for search optimization
   - What's new text for updates
   - Privacy policy document

3. Configure app signing:
   - Generate and manage certificates for iOS
   - Create keystore for Android signing
   - Implement CI/CD signing process
   - Document signing credentials securely

4. Set up beta distribution:
   - Configure TestFlight for iOS
   - Set up Firebase App Distribution for Android
   - Create beta tester groups
   - Implement beta feedback collection

5. Implement app review guidelines compliance:
   - Ensure App Store guidelines adherence
   - Check Play Store policy compliance
   - Address common rejection reasons
   - Create review notes for reviewers

6. Configure analytics and monitoring:
   - Set up crash reporting
   - Implement usage analytics
   - Create performance monitoring
   - Set up alert thresholds

7. Prepare for launch:
   - Create marketing materials
   - Build social media assets
   - Implement app rating prompts
   - Create press kit for promotion

8. Document release process:
   - Create release checklist
   - Build version management strategy
   - Implement staged rollout plan
   - Create post-launch monitoring procedures

All store assets should showcase the app's key features while adhering to platform guidelines and maintaining the FeatherPause brand identity.
```

These prompts provide a comprehensive, step-by-step approach to building the FeatherPause app. Each prompt builds on previous work and focuses on implementing specific features in a test-driven manner. The prompts prioritize best practices, incremental progress, and early testing while ensuring there are no big jumps in complexity at any stage.

Following this plan will result in a high-quality, feature-complete birding app that meets all the requirements specified in the project brief.