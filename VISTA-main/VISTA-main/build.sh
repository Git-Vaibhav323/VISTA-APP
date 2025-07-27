#!/bin/bash

# Exit on any error
set -e

echo "🔧 Installing dependencies..."
npm install --legacy-peer-deps

echo "🔧 Disabling Next.js telemetry..."
npx next telemetry disable

echo "🔨 Building the application..."
npm run build

echo "✅ Build completed successfully!" 