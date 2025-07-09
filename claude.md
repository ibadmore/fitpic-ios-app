1. First think through the problem, read the codebase for relevant files, and write a plan to [tasks/todo.md].
2. The plan should have a list of todo items that you can check off as you complete them
3. Before you begin working, check in with me and I will verify the plan.
4. Then, begin working on the todo items, marking them as complete and once batches of tasks are all completed, moving groups of completed tasks into the "completed work" section and putting outstanding task into the "active tasks section" and leave "active tasks" section blank if there are no more approved tasks remaining.
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

## Todo.md Template:
Use this condensed format for maintaining the todo.md file:

```markdown
# [Project Name] - Development Tracker

## 🟢 ACTIVE TASKS
- [ ] Phase 1 (brief description)
    - [ ] Task 1
    - [ ] Task 2

## 🔴 UPCOMING TASKS
- [ ] Phase 2 (brief description)
    - [ ] Task 1
    - [ ] Task 2
- [ ] Phase 3 (brief description)
    - [ ] Task 1
    - [ ] Task 2

## 📋 CURRENT PLAN
**Goal**: Main objective for current work
**Priority**: Task order (Task1 → Task2 → Task3)
**Timeline**: Expected sessions to complete

---

## ✅ COMPLETED WORK

### Session N: [Session Title] (Date)
**Tasks**: One-line summary of session focus
- Specific accomplishment with relevant details
- **Bug/Feature Name**: What was fixed/added and key details
- Another task with outcome (e.g., fixed X → Y)
- Results: Final outcome or status

### Session N-1: [Previous Session Title]
**Problem**: Brief problem statement if applicable
**Solution**: How it was resolved
- Implementation detail 1
- Implementation detail 2
- Result: Outcome achieved

---

**Format Guidelines**:
- Keep active tasks to 5-7 items maximum
- Include **bold labels** for problems, solutions, errors, features
- Preserve technical details (e.g., function names, error messages)
- Use arrows → to show transformations or fixes
- Archive older sessions in collapsible section
- Maintain task context while being concise