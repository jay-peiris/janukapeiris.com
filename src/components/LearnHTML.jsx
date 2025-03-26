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
  { id: 'div', name: 'Container', code: '<div class="container">\n  <!-- Content goes here -->\n</div>', desc: 'A box to hold other elements' },
];

const cssStyles = [
  { id: 'color-red', name: 'Red Text', code: 'color: red;', preview: { color: 'red' } },
  { id: 'color-blue', name: 'Blue Text', code: 'color: blue;', preview: { color: 'blue' } },
  { id: 'bg-yellow', name: 'Yellow Background', code: 'background-color: yellow;', preview: { backgroundColor: 'yellow', padding: '0 5px' } },
  { id: 'text-large', name: 'Large Text', code: 'font-size: 24px;', preview: { fontSize: '24px' } },
  { id: 'text-bold', name: 'Bold Text', code: 'font-weight: bold;', preview: { fontWeight: 'bold' } },
  { id: 'text-center', name: 'Center Text', code: 'text-align: center;', preview: { textAlign: 'center', width: '100%' } },
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
            }
            
            if (element.style.backgroundColor === 'yellow') {
              styles.push(cssStyles.find(s => s.id === 'bg-yellow'));
            }
            
            if (element.style.fontSize === '24px') {
              styles.push(cssStyles.find(s => s.id === 'text-large'));
            }
            
            if (element.style.fontWeight === 'bold') {
              styles.push(cssStyles.find(s => s.id === 'text-bold'));
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
        </div>
        
        {/* HTML Basics Section */}
        <div className="mb-12 bg-[#112240] p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#64ffda]">HTML Basics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {htmlBasics.map((item, index) => (
              <div key={index} className="bg-[#1a2c52] p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-[#64ffda]">{item.title}</h3>
                <div className="text-sm leading-relaxed whitespace-pre-wrap">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-[#1a2c52] rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-[#64ffda]">How to Use This Tool</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Add blocks from the toolbox to build your page</li>
              <li>Click on a block to select it and edit its content</li>
              <li>Apply styles to make your content look great</li>
              <li>Use the view modes to see your code and preview</li>
              <li>Click "Edit Code" to directly modify the HTML and see changes live</li>
              <li>Reorder blocks using the arrow buttons</li>
              <li>Remove blocks with the X button</li>
              <li>Download your HTML when you're finished</li>
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
                <div className="grid grid-cols-1 gap-2">
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
          
          <div className="lg:w-3/4 flex flex-col gap-6">
            {/* View Mode Buttons */}
            <div className="bg-[#112240] p-4 rounded-xl shadow-lg">
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
            
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Blocks or Code View */}
              {(viewMode === 'blocks' || viewMode === 'split') && (
                <div className={`${viewMode === 'split' ? 'lg:w-1/2' : 'w-full'} bg-[#112240] p-4 rounded-xl shadow-lg`}>
                  <h2 className="text-2xl font-bold mb-4 text-[#64ffda]">Your Web Page</h2>
                  
                  {blocks.length === 0 ? (
                    <div className="text-center py-12 bg-[#1a2c52] rounded-lg opacity-70">
                      <p>Your page is empty! Add some blocks from the toolbox.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
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
                          
                          {selectedBlockId === block.id && !block.id.startsWith('image') && !block.id.startsWith('div') && (
                            <div className="mt-2">
                              <input
                                type="text"
                                placeholder="Enter your text here"
                                className="w-full px-3 py-2 bg-[#0a192f] border border-[#324e7d] rounded-lg focus:outline-none focus:border-[#64ffda]"
                                value={customTexts[block.id] || ''}
                                onChange={(e) => updateBlockContent(block.id, e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                              />
                              <div className="mt-2 text-xs text-white/70">
                                Press enter or click outside to apply changes
                              </div>
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
                <div className={`${viewMode === 'split' ? 'lg:w-1/2' : 'w-full'} bg-[#112240] p-4 rounded-xl shadow-lg`}>
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
              )}
            </div>
            
            {/* Preview */}
            <div className="bg-[#112240] p-4 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#64ffda]">Live Preview</h2>
              <div className="bg-white p-5 rounded-lg">
                <div 
                  className="preview-container text-black min-h-[200px]"
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
        </div>
      </div>
    </div>
  );
};

export default LearnHTML; 