#!/usr/bin/env bash
set -e

echo "🚀 Starting the Electron app in development mode..."

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

# --- Step 3: Start the app ---
echo "⚙️  Running npm start..."
npm start
