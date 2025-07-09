1. First think through the problem, read the codebase for relevant files, and write a plan to [tasks/todo.md].
2. The plan should have a list of todo items that you can check off as you complete them
3. Before you begin working, check in with me and I will verify the plan.
4. Then, begin working on the todo items, marking them as complete as you go.
5. Please every step of the way just give me a high level explanation of what changes you made
6. Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
7. Finally after completing a logical group of work or major milestone:
   a. Add a review section to the [tasks/todo.md] file with a summary of the changes you made and any other relevant information (max of 250 characters)
   b. **AUTOMATICALLY commit and push to GitHub using these commands:**
      - `git add .` (stage all changes)
      - `git commit -m "Brief descriptive message of what was completed"`
      - `git push origin main` (push to main branch)
   c. Use commit messages that clearly describe the work completed (e.g. "Fix navigation bugs", "Add user authentication", "Update styling for mobile")

## Grouped Commit Strategy:
- **Batch related changes**: Group multiple related todo items or fixes into a single commit
- **Commit triggers**: Only commit after completing:
  - A complete feature or bug fix (multiple related tasks)
  - A logical milestone (e.g., "Complete user authentication flow")
  - 3-5 related todo items that work together
  - End of a work session when multiple changes are ready
- **Avoid micro-commits**: Don't commit after every single small change
- **Commit message format**: Summarize all changes in the commit (e.g. "Implement user auth, fix navigation bugs, update mobile styling")
- **Check status first**: Run `git status` to see what files have changed before committing

## Commit Timing Guidelines:
- **Wait and batch**: Complete multiple related tasks before committing
- **Natural breakpoints**: Commit at logical stopping points (end of feature, major bug fix complete)
- **Session-based**: At minimum, commit once per work session when substantial progress is made
- **Quality over quantity**: Better to have fewer meaningful commits than many small ones
- **Emergency commits**: Only commit immediately for critical fixes that need to be saved urgently