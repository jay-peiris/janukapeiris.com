import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const blockTypes = [
  { id: 'header', name: 'Header', code: '<h1>My Heading</h1>', desc: 'A big title for your page' },
  { id: 'subheader', name: 'Sub Header', code: '<h2>My Subheading</h2>', desc: 'A smaller title' },
  { id: 'paragraph', name: 'Paragraph', code: '<p>This is my paragraph text.</p>', desc: 'Regular text for your page' },
  { id: 'image', name: 'Image', code: '<img src="image.jpg" alt="My Image">', desc: 'Add a picture' },
  { id: 'link', name: 'Link', code: '<a href="https://example.com">Click Me</a>', desc: 'A clickable link' },
  { id: 'list', name: 'List', code: '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>', desc: 'A bulleted list' },
  { id: 'button', name: 'Button', code: '<button>Click Me</button>', desc: 'A clickable button' },
  { id: 'div', name: 'Container Box', code: '<div>\n  <!-- Put other elements inside this box -->\n</div>', desc: 'A box that can hold other elements (add this first, then add elements to your page)' },
];

const cssStyles = [
  { id: 'color-red', name: 'Red Text', code: 'color: red;', preview: { color: 'red' } },
  { id: 'color-blue', name: 'Blue Text', code: 'color: blue;', preview: { color: 'blue' } },
  { id: 'color-green', name: 'Green Text', code: 'color: green;', preview: { color: 'green' } },
  { id: 'color-purple', name: 'Purple Text', code: 'color: purple;', preview: { color: 'purple' } },
  { id: 'color-orange', name: 'Orange Text', code: 'color: orange;', preview: { color: 'orange' } },
  { id: 'bg-yellow', name: 'Yellow Background', code: 'background-color: yellow;', preview: { backgroundColor: 'yellow', padding: '0 5px' } },
  { id: 'bg-lightblue', name: 'Light Blue Background', code: 'background-color: lightblue;', preview: { backgroundColor: 'lightblue', padding: '0 5px' } },
  { id: 'bg-lightgreen', name: 'Light Green Background', code: 'background-color: lightgreen;', preview: { backgroundColor: 'lightgreen', padding: '0 5px' } },
  { id: 'bg-pink', name: 'Pink Background', code: 'background-color: pink;', preview: { backgroundColor: 'pink', padding: '0 5px' } },
  { id: 'text-large', name: 'Large Text', code: 'font-size: 24px;', preview: { fontSize: '24px' } },
  { id: 'text-huge', name: 'Huge Text', code: 'font-size: 36px;', preview: { fontSize: '36px' } },
  { id: 'text-bold', name: 'Bold Text', code: 'font-weight: bold;', preview: { fontWeight: 'bold' } },
  { id: 'text-italic', name: 'Italic Text', code: 'font-style: italic;', preview: { fontStyle: 'italic' } },
  { id: 'text-underline', name: 'Underlined Text', code: 'text-decoration: underline;', preview: { textDecoration: 'underline' } },
  { id: 'text-center', name: 'Center Text', code: 'text-align: center;', preview: { textAlign: 'center', width: '100%' } },
  { id: 'border-dotted', name: 'Dotted Border', code: 'border: 2px dotted black;', preview: { border: '2px dotted black', padding: '0 5px' } },
  { id: 'border-solid', name: 'Solid Border', code: 'border: 2px solid black;', preview: { border: '2px solid black', padding: '0 5px' } },
  { id: 'rounded-corners', name: 'Rounded Corners', code: 'border-radius: 10px; border: 1px solid #333;', preview: { borderRadius: '10px', padding: '0 5px', backgroundColor: '#e0e0e0', border: '1px solid #333' } },
  { id: 'shadow', name: 'Add Shadow', code: 'box-shadow: 3px 3px 5px rgba(0,0,0,0.5);', preview: { boxShadow: '3px 3px 5px rgba(0,0,0,0.5)', padding: '0 5px', backgroundColor: '#e0e0e0' } },
];

