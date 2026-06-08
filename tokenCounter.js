// Step 3: Clean the Input
function cleanText(text) {
  return text.trim();
}

// Step 4: Split Into Words
function splitIntoWords(text) {
  return text.split(" ");
}

// Step 5: Remove Empty Items
function removeEmptyWords(words) {
  return words.filter(function(word) {
    return word !== "";
  });
}

// Step 6: Count the Tokens
function estimateTokens(words) {
  return Math.ceil(words.length * 0.75);
}

// Step 7: Put It All Together (Əsas funksiya)
function countTokens(text) {
  const cleaned = cleanText(text);
  const words = splitIntoWords(cleaned);
  const filtered = removeEmptyWords(words);
  return estimateTokens(filtered);
}

// --- Yoxlamaq üçün test kodları (Console-da görünəcək) ---
console.log("Test 1 (Clean):", cleanText("  Hello world  "));
console.log("Test 2 (Split):", splitIntoWords("The quick brown fox"));

const messy = splitIntoWords("Hello   world");
console.log("Test 3 (Messy Split):", messy);
console.log("Test 3 (Filtered):", removeEmptyWords(messy));

// Əsas funksiyanın testləri:
console.log("Token 'Hello':", countTokens("Hello"));
console.log("Token 'Hello, world!':", countTokens("Hello, world!"));
console.log("Token (Messy spaces):", countTokens("  I am learning JavaScript   today  "));