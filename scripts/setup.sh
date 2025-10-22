#!/usr/bin/env bash
set -e

echo "🚀 Setting up the workspace for the Electron project..."

# --- Step 1: Check OS ---
if [[ "$OSTYPE" != "linux-gnu"* ]]; then
  echo "⚠️  This setup script is intended for Linux (Debian/Ubuntu)."
  echo "You can adapt it manually for macOS or Windows."
fi

# --- Step 2: Update system and install required packages ---
echo "🔧 Installing system dependencies..."
sudo apt update -y
sudo apt install -y \
  curl \
  git \
  build-essential \
  libssl-dev \
  libgtk-3-dev \
  libnss3 \
  libxss1 \
  libasound2-dev \
  libx11-xcb-dev \
  libxkbfile-dev \
  g++ \
  make

# --- Step 3: Install Node.js & npm if not present ---
if ! command -v node >/dev/null 2>&1; then
  echo "📦 Installing Node.js (LTS)..."
  curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
  sudo apt install -y nodejs
else
  echo "✅ Node.js already installed: $(node -v)"
fi

echo "✅ npm version: $(npm -v)"

# --- Step 4: Install project dependencies ---
echo "📂 Installing project dependencies..."
if [ -f package-lock.json ]; then
  npm ci
else
  echo "⚠️  No package-lock.json found — using npm install instead..."
  npm install
fi

# --- Step 5: Done! ---
echo ""
echo "✅ Workspace setup complete!"
echo "You can now run the Electron app with:"
echo ""
echo "   npm start"
echo ""
echo "🎉 Enjoy developing your Electron app!"
