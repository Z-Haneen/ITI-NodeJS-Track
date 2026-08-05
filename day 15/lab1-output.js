// ==========================================
// Question 1
// Output: 18
// Explanation: Filter even numbers [2, 4] -> Map *3 [6, 12] -> Reduce sum (6 + 12 = 18)
// ==========================================

// ==========================================
// Question 2
// Output:
// 5
// 6
// 3
// Explanation: Callback functions executing sum, multiply, and custom subtraction.
// ==========================================

// ==========================================
// Question 3
// Output:
// Ahmed
// undefined
// Ahmed
// Explanation:
// 1. normal() has 'this' bound to user object.
// 2. arrow() inherits 'this' from global/module scope (undefined in strict/node).
// 3. nested() arrow inner inherits 'this' from nested() function context (user object).
// ==========================================

// ==========================================
// Question 4
// Output:
// 1
// 2
// 1
// 3
// 2
// Explanation: Closure maintaining state independently for c1 and c2 counters.
// ==========================================

// ==========================================
// Question 5
// Output:
// [ 8 ]
// [ 1, 2, 3, 4 ]
// Explanation:
// 1. Map: [1, 4, 3, 8] -> Filter > 2: [4, 8] -> Reduce push (c*2): [4*2=8, 8*2=16]
// Wait, map gives [1, 4, 3, 8], filter > 2 gives [4, 8], reduce pushes [8, 16].
// Output of reduce: [ 8, 16 ]
// Original array 'numbers' remains immutable: [1, 2, 3, 4]
// ==========================================

// ==========================================
// Question 6
// Output:
// A
// C
// B
// Explanation: Synchronous code executes first (A, C), then Macrotask (setTimeout B).
// ==========================================

// ==========================================
// Question 7
// Output:
// 1
// 4
// 2
// 3
// Explanation: Sync (1, 4) -> Microtask/Promise (2) -> Macrotask/setTimeout (3).
// ==========================================

// ==========================================
// Question 8
// Output:
// Start
// End
// nextTick
// Promise
// Timeout
// Explanation:
// Sync (Start, End) -> process.nextTick (highest microtask priority)
// -> Promise Microtask -> Macrotask Timeout.
// ==========================================

// ==========================================
// Question 9
// Output:
// 1
// 8
// 7
// 5
// 6
// 2
// 4
// 3
// Explanation:
// Sync: 1, 8.
// Microtasks: nextTick(7) first, then Promise(5), inside which nextTick(6) runs.
// Macrotask (setTimeout): 2 -> inner nextTick(4) -> inner Promise(3).
// ==========================================

// ==========================================
// Question 10
// Output:
// A
// K
// E
// D
// B
// C
// F
// G
// H
// J
// I
// Explanation:
// Sync: A, K.
// Main Microtasks: E (nextTick), D (Promise).
// Main Timers: B (Timeout 0), C (Immediate).
// I/O Callback (fs.readFile): F -> Microtasks inside I/O: G (nextTick), H (Promise)
// -> Check Phase inside I/O: J (Immediate) -> Next Timer Phase: I (Timeout).
// ==========================================

// ==========================================
// Bonus 1
// Output:
// 1
// 8
// 7
// 5
// 6
// 2
// 3
// 4
// Explanation:
// Sync: 1, 8.
// Microtasks: nextTick(7), Promise(5) -> chained Promise(6).
// Timer: 2 -> inner Promise(3) -> inner setTimeout(4).
// ==========================================

// ==========================================
// Bonus 2
// Output:
// Start
// End
// Global NextTick
// Global Promise
// File
// NextTick
// Promise1
// Promise2
// Immediate
// Timeout
// Explanation:
// Sync: Start, End.
// Main Microtasks: Global NextTick, Global Promise.
// I/O Phase: File.
// Inside I/O Callback: NextTick -> Promise1 -> Promise2 -> Immediate (Check phase runs before Timers phase inside I/O cycle) -> Timeout.
// ==========================================