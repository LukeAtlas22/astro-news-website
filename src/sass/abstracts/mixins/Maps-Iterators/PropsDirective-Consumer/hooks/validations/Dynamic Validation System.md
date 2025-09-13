# Dynamic Validation System

This folder contains the validation functions used by the system to check the values of SASS directives. Its unique feature is that it works dynamically: any new validation added here is automatically detected and made available for use.

## How It Works

When you use the validation-hook keyword within a prop-directive object, like:

```
  (
    prop-name: width,
    validation-hook: is-length
  ),
```

the system triggers a validation hook when it extracts the prop's value. This hook is fetched from this library of validators. The name specified in the validation-hook must exactly match the corresponding validator hook's file name (excluding the leading \_).

## How to Add a New Validation

To extend the system with a new validation rule, follow these simple conventions:

File Naming: Create a new SASS partial file with the prefix \_is- and a descriptive name for the validation. For example, to validate if a value is a string, the file name will be \_is-string.scss.

Function Definition: Inside this file, define a function with the same name as the file (without the \_ prefix). The function should accept the necessary arguments for validation and return true if the validation is successful, or false otherwise.
