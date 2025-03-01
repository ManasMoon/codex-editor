// Initialize Editors
const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const jsEditor = document.getElementById("js-editor");
const previewFrame = document.getElementById("preview-frame");

// Live Preview Function
function updatePreview() {
  const html = htmlEditor.value;
  const css = `<style>${cssEditor.value}</style>`;
  const js = `<script>${jsEditor.value}<\/script>`;

  const previewDoc =
    previewFrame.contentDocument || previewFrame.contentWindow.document;
  previewDoc.open();
  previewDoc.write(css + html + js);
  previewDoc.close();
}

// Auto-update Preview
let updateTimeout;
function scheduleUpdate() {
  clearTimeout(updateTimeout);
  updateTimeout = setTimeout(updatePreview, 300);
}

// Event Listeners
htmlEditor.addEventListener("input", scheduleUpdate);
cssEditor.addEventListener("input", scheduleUpdate);
jsEditor.addEventListener("input", scheduleUpdate);

// Initial Preview
updatePreview();

// Sample Starter Code
htmlEditor.value = `<h1 class="hero-text">Welcome to CodexAI</h1>
<p>Start coding to see live changes!</p>`;

cssEditor.value = `body { padding: 2rem; }
.hero-text { color: #2563eb; font-size: 2.5rem; }`;

jsEditor.value = `console.log('CodexAI Editor Ready!');`;
