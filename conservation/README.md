# FeatherPause Conservation

This package contains open-source conservation tools for the FeatherPause birding app, including:

- GPS coordinate obfuscation for endangered species
- Conservation status indicators
- Tools for ethical wildlife observation

## Installation

```bash
npm install featherpause-conservation
```

Or if you're using yarn:

```bash
yarn add featherpause-conservation
```

## Features

### GPS Obfuscation

Protect sensitive species by hiding their exact location:

```typescript
import { 
  obfuscateCoordinates, 
  ConservationStatus 
} from 'featherpause-conservation';

// Original coordinates
const coordinates = {
  latitude: 37.7749,
  longitude: -122.4194,
};

// Obfuscate coordinates for an endangered species
const obfuscatedCoordinates = obfuscateCoordinates(
  coordinates,
  'Gymnogyps californianus', // California Condor
  ConservationStatus.CRITICALLY_ENDANGERED
);

console.log(obfuscatedCoordinates);
// Output: { latitude: 37.779, longitude: -122.425 } (randomized within ~2km)
```

### Conservation Status Service

Access conservation information for bird species:

```typescript
import { ConservationService } from 'featherpause-conservation';

// Check if a species is endangered
const isEndangered = ConservationService.isEndangered('Gymnogyps californianus');
console.log(isEndangered); // true

// Get the conservation status
const status = ConservationService.getSpeciesStatus('Gymnogyps californianus');
console.log(status); // ConservationStatus.CRITICALLY_ENDANGERED
```

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/Istionia/featherpause-conservation.git
cd featherpause-conservation

# Install dependencies
yarn install

# Build the package
yarn build
```

### Testing

```bash
# Run tests
yarn test
```

## License

This package is licensed under the [GNU Affero General Public License v3.0](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## GitHub Actions Sync

This repository is automatically synchronized with the public [featherpause-conservation](https://github.com/Istionia/featherpause-conservation) repository through GitHub Actions. 