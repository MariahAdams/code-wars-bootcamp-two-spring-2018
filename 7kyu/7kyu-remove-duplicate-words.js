// Problem domain: https://www.codewars.com/kata/5b39e3772ae7545f650000fc

// Your task is to remove all duplicate words from string, leaving only single (first) words entries.
// Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output:
// 'alpha beta gamma delta'

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ');