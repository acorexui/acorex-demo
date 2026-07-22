#!/bin/bash

# ------------------------------------------------------------------
# Script: Manual Push GitLab (Internal) -> GitHub (Public)
# Description: Pushes local changes or internal branches to GitHub safely.
#              Does NOT use force push to prevent overwriting public history.
# Usage: Run manually when you want to publish internal work.
# ------------------------------------------------------------------

# --- Configuration ---
SOURCE_REMOTE="internal"    # GitLab
DEST_REMOTE="origin"        # GitHub

echo "🚀 Starting Manual Upload: GitLab -> GitHub"
echo "------------------------------------------"

# 1. Fetch latest changes from GitLab (Internal)
echo "📥 Fetching updates from GitLab..."
git fetch $SOURCE_REMOTE --prune

# 2. Loop through ALL remote branches on GitLab and push to GitHub
# We grep for branches starting with the source remote name, excluding HEAD.
REMOTE_BRANCHES=$(git branch -r | grep "$SOURCE_REMOTE/" | grep -v 'HEAD')

for branch in $REMOTE_BRANCHES; do
    # Remove the remote prefix (e.g., 'internal/feature-1' -> 'feature-1')
    branch_name=${branch#$SOURCE_REMOTE/}
    
    echo "🔄 Processing branch: $branch_name"
    
    # Attempt a standard push (Safe Push)
    # Syntax: git push [remote] [local_ref]:[remote_ref]
    # Here we push the tracking branch from 'internal' directly to 'origin'
    git push $DEST_REMOTE "$branch:refs/heads/$branch_name" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        echo "   ✅ OK: $branch_name synced to GitHub."
    else
        echo "   ⚠️  SKIPPED: $branch_name (Rejected). You might need to pull/merge first."
    fi
done

# 3. Push Tags
echo "🏷️  Pushing tags..."
git push $DEST_REMOTE --tags 2>/dev/null

echo "------------------------------------------"
echo "🎉 Operation Complete."
