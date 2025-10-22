#!/usr/bin/env bash
set -e

echo "🏗️  Building the Electron app for distribution..."

# --- Step 1: Check Node.js ---
if ! command -v node >/dev/null 2>&1; then
  echo "❌ Node.js is not installed. Please run ./setup.sh first."
  exit 1
fi

# --- Step 2: Install dependencies if needed ---
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm ci
fi

# --- Step 3: Clean old builds ---
if [ -d "dist" ]; then
  echo "🧹 Cleaning previous builds..."
  rm -rf dist
fi

# --- Step 4: Run the build command ---
echo "⚙️  Running electron-builder..."
if npm run build; then
  echo "✅ Build completed successfully!"
  echo ""
  echo "📦 Distributables available in the 'dist/' directory."
else
  echo "❌ Build failed."
  exit 1
fi