// Template for a complete HTML page
const generateFullHTML = (blocks) => {
  const bodyContent = blocks.map(block => block.code).join('\n  ');
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Awesome Web Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
  </style>
</head>
<body>
  ${bodyContent}
</body>
</html>`;
};

const LearnHTML = () => {
  const [blocks, setBlocks] = useState([]);
  const [selectedBlockId, setSelectedBlockId] = useState(null);
  const [viewMode, setViewMode] = useState('blocks'); // 'blocks', 'code', or 'split'
  const [customTexts, setCustomTexts] = useState({}); // Store text for each block
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [codeEditorValue, setCodeEditorValue] = useState(''); // For direct code editing
  const [editingCode, setEditingCode] = useState(false); // Flag to track code editing mode
  
  // Initialize custom text when a block is selected
  useEffect(() => {
    if (selectedBlockId) {
      const selectedBlock = blocks.find(block => block.id === selectedBlockId);
      if (selectedBlock) {
        // Extract the content based on block type
        let content = "";
        if (selectedBlock.id.startsWith('header')) {
          content = selectedBlock.code.replace(/<h1>(.*?)<\/h1>/, "$1");
        } else if (selectedBlock.id.startsWith('subheader')) {
          content = selectedBlock.code.replace(/<h2>(.*?)<\/h2>/, "$1");
        } else if (selectedBlock.id.startsWith('paragraph')) {
          content = selectedBlock.code.replace(/<p>(.*?)<\/p>/, "$1");
        } else if (selectedBlock.id.startsWith('link')) {
          content = selectedBlock.code.replace(/<a href=".*?">(.*?)<\/a>/, "$1");
        } else if (selectedBlock.id.startsWith('button')) {
          content = selectedBlock.code.replace(/<button>(.*?)<\/button>/, "$1");
        }
        
        setCustomTexts(prev => ({...prev, [selectedBlockId]: content}));
      }
    }
  }, [selectedBlockId, blocks]);
  
  // Update code editor when blocks change
  useEffect(() => {
    if (viewMode === 'code' || viewMode === 'split') {
      setCodeEditorValue(fullHTMLCode);
    }
  }, [blocks, viewMode]);
  
  const addBlock = (blockType) => {
    const newBlock = { ...blockType, id: `${blockType.id}-${Date.now()}`, styles: [] };
    setBlocks([...blocks, newBlock]);
  };
  
  const removeBlock = (blockId) => {
    setBlocks(blocks.filter(block => block.id !== blockId));
    if (selectedBlockId === blockId) {
      setSelectedBlockId(null);
    }
    // Clean up customTexts
    setCustomTexts(prev => {
      const newTexts = {...prev};
      delete newTexts[blockId];
      return newTexts;
    });
  };
  
  const moveBlockUp = (index) => {
    if (index === 0) return;
    const newBlocks = [...blocks];
    [newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];
    setBlocks(newBlocks);
  };
  
  const moveBlockDown = (index) => {
    if (index === blocks.length - 1) return;
    const newBlocks = [...blocks];
    [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
    setBlocks(newBlocks);
  };
  
  const applyStyle = (styleId) => {
    if (!selectedBlockId) return;
    
    setBlocks(blocks.map(block => {
      if (block.id === selectedBlockId) {
        // Check if style already exists
        const styleExists = block.styles.some(style => style.id === styleId);
        
        if (styleExists) {
          // Remove style if it exists
          return {
            ...block,
            styles: block.styles.filter(style => style.id !== styleId)
          };
        } else {
          // Add style if it doesn't exist
          const styleToAdd = cssStyles.find(style => style.id === styleId);
          return {
            ...block,
            styles: [...block.styles, styleToAdd]
          };
        }
      }
      return block;
    }));
  };
  
  // Function to apply custom style with custom values
  const applyCustomStyle = (cssCode, styleId, previewStyle) => {
    if (!selectedBlockId) return;
    
    // Remove any existing styles that set the same property
    // (e.g., if adding a custom color, remove any other color styles)
    setBlocks(blocks.map(block => {
      if (block.id === selectedBlockId) {
        // Create a custom style object
        const customStyle = {
          id: styleId,
          name: cssCode.split(':')[0].trim(),  // e.g., "color" from "color: red;"
          code: cssCode,
          preview: previewStyle
        };
        
        // Check if we should replace an existing style of the same type
        // Remove existing styles with the same CSS property
        const cssProperty = cssCode.split(':')[0].trim();
        const filteredStyles = block.styles.filter(style => 
          !style.code.startsWith(cssProperty + ':') && 
          !style.id.startsWith(`custom-${cssProperty}`)
        );
        
        return {
          ...block,
          styles: [...filteredStyles, customStyle]
        };
      }
      return block;
    }));
  };
  
  const updateBlockContent = (blockId, newContent) => {
    setBlocks(blocks.map(block => {
      if (block.id === blockId) {
        // Logic to update the content based on block type
        let updatedCode = block.code;
        
        if (block.id.startsWith('header')) {
          updatedCode = `<h1>${newContent}</h1>`;
        } else if (block.id.startsWith('subheader')) {
          updatedCode = `<h2>${newContent}</h2>`;
        } else if (block.id.startsWith('paragraph')) {
          updatedCode = `<p>${newContent}</p>`;
        } else if (block.id.startsWith('link')) {
          updatedCode = `<a href="https://example.com">${newContent}</a>`;
        } else if (block.id.startsWith('button')) {
          updatedCode = `<button>${newContent}</button>`;
        }
        
        // Save to customTexts
        setCustomTexts(prev => ({...prev, [blockId]: newContent}));
        
        return { ...block, code: updatedCode };
      }
      return block;
    }));
  };
  
  // Function to update list items
  const updateListItems = (blockId) => {
    // Find all list items for this list block
    const listItems = Object.entries(customTexts)
      .filter(([key]) => key.startsWith(`${blockId}-item`))
      .sort((a, b) => {
        const numA = parseInt(a[0].replace(`${blockId}-item`, ''));
        const numB = parseInt(b[0].replace(`${blockId}-item`, ''));
        return numA - numB;
      })
      .map(([_, text]) => text);
    
    // If no list items stored yet, initialize with default values
    if (listItems.length === 0) {
      setCustomTexts(prev => ({
        ...prev, 
        [`${blockId}-item1`]: 'Item 1',
        [`${blockId}-item2`]: 'Item 2'
      }));
      listItems.push('Item 1', 'Item 2');
    }
    
    // Generate HTML list with the items
    const listItemsHTML = listItems.map(item => `  <li>${item}</li>`).join('\n');
    const updatedCode = `<ul>\n${listItemsHTML}\n</ul>`;
    
    // Update the block's code
    setBlocks(blocks.map(block => {
      if (block.id === blockId) {
        return { ...block, code: updatedCode };
      }
      return block;
    }));
  };
  
  // Function to add a new list item
  const addListItem = (blockId) => {
    const block = blocks.find(b => b.id === blockId);
    if (!block) return;
    
    // Current number of list items
    const itemCount = (block.code.match(/<li>/g) || []).length;
    const newItemNumber = itemCount + 1;
    
    // Update stored text for the new item if not already set
    if (!customTexts[`${blockId}-item${newItemNumber}`]) {
      setCustomTexts(prev => ({
        ...prev,
        [`${blockId}-item${newItemNumber}`]: `Item ${newItemNumber}`
      }));
    }
    
    // Generate HTML list with the new item
    const listItems = [];
    for (let i = 1; i <= newItemNumber; i++) {
      listItems.push(customTexts[`${blockId}-item${i}`] || `Item ${i}`);
    }
    
    const listItemsHTML = listItems.map(item => `  <li>${item}</li>`).join('\n');
    const updatedCode = `<ul>\n${listItemsHTML}\n</ul>`;
    
    // Update the block's code
    setBlocks(blocks.map(block => {
      if (block.id === blockId) {
        return { ...block, code: updatedCode };
      }
      return block;
    }));
  };
  
  // Function to generate code with styles applied
  const getBlockWithStyles = (block) => {
    if (!block.styles || block.styles.length === 0) {
      return block.code;
    }
    
    const styleString = block.styles.map(style => style.code).join(' ');
    
    // Different logic based on tag type
    if (block.code.startsWith('<img')) {
      // For img tags, we need to add style attribute
      return block.code.replace('<img', `<img style="${styleString}"`);
    } else {
      // For other tags, extract the tag name properly
      const tagMatch = block.code.match(/<([a-zA-Z0-9]+)/);
      if (!tagMatch) return block.code;
      
      const tagName = tagMatch[1]; // Get the actual tag name from the match
      
      // Handle case when style already exists
      if (block.code.includes('style=')) {
        return block.code.replace(/style="[^"]*"/, `style="${styleString}"`);
      } else {
        // Insert style attribute after the tag name
        return block.code.replace(`<${tagName}`, `<${tagName} style="${styleString}"`);
      }
    }
  };
  
  // Function to download HTML
  const downloadHTML = () => {
    const htmlContent = fullHTMLCode;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-webpage.html';
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  // Generate full HTML code - ensure styles are included
  const blocksWithStyles = blocks.map(block => ({
    ...block,
    code: getBlockWithStyles(block)
  }));
  
  const fullHTMLCode = generateFullHTML(blocksWithStyles);
  
  // HTML Basics information
  const htmlBasics = [
    {
      title: "What is HTML?",
      content: "HTML stands for HyperText Markup Language. It's the standard language for creating web pages that can be displayed in a web browser."
    },
    {
      title: "HTML Tags",
      content: "HTML uses 'tags' to define different parts of a webpage. Tags are enclosed in angle brackets like <tagname>. Most tags come in pairs with an opening tag <tag> and a closing tag </tag>."
    },
    {
      title: "HTML Structure",
      content: `Every HTML document has a basic structure:
<!DOCTYPE html>
<html>
  <head>
    <!-- Information about the page goes here -->
    <title>Page Title</title>
  </head>
  <body>
    <!-- Content visible on the page goes here -->
  </body>
</html>`
    },
    {
      title: "Common HTML Tags",
      content: `<h1> to <h6>: Headings (h1 is largest, h6 is smallest)
<p>: Paragraph
<a href="...">: Link
<img src="...">: Image
<ul> and <li>: Unordered list and list items
<div>: Container for grouping elements
<span>: Inline container for text`
    },
    {
      title: "Attributes",
      content: `HTML elements can have attributes that provide additional information:
<tag attribute="value">Content</tag>
Common attributes:
- id: Unique identifier
- class: For CSS styling
- style: For inline CSS
- src: For image source
- href: For link destination`
    },
    {
      title: "Container Boxes",
      content: `Container boxes (using <div> tags) are like boxes that hold other elements. You can:
1. Add a Container Box to your page first
2. Add other elements to your page like paragraphs or images
3. Add styles to the container like background colors and borders
4. The container keeps everything organized together!`
    },
  ];
  
  // Apply the edited code
  const applyCodeChanges = () => {
    try {
      // Parse the edited HTML to extract body content
      const bodyStart = codeEditorValue.indexOf('<body>') + 7;
      const bodyEnd = codeEditorValue.indexOf('</body>');
      
      if (bodyStart > 6 && bodyEnd > bodyStart) {
        const bodyContent = codeEditorValue.substring(bodyStart, bodyEnd).trim();
        
        // Create blocks from the body content
        const parser = new DOMParser();
        const doc = parser.parseFromString(bodyContent, 'text/html');
        const bodyElements = Array.from(doc.body.children);
        
        // Convert DOM elements to blocks
        const newBlocks = bodyElements.map((element, index) => {
          // Determine block type based on tag
          let blockType;
          let blockId;
          
          if (element.tagName === 'H1') {
            blockType = blockTypes.find(bt => bt.id === 'header');
            blockId = `header-${Date.now()}-${index}`;
          } else if (element.tagName === 'H2') {
            blockType = blockTypes.find(bt => bt.id === 'subheader');
            blockId = `subheader-${Date.now()}-${index}`;
          } else if (element.tagName === 'P') {
            blockType = blockTypes.find(bt => bt.id === 'paragraph');
            blockId = `paragraph-${Date.now()}-${index}`;
          } else if (element.tagName === 'A') {
            blockType = blockTypes.find(bt => bt.id === 'link');
            blockId = `link-${Date.now()}-${index}`;
          } else if (element.tagName === 'BUTTON') {
            blockType = blockTypes.find(bt => bt.id === 'button');
            blockId = `button-${Date.now()}-${index}`;
          } else if (element.tagName === 'IMG') {
            blockType = blockTypes.find(bt => bt.id === 'image');
            blockId = `image-${Date.now()}-${index}`;
          } else if (element.tagName === 'UL') {
            blockType = blockTypes.find(bt => bt.id === 'list');
            blockId = `list-${Date.now()}-${index}`;
          } else if (element.tagName === 'DIV') {
            blockType = blockTypes.find(bt => bt.id === 'div');
            blockId = `div-${Date.now()}-${index}`;
          } else {
            // Default to paragraph for unknown elements
            blockType = blockTypes.find(bt => bt.id === 'paragraph');
            blockId = `paragraph-${Date.now()}-${index}`;
          }
          
          if (!blockType) {
            blockType = blockTypes[0]; // Fallback to first block type
          }
          
          // Extract element HTML and extract styles if present
          const elementHTML = element.outerHTML;
          const styles = [];
          
          // Check for inline styles
          if (element.style && element.style.cssText) {
            // Parse styles from element
            const styleText = element.style.cssText;
            
            // Check each style type
            if (element.style.color === 'red') {
              styles.push(cssStyles.find(s => s.id === 'color-red'));
            } else if (element.style.color === 'blue') {
              styles.push(cssStyles.find(s => s.id === 'color-blue'));
            } else if (element.style.color === 'green') {
              styles.push(cssStyles.find(s => s.id === 'color-green'));
            } else if (element.style.color === 'purple') {
              styles.push(cssStyles.find(s => s.id === 'color-purple'));
            } else if (element.style.color === 'orange') {
              styles.push(cssStyles.find(s => s.id === 'color-orange'));
            }
            
            if (element.style.backgroundColor === 'yellow') {
              styles.push(cssStyles.find(s => s.id === 'bg-yellow'));
            } else if (element.style.backgroundColor === 'lightblue') {
              styles.push(cssStyles.find(s => s.id === 'bg-lightblue'));
            } else if (element.style.backgroundColor === 'lightgreen') {
              styles.push(cssStyles.find(s => s.id === 'bg-lightgreen'));
            } else if (element.style.backgroundColor === 'pink') {
              styles.push(cssStyles.find(s => s.id === 'bg-pink'));
            }
            
            if (element.style.fontSize === '24px') {
              styles.push(cssStyles.find(s => s.id === 'text-large'));
            } else if (element.style.fontSize === '36px') {
              styles.push(cssStyles.find(s => s.id === 'text-huge'));
            }
            
            if (element.style.fontWeight === 'bold') {
              styles.push(cssStyles.find(s => s.id === 'text-bold'));
            }
            
            if (element.style.fontStyle === 'italic') {
              styles.push(cssStyles.find(s => s.id === 'text-italic'));
            }
            
            if (element.style.textAlign === 'center') {
              styles.push(cssStyles.find(s => s.id === 'text-center'));
            }
          }
          
          return {
            ...blockType,
            id: blockId,
            code: elementHTML,
            styles: styles.filter(Boolean), // Remove any undefined styles
          };
        });
        
        setBlocks(newBlocks);
        setEditingCode(false);
      }
    } catch (error) {
      console.error("Error parsing HTML:", error);
      alert("There was an error in your HTML. Please check your code and try again.");
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] px-4 pt-32 pb-16 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-[#64ffda] hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Portfolio
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#64ffda]">Learn HTML Like Building with Blocks!</h1>
          <p className="text-xl">Build your own website by adding blocks below. Click on blocks to edit them.</p>
          
          {/* Quick Style Demo */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="bg-[#1a2c52] p-4 rounded-lg">
              <div className="text-center mb-2 text-sm font-medium">Style Examples</div>
              <div className="flex flex-wrap justify-center gap-3">
                <span style={{color: 'red'}}>Red Text</span>
                <span style={{backgroundColor: 'lightblue', padding: '0 5px'}}>Blue Background</span>
                <span style={{fontWeight: 'bold'}}>Bold Text</span>
                <span style={{border: '2px solid green', padding: '0 5px'}}>Border</span>
                <span style={{textDecoration: 'underline'}}>Underline</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* HTML Basics Section */}
        <div className="mb-12 bg-[#112240] p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#64ffda]">HTML Basics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {htmlBasics.map((item, index) => (
              <div key={index} className="bg-[#1a2c52] p-4 rounded-lg transform transition-transform hover:scale-105 border-2 border-transparent hover:border-[#64ffda]">
                <div className="flex items-center mb-3">
                  {index === 0 && (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#64ffda] text-[#0a192f] mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff79c6] text-white mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f1fa8c] text-[#0a192f] mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                      </svg>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#bd93f9] text-white mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                      </svg>
                    </div>
                  )}
                  {index === 4 && (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#50fa7b] text-[#0a192f] mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                      </svg>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-[#64ffda]">{item.title}</h3>
                </div>
                <div className="text-sm leading-relaxed whitespace-pre-wrap pl-1">
                  {item.title === "HTML Structure" ? (
                    <div className="bg-[#0a192f] p-3 rounded-md border border-[#64ffda] text-[#f8f8f2] font-mono text-xs">
                      &lt;!DOCTYPE html&gt;<br/>
                      &lt;html&gt;<br/>
                      <span className="pl-4">&lt;head&gt;</span><br/>
                      <span className="pl-8 text-[#f1fa8c]">&lt;!-- Page info here --&gt;</span><br/>
                      <span className="pl-8">&lt;title&gt;My Page&lt;/title&gt;</span><br/>
                      <span className="pl-4">&lt;/head&gt;</span><br/>
                      <span className="pl-4">&lt;body&gt;</span><br/>
                      <span className="pl-8 text-[#f1fa8c]">&lt;!-- Content here --&gt;</span><br/>
                      <span className="pl-4">&lt;/body&gt;</span><br/>
                      &lt;/html&gt;
                    </div>
                  ) : item.title === "Common HTML Tags" ? (
                    <div>
                      <div className="mb-2 p-1 rounded bg-[#0a192f]/50">
                        <span className="text-[#ff79c6]">&lt;h1&gt;</span>
                        <span className="text-[#f8f8f2]">Biggest Heading</span>
                        <span className="text-[#ff79c6]">&lt;/h1&gt;</span>
                      </div>
                      <div className="mb-2 p-1 rounded bg-[#0a192f]/50">
                        <span className="text-[#ff79c6]">&lt;p&gt;</span>
                        <span className="text-[#f8f8f2]">Paragraph of text</span>
                        <span className="text-[#ff79c6]">&lt;/p&gt;</span>
                      </div>
                      <div className="mb-2 p-1 rounded bg-[#0a192f]/50">
                        <span className="text-[#ff79c6]">&lt;img</span>
                        <span className="text-[#50fa7b]"> src=</span>
                        <span className="text-[#f1fa8c]">"picture.jpg"</span>
                        <span className="text-[#ff79c6]">&gt;</span>
                      </div>
                      <div className="mb-2 p-1 rounded bg-[#0a192f]/50">
                        <span className="text-[#ff79c6]">&lt;a</span>
                        <span className="text-[#50fa7b]"> href=</span>
                        <span className="text-[#f1fa8c]">"https://example.com"</span>
                        <span className="text-[#ff79c6]">&gt;</span>
                        <span className="text-[#f8f8f2]">Link</span>
                        <span className="text-[#ff79c6]">&lt;/a&gt;</span>
                      </div>
                    </div>
                  ) : item.title === "Attributes" ? (
                    <div>
                      <div className="bg-[#0a192f] p-2 rounded-md border border-[#64ffda] text-[#f8f8f2] font-mono text-xs mb-2">
                        &lt;tag <span className="text-[#50fa7b]">attribute=</span><span className="text-[#f1fa8c]">"value"</span>&gt;Content&lt;/tag&gt;
                      </div>
                      <p className="mb-1">Common attributes:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-[#50fa7b]">id</li>
                        <li className="text-[#bd93f9]">class</li>
                        <li className="text-[#ff79c6]">style</li>
                        <li className="text-[#f1fa8c]">src</li>
                        <li className="text-[#8be9fd]">href</li>
                      </ul>
                    </div>
                  ) : item.title === "Container Boxes" ? (
                    <div>
                      <div className="bg-[#0a192f] p-2 rounded-md border border-[#64ffda] text-[#f8f8f2] font-mono text-xs mb-2">
                        &lt;div&gt;
                      </div>
                      <p className="mb-1">Container boxes (using &lt;div&gt; tags) are like boxes that hold other elements. You can:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li className="text-[#50fa7b]">Add a Container Box to your page first</li>
                        <li className="text-[#bd93f9]">Add other elements to your page like paragraphs or images</li>
                        <li className="text-[#ff79c6]">Add styles to the container like background colors and borders</li>
                        <li className="text-[#f1fa8c]">The container keeps everything organized together!</li>
                      </ul>
                    </div>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-[#1a2c52] rounded-lg border-l-4 border-[#64ffda]">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#8be9fd] text-[#0a192f] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#64ffda]">How to Use This Tool</h3>
            </div>
            <ul className="list-none pl-5 space-y-2">
              {[
                "Add blocks from the toolbox to build your page",
                "Click on a block to select it and edit its content",
                "Try adding a Container Box and style it with backgrounds and borders",
                "Apply multiple styles to make your content look amazing",
                "Use the view modes to see your code and preview",
                "Click \"Edit Code\" to directly modify the HTML and see changes live",
                "Reorder blocks using the arrow buttons",
                "Remove blocks with the X button",
                "Download your HTML when you're finished"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#64ffda] text-[#0a192f] flex items-center justify-center mr-2 text-sm font-bold">{index + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Toolbox Panel */}
          <div className="lg:w-1/4 bg-[#112240] p-4 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#64ffda]">Blocks</h2>
            <div className="grid grid-cols-1 gap-3">
              {blockTypes.map(blockType => (
                <button
                  key={blockType.id}
                  onClick={() => addBlock(blockType)}
                  className="bg-[#1a2c52] hover:bg-[#253b69] px-4 py-3 rounded-lg text-left transition-colors"
                >
                  <div className="font-medium">{blockType.name}</div>
                  <div className="text-xs opacity-70">{blockType.desc}</div>
                </button>
              ))}
            </div>
            
            {selectedBlockId && (
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4 text-[#64ffda]">Styles</h2>
                
                {/* Custom Color Picker Section */}
                <div className="mb-4 p-3 bg-[#1a2c52] rounded-lg">
                  <div className="font-medium mb-2">Custom Colors</div>
                  
                  {/* Text Color */}
                  <div className="mb-3">
                    <label className="block text-sm mb-1">Text Color:</label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="color" 
                        className="w-8 h-8 rounded cursor-pointer"
                        onChange={(e) => {
                          const colorValue = e.target.value;
                          applyCustomStyle(`color: ${colorValue};`, `custom-color-${Date.now()}`, { color: colorValue });
                        }}
                      />
                      <input 
                        type="text" 
                        placeholder="#RRGGBB or name" 
                        className="flex-1 px-2 py-1 bg-[#0a192f] border border-[#324e7d] rounded-lg text-sm"
                        onBlur={(e) => {
                          if (e.target.value) {
                            applyCustomStyle(`color: ${e.target.value};`, `custom-color-${Date.now()}`, { color: e.target.value });
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && e.target.value) {
                            applyCustomStyle(`color: ${e.target.value};`, `custom-color-${Date.now()}`, { color: e.target.value });
                          }
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Background Color */}
                  <div className="mb-3">
                    <label className="block text-sm mb-1">Background Color:</label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="color" 
                        className="w-8 h-8 rounded cursor-pointer"
                        onChange={(e) => {
                          const colorValue = e.target.value;
                          applyCustomStyle(`background-color: ${colorValue};`, `custom-bg-${Date.now()}`, { backgroundColor: colorValue, padding: '0 5px' });
                        }}
                      />
                      <input 
                        type="text" 
                        placeholder="#RRGGBB or name" 
                        className="flex-1 px-2 py-1 bg-[#0a192f] border border-[#324e7d] rounded-lg text-sm"
                        onBlur={(e) => {
                          if (e.target.value) {
                            applyCustomStyle(`background-color: ${e.target.value};`, `custom-bg-${Date.now()}`, { backgroundColor: e.target.value, padding: '0 5px' });
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && e.target.value) {
                            applyCustomStyle(`background-color: ${e.target.value};`, `custom-bg-${Date.now()}`, { backgroundColor: e.target.value, padding: '0 5px' });
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-2 text-sm font-medium">Preset Styles</div>
                <div className="grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto">
                  {cssStyles.map(style => {
                    const isSelected = blocks.find(b => b.id === selectedBlockId)?.styles.some(s => s.id === style.id);
                    
                    return (
                      <button
                        key={style.id}
                        onClick={() => applyStyle(style.id)}
                        className={`px-3 py-2 rounded-lg text-left transition-colors flex items-center ${isSelected ? 'bg-[#2d5283]' : 'bg-[#1a2c52] hover:bg-[#253b69]'}`}
                      >
                        <span style={style.preview} className="mr-2">{style.name}</span>
                        {isSelected && (
                          <span className="ml-auto text-[#64ffda]">✓</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* View Mode Buttons - Horizontal at the top */}
            <div className="bg-[#112240] p-4 rounded-xl shadow-lg mb-6">
              <div className="flex flex-wrap gap-4 justify-between items-center">
                <div className="flex gap-4">
                  <button 
                    onClick={() => setViewMode('blocks')}
                    className={`px-4 py-2 rounded-lg ${viewMode === 'blocks' ? 'bg-[#64ffda] text-[#0a192f] font-medium' : 'bg-[#1a2c52] hover:bg-[#253b69]'}`}
                  >
                    Blocks
                  </button>
                  <button 
                    onClick={() => setViewMode('code')}
                    className={`px-4 py-2 rounded-lg ${viewMode === 'code' ? 'bg-[#64ffda] text-[#0a192f] font-medium' : 'bg-[#1a2c52] hover:bg-[#253b69]'}`}
                  >
                    Code
                  </button>
                  <button 
                    onClick={() => setViewMode('split')}
                    className={`px-4 py-2 rounded-lg ${viewMode === 'split' ? 'bg-[#64ffda] text-[#0a192f] font-medium' : 'bg-[#1a2c52] hover:bg-[#253b69]'}`}
                  >
                    Split View
                  </button>
                  
                  {/* Quick Style Dropdown */}
                  {selectedBlockId && (
                    <div className="relative group">
                      <button 
                        className="px-4 py-2 bg-[#1a2c52] hover:bg-[#253b69] rounded-lg flex items-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                          <line x1="9" y1="9" x2="9.01" y2="9"></line>
                          <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        </svg>
                        Quick Styles
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                      
                      <div className="absolute left-0 mt-1 w-64 bg-[#0a192f] border border-[#253b69] p-2 rounded-lg shadow-lg hidden group-hover:block z-10">
                        <div className="text-sm font-medium mb-2 text-[#64ffda]">Text Colors</div>
                        <div className="grid grid-cols-5 gap-1 mb-2">
                          {cssStyles.filter(s => s.id.startsWith('color-')).map(style => (
                            <button
                              key={style.id}
                              onClick={() => applyStyle(style.id)}
                              className="w-8 h-8 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: style.preview.color }}
                              title={style.name}
                            ></button>
                          ))}
                          <button
                            className="w-8 h-8 rounded-full bg-[#1a2c52] flex items-center justify-center"
                            onClick={() => {
                              const colorInput = document.createElement('input');
                              colorInput.type = 'color';
                              colorInput.addEventListener('change', (e) => {
                                const colorValue = e.target.value;
                                applyCustomStyle(`color: ${colorValue};`, `custom-color-${Date.now()}`, { color: colorValue });
                              });
                              colorInput.click();
                            }}
                            title="Custom Color"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 2v20M2 12h20"></path>
                            </svg>
                          </button>
                        </div>
                        
                        <div className="text-sm font-medium mb-2 text-[#64ffda]">Backgrounds</div>
                        <div className="grid grid-cols-5 gap-1 mb-2">
                          {cssStyles.filter(s => s.id.startsWith('bg-')).map(style => (
                            <button
                              key={style.id}
                              onClick={() => applyStyle(style.id)}
                              className="w-8 h-8 rounded-md"
                              style={{ backgroundColor: style.preview.backgroundColor }}
                              title={style.name}
                            ></button>
                          ))}
                          <button
                            className="w-8 h-8 rounded-md bg-[#1a2c52] flex items-center justify-center"
                            onClick={() => {
                              const colorInput = document.createElement('input');
                              colorInput.type = 'color';
                              colorInput.addEventListener('change', (e) => {
                                const colorValue = e.target.value;
                                applyCustomStyle(`background-color: ${colorValue};`, `custom-bg-${Date.now()}`, { backgroundColor: colorValue, padding: '0 5px' });
                              });
                              colorInput.click();
                            }}
                            title="Custom Background"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 2v20M2 12h20"></path>
                            </svg>
                          </button>
                        </div>
                        
                        <div className="text-sm font-medium mb-2 text-[#64ffda]">Text Styling</div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <button
                            onClick={() => applyStyle('text-bold')}
                            className="px-2 py-1 bg-[#1a2c52] hover:bg-[#253b69] rounded-md text-sm font-bold"
                            title="Bold Text"
                          >B</button>
                          <button
                            onClick={() => applyStyle('text-italic')}
                            className="px-2 py-1 bg-[#1a2c52] hover:bg-[#253b69] rounded-md text-sm italic"
                            title="Italic Text"
                          >I</button>
                          <button
                            onClick={() => applyStyle('text-underline')}
                            className="px-2 py-1 bg-[#1a2c52] hover:bg-[#253b69] rounded-md text-sm underline"
                            title="Underlined Text"
                          >U</button>
                          <button
                            onClick={() => applyStyle('text-large')}
                            className="px-2 py-1 bg-[#1a2c52] hover:bg-[#253b69] rounded-md text-sm"
                            title="Large Text"
                          >A+</button>
                          <button
                            onClick={() => applyStyle('text-huge')}
                            className="px-2 py-1 bg-[#1a2c52] hover:bg-[#253b69] rounded-md text-sm"
                            title="Huge Text"
                          >A++</button>
                          <button
                            onClick={() => applyStyle('text-center')}
                            className="px-2 py-1 bg-[#1a2c52] hover:bg-[#253b69] rounded-md text-sm"
                            title="Center Text"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="10" x2="6" y2="10"></line>
                              <line x1="21" y1="6" x2="3" y2="6"></line>
                              <line x1="21" y1="14" x2="3" y2="14"></line>
                              <line x1="18" y1="18" x2="6" y2="18"></line>
                            </svg>
                          </button>
                        </div>
                        
                        <div className="text-sm font-medium mb-2 text-[#64ffda]">Borders & Effects</div>
                        <div className="flex flex-wrap gap-1">
                          <button
                            onClick={() => applyStyle('border-dotted')}
                            className="px-2 py-1 bg-[#1a2c52] hover:bg-[#253b69] rounded-md text-sm border-2 border-dotted border-white"
                            title="Dotted Border"
                          >···</button>
                          <button
                            onClick={() => applyStyle('border-solid')}
                            className="px-2 py-1 bg-[#1a2c52] hover:bg-[#253b69] rounded-md text-sm border-2 border-solid border-white"
                            title="Solid Border"
                          >—</button>
                          <button
                            onClick={() => applyStyle('rounded-corners')}
                            className="px-2 py-1 bg-[#1a2c52] hover:bg-[#253b69] rounded-lg text-sm border border-white"
                            title="Rounded Corners"
                          >◗</button>
                          <button
                            onClick={() => applyStyle('shadow')}
                            className="px-2 py-1 bg-[#1a2c52] hover:bg-[#253b69] rounded-md text-sm"
                            style={{ boxShadow: '2px 2px 3px rgba(255,255,255,0.5)' }}
                            title="Add Shadow"
                          >◢</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {blocks.length > 0 && (
                  <button
                    onClick={downloadHTML}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white font-medium flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download HTML
                  </button>
                )}
              </div>
            </div>
            
            {/* Content Area - Horizontal Split */}
            <div className="flex flex-col xl:flex-row gap-6">
              {/* Left Side - Blocks or Code Editor */}
              <div className={`${viewMode === 'split' ? 'xl:w-1/2' : 'w-full'}`}>
                {/* Blocks View */}
                {(viewMode === 'blocks' || viewMode === 'split') && (
                  <div className="bg-[#112240] p-4 rounded-xl shadow-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4 text-[#64ffda]">Your Web Page</h2>
                    
                    {blocks.length === 0 ? (
                      <div className="text-center py-12 bg-[#1a2c52] rounded-lg opacity-70">
                        <p>Your page is empty! Add some blocks from the toolbox.</p>
                      </div>
                    ) : (
                      <div className="space-y-3 max-h-[500px] overflow-y-auto">
                        {blocks.map((block, index) => (
                          <div 
                            key={block.id}
                            className={`bg-[#1a2c52] p-3 rounded-lg cursor-pointer transition-colors ${selectedBlockId === block.id ? 'ring-2 ring-[#64ffda]' : 'hover:bg-[#253b69]'}`}
                            onClick={() => setSelectedBlockId(selectedBlockId === block.id ? null : block.id)}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">{block.name}</span>
                              <div className="flex space-x-2">
                                <button 
                                  onClick={(e) => { e.stopPropagation(); moveBlockUp(index); }}
                                  className="px-2 py-1 bg-[#253b69] rounded hover:bg-[#324e7d] disabled:opacity-50"
                                  disabled={index === 0}
                                >
                                  ↑
                                </button>
                                <button 
                                  onClick={(e) => { e.stopPropagation(); moveBlockDown(index); }}
                                  className="px-2 py-1 bg-[#253b69] rounded hover:bg-[#324e7d] disabled:opacity-50"
                                  disabled={index === blocks.length - 1}
                                >
                                  ↓
                                </button>
                                <button 
                                  onClick={(e) => { e.stopPropagation(); removeBlock(block.id); }}
                                  className="px-2 py-1 bg-[#253b69] rounded hover:bg-red-700"
                                >
                                  ×
                                </button>
                              </div>
                            </div>
                            
                            {selectedBlockId === block.id && (
                              <div className="mt-2">
                                {!block.id.startsWith('image') && !block.id.startsWith('div') && !block.id.startsWith('list') && (
                                  <input
                                    type="text"
                                    placeholder="Enter your text here"
                                    className="w-full px-3 py-2 bg-[#0a192f] border border-[#324e7d] rounded-lg focus:outline-none focus:border-[#64ffda]"
                                    value={customTexts[block.id] || ''}
                                    onChange={(e) => updateBlockContent(block.id, e.target.value)}
                                    onClick={(e) => e.stopPropagation()}
                                  />
                                )}
                                
                                {block.id.startsWith('list') && (
                                  <div className="bg-[#0a192f] p-3 rounded-lg mt-1">
                                    <div className="mb-2 text-sm font-medium">List Items:</div>
                                    <div className="space-y-2" onClick={(e) => e.stopPropagation()}>
                                      <div className="flex items-center gap-2">
                                        <input
                                          type="text"
                                          placeholder="Item 1"
                                          className="flex-1 px-3 py-2 bg-[#253b69] border border-[#324e7d] rounded-lg focus:outline-none focus:border-[#64ffda]"
                                          value={customTexts[`${block.id}-item1`] || 'Item 1'}
                                          onChange={(e) => {
                                            const newText = e.target.value;
                                            setCustomTexts(prev => ({...prev, [`${block.id}-item1`]: newText}));
                                            updateListItems(block.id);
                                          }}
                                        />
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <input
                                          type="text"
                                          placeholder="Item 2"
                                          className="flex-1 px-3 py-2 bg-[#253b69] border border-[#324e7d] rounded-lg focus:outline-none focus:border-[#64ffda]"
                                          value={customTexts[`${block.id}-item2`] || 'Item 2'}
                                          onChange={(e) => {
                                            const newText = e.target.value;
                                            setCustomTexts(prev => ({...prev, [`${block.id}-item2`]: newText}));
                                            updateListItems(block.id);
                                          }}
                                        />
                                      </div>
                                      {/* Additional list items */}
                                      {(() => {
                                        const itemCount = (block.code.match(/<li>/g) || []).length;
                                        const extraItems = [];
                                        for (let i = 3; i <= itemCount; i++) {
                                          extraItems.push(
                                            <div key={i} className="flex items-center gap-2">
                                              <input
                                                type="text"
                                                placeholder={`Item ${i}`}
                                                className="flex-1 px-3 py-2 bg-[#253b69] border border-[#324e7d] rounded-lg focus:outline-none focus:border-[#64ffda]"
                                                value={customTexts[`${block.id}-item${i}`] || `Item ${i}`}
                                                onChange={(e) => {
                                                  const newText = e.target.value;
                                                  setCustomTexts(prev => ({...prev, [`${block.id}-item${i}`]: newText}));
                                                  updateListItems(block.id);
                                                }}
                                              />
                                            </div>
                                          );
                                        }
                                        return extraItems;
                                      })()}
                                      <button
                                        className="px-3 py-1 bg-[#64ffda] text-[#0a192f] rounded mt-1 text-sm"
                                        onClick={() => {
                                          addListItem(block.id);
                                        }}
                                      >
                                        + Add Item
                                      </button>
                                    </div>
                                  </div>
                                )}
                                
                                {!block.id.startsWith('list') && (
                                  <div className="mt-2 text-xs text-white/70">
                                    Press enter or click outside to apply changes
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Code View */}
                {(viewMode === 'code' || viewMode === 'split') && (
                  <div className="bg-[#112240] p-4 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-[#64ffda]">HTML Code</h2>
                      <div className="flex items-center gap-2">
                        {!editingCode ? (
                          <button
                            onClick={() => setEditingCode(true)}
                            className="px-3 py-1 bg-[#64ffda] text-[#0a192f] rounded-lg flex items-center gap-1"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 20h9"></path>
                              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                            </svg>
                            Edit Code
                          </button>
                        ) : (
                          <>
                            <button
                              onClick={applyCodeChanges}
                              className="px-3 py-1 bg-green-500 text-white rounded-lg flex items-center gap-1"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              Apply Changes
                            </button>
                            <button
                              onClick={() => {
                                setEditingCode(false);
                                setCodeEditorValue(fullHTMLCode);
                              }}
                              className="px-3 py-1 bg-red-500 text-white rounded-lg flex items-center gap-1"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                              Cancel
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="max-h-[500px] overflow-y-auto">
                      {!editingCode ? (
                        <SyntaxHighlighter language="html" style={vscDarkPlus} customStyle={{borderRadius: '0.5rem'}}>
                          {fullHTMLCode}
                        </SyntaxHighlighter>
                      ) : (
                        <textarea
                          value={codeEditorValue}
                          onChange={(e) => setCodeEditorValue(e.target.value)}
                          className="w-full h-80 bg-[#0a192f] text-white p-4 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                          spellCheck="false"
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Right Side - Live Preview (Sticky) */}
              {(viewMode === 'blocks' || viewMode === 'split') && (
                <div className={`${viewMode === 'split' ? 'xl:w-1/2' : 'w-full'}`}>
                  <div className="sticky top-24 bg-[#112240] p-4 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-[#64ffda]">Live Preview</h2>
                    <div className="bg-white p-5 rounded-lg">
                      <div 
                        className="preview-container text-black min-h-[300px] max-h-[500px] overflow-y-auto"
                        dangerouslySetInnerHTML={{ 
                          __html: blocks.map(block => {
                            // Apply styles inline for preview
                            if (block.styles && block.styles.length > 0) {
                              return getBlockWithStyles(block);
                            }
                            return block.code;
                          }).join('\n') 
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnHTML; 