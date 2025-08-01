# QA Test Plan: Simple To-Do List Application

## 1. Introduction

This document outlines the testing strategy for the Simple To-Do List application. This is a basic web application that allows users to add, delete, and mark tasks as complete. The application is built with HTML, CSS, and JavaScript, and it uses local storage to persist data.

## 2. Scope

This test plan covers the functional and UI testing of the To-Do List application on the Google Chrome browser (latest version) on macOS.

## 3. Test Approach

- **Manual Testing:** All test cases will be executed manually.
- **Functional Testing:** To verify that all features work as expected.
- **UI Testing:** To ensure the application's user interface is clean, consistent, and user-friendly.

## 4. Features to be Tested

- Adding a new task.
- Marking a task as complete.
- Un-marking a task as complete.
- Deleting a task.
- Persisting tasks after reloading the page.
- Handling empty input.

## 5. Features not to be Tested

- Cross-browser compatibility (testing will only be on Chrome).
- Performance testing.
- Security testing.
- API testing (as there is no API).

## 6. Tools

- **Test Case Management:** Google Sheets (or any spreadsheet application).
- **Bug Reporting:** GitHub Issues (or a simple document).
- **Browser:** Google Chrome (latest version).

## 7. Pass/Fail Criteria

- **Pass:** The actual result matches the expected result.
- **Fail:** The actual result does not match the expected result.