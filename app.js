function getContrastColor(hexColor) {
  if (hexColor.slice(0, 1) === '#') {
    hexColor = hexColor.slice(1);
  }
  var r = parseInt(hexColor.substr(0,2),16);
  var g = parseInt(hexColor.substr(2,2),16);
  var b = parseInt(hexColor.substr(4,2),16);
  var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? 'black' : 'white';
}

function createFlavorCategory(category, flavors, level = 1) {
  const categoryElement = document.createElement('div');
  categoryElement.className = 'flavor-category level-' + level;
  const backgroundColor = flavorColors[category] || '#bdbdbd';
  categoryElement.style.backgroundColor = backgroundColor;
  categoryElement.style.color = getContrastColor(backgroundColor);
  if (level === 1) {
    categoryElement.classList.add('main-category');
  }

  const categoryName = document.createElement('div');
  categoryName.className = 'category-name';
  categoryName.textContent = category;
  categoryElement.appendChild(categoryName);

  categoryElement.addEventListener('click', (event) => {
    event.stopPropagation();
    const flavorWheel = document.getElementById('flavor-wheel');
    const currentCategories = document.querySelectorAll(`.flavor-category.level-${level}`);
    const subcategoryContainer = document.querySelector('.subcategory-container.level-' + (level + 1));

    if (subcategoryContainer) {
      subcategoryContainer.remove();
      currentCategories.forEach(element => {
        element.style.display = '';
      });
      flavorWheel.style.gridTemplateColumns = '';
      
      if (level === 1) {
        const mainCategories = document.querySelectorAll('.flavor-category.main-category');
        mainCategories.forEach(element => {
          element.style.display = '';
        });
      }
    } else {
      currentCategories.forEach(element => {
        if (element !== categoryElement) {
          element.style.display = 'none';
        }
      });

      if (level === 1) {
        const mainCategories = document.querySelectorAll('.flavor-category.main-category');
        mainCategories.forEach(element => {
          if (element !== categoryElement) {
            element.style.display = 'none';
          }
        });
      }

      flavorWheel.style.gridTemplateColumns = '1fr';

      const newSubcategoryContainer = document.createElement('div');
      newSubcategoryContainer.className = `subcategory-container level-${level + 1}`;

      if (Array.isArray(flavors)) {
        flavors.forEach(flavor => {
          if (flavor !== category) {
            const flavorItem = document.createElement('div');
            flavorItem.className = 'flavor-item';
            flavorItem.textContent = flavor;
            const backgroundColor = flavorColors[flavor] || '#bdbdbd';
            flavorItem.style.backgroundColor = backgroundColor;
            flavorItem.style.color = getContrastColor(backgroundColor);
            newSubcategoryContainer.appendChild(flavorItem);
          }
        });
      } else {
        for (const subcategory in flavors) {
          const subFlavors = flavors[subcategory];
          if (subcategory === category && Array.isArray(subFlavors)) {
            subFlavors.forEach(flavor => {
              const flavorItem = document.createElement('div');
              flavorItem.className = 'flavor-item';
              flavorItem.textContent = flavor;
              const backgroundColor = flavorColors[flavor] || '#bdbdbd';
              flavorItem.style.backgroundColor = backgroundColor;
              flavorItem.style.color = getContrastColor(backgroundColor);
              newSubcategoryContainer.appendChild(flavorItem);
            });
          } else {
            const subcategoryElement = createFlavorCategory(subcategory, subFlavors, level + 1);
            newSubcategoryContainer.appendChild(subcategoryElement);
          }
        }
      }

      categoryElement.insertAdjacentElement('afterend', newSubcategoryContainer);
    }
  });

  return categoryElement;
}

function createFlavorWheel(wheel) {
  const flavorWheelElement = document.getElementById('flavor-wheel');

  for (const category in wheel) {
    const flavors = wheel[category];
    const categoryElement = createFlavorCategory(category, flavors, 1);
    flavorWheelElement.appendChild(categoryElement);
  }
}

function setupSearch() {
  console.log("Setting up search");
  const searchBar = document.getElementById('search-bar');
  if (!searchBar) {
    console.error("Search bar not found");
    return;
  }
  searchBar.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    console.log("Search term:", searchTerm);
    if (searchTerm) {
      searchAndRevealFlavor(searchTerm);
    } else {
      resetFlavorWheel();
    }
  });
}

function searchAndRevealFlavor(searchTerm) {
  console.log("Searching for:", searchTerm);
  let found = false;
  let foundPath = [];

  function searchInCategory(category, flavors, path = []) {
    console.log("Searching in category:", category);
    if (Array.isArray(flavors)) {
      for (const flavor of flavors) {
        if (flavor.toLowerCase().includes(searchTerm)) {
          console.log("Found match:", flavor);
          found = true;
          foundPath = [...path, category, flavor];
          return true;
        }
      }
    } else if (typeof flavors === 'object') {
      for (const subcategory in flavors) {
        if (searchInCategory(subcategory, flavors[subcategory], [...path, category])) {
          return true;
        }
      }
    }
    return false;
  }

  searchInCategory('root', flavorWheel);

  if (found) {
    revealPath(foundPath);
  } else {
    console.log("No match found");
    resetFlavorWheel();
  }
}

function revealPath(path) {
  console.log("Revealing path:", path);
  const allItems = document.querySelectorAll('.flavor-category, .flavor-item');
  allItems.forEach(item => item.style.display = 'none');

  let currentLevel = document.getElementById('flavor-wheel');
  
  path.forEach((item, index) => {
    console.log("Revealing item:", item);
    const itemElement = Array.from(currentLevel.children).find(el => el.textContent.trim() === item);
    if (itemElement) {
      itemElement.style.display = '';
      if (index === path.length - 1) {
        itemElement.classList.add('search-highlight');
      } else {
        itemElement.classList.remove('search-highlight');
        const nextLevel = itemElement.nextElementSibling;
        if (nextLevel && nextLevel.classList.contains('subcategory-container')) {
          nextLevel.style.display = '';
          currentLevel = nextLevel;
        } else {
          console.log("Simulating click on:", item);
          itemElement.click(); // Simulate click to open subcategory
          currentLevel = itemElement.nextElementSibling;
        }
      }
    } else {
      console.error("Item not found:", item);
    }
  });
}

function resetFlavorWheel() {
  console.log("Resetting flavor wheel");
  const allItems = document.querySelectorAll('.flavor-category, .flavor-item');
  allItems.forEach(item => {
    item.style.display = '';
    item.classList.remove('search-highlight');
  });
  const subcategoryContainers = document.querySelectorAll('.subcategory-container');
  subcategoryContainers.forEach(container => container.remove());
  document.getElementById('flavor-wheel').style.gridTemplateColumns = '';
}

// Initialize the flavor wheel and search functionality
console.log("Initializing app");
createFlavorWheel(flavorWheel);
setupSearch();
