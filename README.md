# React Native useEffect Asynchronous State Update Bug

This repository demonstrates a common bug in React Native applications involving the `useEffect` hook and asynchronous state updates.  The bug occurs when attempting to modify state within an asynchronous callback function inside `useEffect`.  This often leads to unexpected behavior, as the component might not re-render with the updated state correctly.

The `useEffectBug.js` file contains the buggy code, showcasing the incorrect behavior.  The `useEffectBugSolution.js` file provides a corrected version, using techniques to ensure proper state management.