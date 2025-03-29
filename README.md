# FeatherPause

FeatherPause is a mobile application that helps birdwatchers identify and log bird species while promoting conservation efforts.

## Repository Structure

This repository uses a workspace structure with two main components:

- `app/`: The main FeatherPause application *(Closed Source)*
- `conservation/`: Open-source conservation tools *(AGPL-3.0 Licensed)*

## Licensing

This repository contains code under different licenses:

- The `app/` directory contains proprietary closed-source code
- The `conservation/` directory is licensed under the AGPL-3.0 license

The conservation package is also available as a standalone repository at [github.com/Istionia/featherpause-conservation](https://github.com/Istionia/featherpause-conservation).

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Yarn (version 1.22 or higher)
- Expo CLI

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Istionia/featherpause.git
   cd featherpause
   ```

2. Install dependencies:
   ```
   yarn install
   ```

3. Build the conservation package:
   ```
   yarn build:conservation
   ```

4. Start the app:
   ```
   yarn start
   ```

## Development

### Running Tests

```
yarn test
```

### Building Packages

```
yarn build
```

## Contributing

Contributions to the conservation package are welcome! Please see the contributing guidelines in the conservation directory.

## Open Source Conservation Package

The `conservation/` directory contains our open-source conservation tools, licensed under the AGPL-3.0 License. This package is automatically synced to a public repository at [github.com/Istionia/featherpause-conservation](https://github.com/Istionia/featherpause-conservation).

### Why AGPL-3.0?

We chose the AGPL-3.0 license for our conservation tools because:

1. It ensures that any modifications to our conservation algorithms remain open source
2. It closes the "SaaS loophole" by requiring source distribution when used in network services
3. It aligns with our conservation ethics by ensuring transparency and community access

### Contributions

Contributions to the conservation package are welcome! You can contribute directly to the public repository or submit pull requests to this repository.

## License

- The app directory is proprietary and closed-source.
- The conservation directory is licensed under the AGPL-3.0 license - see the LICENSE file in that directory for details. 