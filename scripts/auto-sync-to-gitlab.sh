#!/bin/bash

# ------------------------------------------------------------------
# Script: Auto Sync GitHub (Source) -> GitLab (Mirror)
# Description: Fetches from GitHub and Force Pushes to GitLab.
#              Fixed: Ignores HEAD to prevent "invalid name" error.
# ------------------------------------------------------------------

# --- Configuration ---
SOURCE_REMOTE="origin"
DEST_REMOTE="internal"
DEST_URL="https://gitlab.demisco.com/acorex/acorex-demo.git" # آدرس SSH توصیه می‌شود، یا HTTPS

# --- Smart Log Path ---
if [ -w "/var/log" ]; then
    LOG_FILE="/var/log/git-sync.log"
else
    LOG_FILE="$(pwd)/git-sync.log"
fi

log() {
    echo "$1" | tee -a "$LOG_FILE"
}

# Ensure log file exists
touch "$LOG_FILE" 2>/dev/null

log "------------------------------------------------"
log "⏰ Sync Started at $(date)"

# 1. Setup Remote if missing
if ! git remote | grep -q "$DEST_REMOTE"; then
    log "⚙️  Remote '$DEST_REMOTE' not found. Adding it..."
    git remote add $DEST_REMOTE $DEST_URL
fi

# 2. Fetch from GitHub
log "📥 Fetching from GitHub ($SOURCE_REMOTE)..."
git fetch $SOURCE_REMOTE --prune 2>&1 | tee -a "$LOG_FILE"

# 3. FIX: Remove 'origin/HEAD' reference locally
# This prevents the script from trying to push 'HEAD' as a branch, 
# which causes the "You cannot create a branch with an invalid name" error.
git remote set-head $SOURCE_REMOTE --delete 2>/dev/null

# 4. Mirror to GitLab
log "📤 Mirroring to GitLab ($DEST_REMOTE)..."

# Push all remote branches from origin to local heads on internal
git push $DEST_REMOTE "refs/remotes/$SOURCE_REMOTE/*:refs/heads/*" --force 2>&1 | tee -a "$LOG_FILE"

# Push tags
git push $DEST_REMOTE --tags --force 2>&1 | tee -a "$LOG_FILE"

# 5. Check Status
if [ ${PIPESTATUS[0]} -eq 0 ]; then
  log "✅ Sync Success."
else
  log "❌ Sync Failed. Check logs above."
  log "👉 TIP: If 'pre-receive hook declined', Unprotect branches in GitLab Settings."
fi
