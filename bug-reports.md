# bug-reports

Bug Report: Missing Checkmark Icon When Marking Task as Complete
**Title:** Checkmark Icon Does Not Change When Task is Marked as Complete
**Steps to Reproduce:**
1 Add a new task (e.g., “My second task”).
2 Click on the task text to mark it as complete.

⠀**Expected Result:** The task should be visually marked as complete (e.g., with a line-through), and the checkmark icon should change to indicate completion.
**Actual Result:** The task is visually marked as complete with a line-through, but the checkmark icon does not change.
**Environment Details:**
* Platform: Web
* Browser/App Version: Dia Version 0.39.0 (65837), Chrome 138.0.7204.185
* Date Tested: 2 August 2025

⠀**Status:** Fail

**Status:** Resolved
**Resolution:** Added missing `unchecked.png` and `checked.png` image files to the `images` directory, which were referenced by `style.css` for the checkmark icon.
