# Simple Search - Product Filter Table

A React-based product search and filter application that demonstrates real-time filtering capabilities with an intuitive user interface.

## 🚀 Features

- **Real-time Search**: Filter products by name as you type
- **Stock Filter**: Toggle to show only in-stock products
- **Category Organization**: Products automatically grouped by category
- **Visual Stock Indicators**: Out-of-stock items displayed in red
- **Responsive Design**: Clean table layout with search controls
- **Case-Insensitive Search**: Search works regardless of capitalization

## 🎮 How to Use

1. **Search Products**: Type in the search box to filter products by name
2. **Filter by Stock**: Check "Only show products in stock" to hide out-of-stock items
3. **Browse Categories**: Products are automatically organized by category (Fruits, Vegetables)
4. **Visual Feedback**: Out-of-stock items appear in red text

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/fitowashere/Projects/tree/main/simple_search
cd simple_search
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── App.js          # Main application component with all logic
├── index.js        # React entry point
└── index.css       # Global styles (if needed)
```

## 🧩 Component Architecture

### `FilterableProductTable` (Main Component)
- **State Management**: Controls filter text and stock visibility
- **Props Drilling**: Passes state and handlers to child components
- **Composition**: Combines SearchBar and ProductTable components

### `SearchBar` Component
- **Text Input**: Real-time search functionality
- **Checkbox**: Toggle for stock-only filtering
- **Event Handlers**: Controlled components with onChange events

### `ProductTable` Component
- **Filtering Logic**: Applies text and stock filters to product list
- **Dynamic Rendering**: Creates table rows based on filtered data
- **Category Management**: Automatically inserts category headers

### `ProductRow` Component
- **Conditional Styling**: Red text for out-of-stock items
- **Data Display**: Shows product name and price

### `ProductCategoryRow` Component
- **Header Generation**: Creates category divider rows
- **Styling**: Full-width header spanning both columns

## 🎯 Key Features Explained

### Real-time Filtering
```javascript
// Case-insensitive search implementation
product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
```

### Stock Management
```javascript
// Stock-only filter logic
if (inStockOnly && !product.stocked) {
  return; // Skip out-of-stock items
}
```

### Dynamic Category Headers
- Categories automatically appear when product category changes
- No duplicate category headers
- Clean visual separation between product types

## 📊 Sample Data Structure

```javascript
{
  category: "Fruits",
  price: "$1", 
  stocked: true,
  name: "Apple"
}
```

## 🎨 Styling Opportunities

The app uses minimal inline styling but can be enhanced with:
- CSS modules for component-specific styles
- Styled-components for dynamic theming
- CSS Grid/Flexbox for responsive layouts
- Material-UI or Bootstrap for professional appearance

## 🚀 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## 🔧 Technical Implementation

### State Management
- **Controlled Components**: All inputs managed by React state
- **Lifting State Up**: Filter state managed in parent component
- **Props Drilling**: State passed down through component hierarchy

### Performance Considerations
- **Efficient Filtering**: Filters applied during render, not stored
- **Key Props**: Proper keys for dynamic list rendering
- **Minimal Re-renders**: State updates only when necessary

### Data Flow
1. User types in search box → `setFilterText` called
2. Parent state updates → child components re-render
3. ProductTable applies filters → displays filtered results
4. Checkbox state changes → `setInStockOnly` updates view

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🎉 Future Enhancements

- [ ] Add sorting by name, price, or stock status
- [ ] Implement price range filtering
- [ ] Add product images and descriptions
- [ ] Create add/edit/delete functionality for products
- [ ] Implement local storage for user preferences
- [ ] Add export functionality (CSV, PDF)
- [ ] Include pagination for large product lists
- [ ] Add advanced search with multiple criteria
- [ ] Implement product comparison feature
- [ ] Add shopping cart functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

None at this time. Please report any bugs by opening an issue.

---

**Perfect for learning React fundamentals!** 📚 This project demonstrates key concepts like state management, component composition, conditional rendering, and controlled components.