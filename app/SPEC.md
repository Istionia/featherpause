# FeatherPause: AI Birding App Specification

## Overview
**Purpose**: A global, AI-driven birding app for real-time bird identification via audio/visual inputs, emphasizing mindfulness and accessibility.  
**Platforms**: iOS, Android (React Native + Expo).  
**Monetization**: Subscription-only ($6.99/month, no free tier).  
**Licensing Model**: Hybrid (closed-source core + selective open-source modules).  

---

## Core Features
### Bird Identification
- **Audio Analysis**: Real-time spectrogram processing (TensorFlow Lite).  
- **Visual Analysis**: Image/video recognition for field marks/posture (MobileNetV3).  
- **Size Tiers**:  
  - **Tiny**: House Sparrow (15 cm)  
  - **Small**: Barn Swallow (17 cm)  
  - **Medium**: Rock Pigeon (32 cm)  
  - **Large**: Osprey (58 cm) *with duck analogy for casual users*  
  - **Very Large**: Great Egret (100 cm)  
  - **Giant**: Mute Swan (150 cm)  
- **Habitat Filtering**: eBird API integration for range-based suggestions.   

### User Workflows
- **Sighting Logging**: GPS-tagged logs with media (photo/audio).  
- **AI Corrections**: Users correct misidentifications to train models.  
- **Offline Mode**: Full functionality except cloud sync.  

### Conservation Protections
- **GPS Obfuscation**: ±500m noise for IUCN Red List species.  
- **Restricted Media Access**: Low-quality snippets for endangered species.  
- **Open-Source Modules**: Ethical birding guidelines, endangered species alert system.  

---

## Architecture
### Tech Stack
- **Frontend**: React Native + Expo (TypeScript).  
- **AI/ML**: TensorFlow Lite (on-device), SageMaker (cloud retraining).  
- **Backend**: Supabase (PostgreSQL, Auth, Storage).  
- **Payments**: Stripe + RevenueCat (closed-source).  
- **Mapping**: Mapbox GL Native.  

### Hybrid Licensing
- **Closed-Source**:  
  - Payment/subscription logic.  
  - Core AI models (audio/visual recognition).  
  - Database schema/sharding strategies.  
- **Open-Source (AGPLv3)**:  
  - Conservation tools (GPS obfuscation algorithm).  
  - Community correction UIs.  
  - Species field mark diagrams.  

### Database Schema
*(Closed-source)*  
```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE,
  is_pro BOOLEAN DEFAULT false,
  stripe_customer_id TEXT
);

-- Sightings
CREATE TABLE sightings (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  species_id INT REFERENCES species(id),
  lat REAL,  -- Obfuscated if endangered
  lon REAL,
  timestamp TIMESTAMPTZ,
  media_urls TEXT[]
);
```

### Sharding Strategy
*(Closed-source)*  
- **Geographic Sharding**: Split `sightings` by `country_code` (ISO 3166).  

---

## Data Handling
### Encryption
- **At Rest**: AES-256 (SQLite/Supabase).  
- **In Transit**: TLS 1.3.  
- **Media**: EXIF stripping via `expo-image-manipulator`.  

### Storage
- **Local**: SQLite (logs), Expo FileSystem (media).  
- **Cloud**: Supabase Storage (public/private buckets).  

### Sync
- **Offline First**: Queue writes when disconnected; sync via Expo BackgroundFetch.  
- **Conflict Resolution**: Timestamp-based "last write wins."  

---

## AI/ML Pipeline
### Training Data
- **Core 200 Species**: Preloaded dataset (iNaturalist, Xeno-Canto).  
- **User Contributions**: Federated learning for model updates.  

### Models
- **Audio**: YAMNet + LSTM (spectrogram analysis).  
- **Visual**: Quantized MobileNetV3 (field marks).  

### Retraining
- Weekly cloud retraining via SageMaker (user corrections aggregated in Supabase).  

---

## UI/UX
### Core Screens
1. **Identify**: Camera/mic input with real-time AI suggestions.  
2. **Logbook**: Grid/filterable list of sightings.  
3. **Learn**: Species guides (cached offline).  
4. **Profile**: Subscription management, corrections history.  

### Accessibility
- **WCAG 2.1**: Contrast ratio ≥7:1, VoiceOver/TalkBack support.  
- **Dynamic Fonts**: Scalable to 200% without breaking UI.  

### Components
- **Size Comparison Slider**:  
  ```jsx
  <SizeSlider
    tiers={[
      { label: "House Sparrow", cm: 15 },
      { label: "Barn Swallow", cm: 17 },
      { label: "Rock Pigeon", cm: 32 },
      { label: "Osprey", cm: 55 },
      { label: "Great Egret", cm: 100 },
      { label: "Mute Swan", cm: 150 }
    ]}
  />
  ```

### Branding
- **Logo**: Barn Swallow mid-flight with feather-pause wingtip.  
- **Color Palette**: Teal (#2F5D62), Terracotta (#D36B00), Lavender (#E6E6FA).  
- **Typography**: Space Grotesk (modern, clean).  

---

## Error Handling
### Common Errors
| **Error**               | **User Feedback**                          | **Action**                          |
|-------------------------|--------------------------------------------|-------------------------------------|
| GPS Failure             | "Enable location services for accurate IDs." | Fallback to manual region select.  |
| AI Timeout              | "Hmm, that took too long. Try moving closer." | Queue for background processing.   |
| Payment Decline         | "Payment failed. Update card in settings."  | Retry with Stripe Smart Retries.    |

### Logging
- **Sentry**: Capture frontend exceptions.  
- **Supabase Logs**: Monitor API/database errors.  

---

## Testing Plan
### Functional Testing
| **Area**              | **Test Cases**                              | **Tools**            |
|-----------------------|---------------------------------------------|----------------------|
| **AI Accuracy**       | Validate ID accuracy against Cornell’s Merlin test suite. | Custom scripts      |
| **Offline Mode**      | Disable Wi-Fi/cellular; test logging/ID.    | Android ADB, Xcode  |
| **Payment Flow**      | Test successful/failed subscriptions.       | Stripe Test Mode     |

### Performance Testing
- **Cold Start**: ≤3s on iPhone SE (2020).  
- **Media Upload**: ≤10s for 10s 720p video (3G).  

### Security Testing
- **OWASP ZAP**: Scan for vulnerabilities.  
- **GDPR Compliance**: Audit data access/deletion workflows.  

---

## Deployment
### Milestones
1. **MVP (8 Weeks)**: Core ID, logging, payments.  
2. **Phase 1 (12 Weeks)**: Social features, advanced AI.  
3. **Phase 2 (16 Weeks)**: Regional modules (Asia songbirds, etc.).  

### App Stores
- **iOS**: TestFlight beta → App Store.  
- **Android**: Firebase App Tester → Play Store.  

---

## Success Metrics
| **Metric**          | **Target** |  
|---------------------|------------|  
| Subscription Rate   | ≥4%        |  
| MAU Retention       | ≥60%       |  
| AI Accuracy         | ≥85%       |  

---

**Next Steps**:  
1. Set up Supabase project with RLS policies.  
2. Implement Stripe CardForm + RevenueCat entitlements.  
3. Train initial TensorFlow Lite models.  
4. Publish open-source modules on GitHub (AGPLv3).  

**Repo Structure**:  
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