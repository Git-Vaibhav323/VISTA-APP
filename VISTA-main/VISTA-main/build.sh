#!/bin/bash

# Exit on any error
set -e

echo "🔧 Installing dependencies..."
npm ci --legacy-peer-deps

echo "🔧 Verifying Next.js installation..."
ls -la node_modules/.bin/next || echo "Next.js not found in node_modules/.bin"

echo "🔧 Checking installed packages..."
npm list --depth=0

echo "🔧 Checking npm scripts..."
npm run --silent

echo "🔨 Building the application..."
npx --yes next build

echo "✅ Build completed successfully!" 