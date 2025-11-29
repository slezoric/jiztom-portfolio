#!/bin/bash
# Cross-platform setup script for macOS and Linux
# This script automates the initial setup for the portfolio project

set -e  # Exit on error

echo "🚀 Setting up Jiztom's Portfolio..."
echo ""

# Check if Bun is installed
if ! command -v bun &> /dev/null; then
    echo "📦 Bun not found. Installing Bun..."
    curl -fsSL https://bun.sh/install | bash
    
    # Add Bun to PATH for this session
    export PATH="$HOME/.bun/bin:$PATH"
    
    echo "✅ Bun installed successfully!"
    echo ""
    echo "⚠️  Please add this line to your shell profile (~/.zshrc or ~/.bash_profile):"
    echo "   export PATH=\"\$HOME/.bun/bin:\$PATH\""
    echo ""
else
    echo "✅ Bun is already installed: $(bun --version)"
fi

# Check Node.js version if using nvm
if command -v nvm &> /dev/null; then
    echo "📌 Using nvm to set Node.js version..."
    nvm use
    echo "✅ Node.js version: $(node --version)"
fi

echo ""
echo "📚 Installing project dependencies..."
bun install

echo ""
echo "✅ Setup complete!"
echo ""
echo "📖 Next steps:"
echo "   1. Start the dev server: bun run dev"
echo "   2. Open http://localhost:8080 in your browser"
echo "   3. Edit config at: src/config/portfolio-config.ts"
echo ""
