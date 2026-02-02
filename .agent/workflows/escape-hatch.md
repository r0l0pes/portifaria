---
description: Hard escape hatch for the refactor
---

# Refactor Escape Hatch

If the refactor goes south or becomes too complex to manage without breaking the core functionality:

1. **Abort everything.**
2. **Delete the branch:**
   ```bash
   git checkout main
   git branch -D refactor/agent-run
   ```
3. **Zero consequences.** No rebasing, no cherry-picking.
