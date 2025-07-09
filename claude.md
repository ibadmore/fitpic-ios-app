1. First think through the problem, read the codebase for relevant files, and write a plan to [tasks/todo.md].
2. The plan should have a list of todo items that you can check off as you complete them
3. Before you begin working, check in with me and I will verify the plan.
4. Then, begin working on the todo items, marking them as complete as you go.
5. Please every step of the way just give me a high level explanation of what changes you made
6. Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
7. Finally after every major task or phase completion:
   a. Add a review section to the [tasks/todo.md] file with a summary of the changes you made and any other relevant information (max of 250 characters)
   b. **AUTOMATICALLY commit and push to GitHub using these commands:**
      - `git add .` (stage all changes)
      - `git commit -m "Brief descriptive message of what was completed"`
      - `git push origin main` (push to main branch)
   c. Use commit messages that clearly describe the work completed (e.g. "Fix navigation bugs", "Add user authentication", "Update styling for mobile")
   d. Always run these git commands after completing any major task, file modification, or bug fix

## Automatic Commit Guidelines:
- **When to commit**: After completing any todo item, fixing bugs, adding features, or updating documentation
- **Commit message format**: Use present tense, be descriptive but concise (e.g. "Add mobile responsive design", "Fix login authentication error")
- **Always commit**: Never skip the git commands - every change should be tracked in version control
- **Check status first**: Before committing, you may run `git status` to see what files have changed